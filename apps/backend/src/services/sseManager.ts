import { Response } from 'express';
import { RealtimeEvent } from '@arham/shared';

class SSEManager {
  private clients: Set<Response> = new Set();

  addClient(res: Response): void {
    this.clients.add(res);
    console.log(`[SSE] Client connected. Total clients: ${this.clients.size}`);

    res.on('close', () => {
      this.clients.delete(res);
      console.log(`[SSE] Client disconnected. Total clients: ${this.clients.size}`);
    });
  }

  broadcast(event: RealtimeEvent): void {
    console.log(`[SSE Broadcast] Event=${event.type}, SyncVersion=${event.syncVersion}, Clients=${this.clients.size}`);
    const dataString = `data: ${JSON.stringify(event)}\n\n`;

    for (const client of this.clients) {
      try {
        client.write(dataString);
      } catch (err) {
        console.error('[SSE Broadcast Error]', err);
        this.clients.delete(client);
      }
    }
  }

  getClientCount(): number {
    return this.clients.size;
  }
}

export const sseManager = new SSEManager();
