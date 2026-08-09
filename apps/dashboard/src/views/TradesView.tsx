import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PaginatedResponse, Trade } from '@arham/shared';

interface TradesViewProps {
  userRole: string;
  employeeId: string;
}

export const TradesView: React.FC<TradesViewProps> = ({ userRole, employeeId }) => {
  const [page, setPage] = useState(1);
  const [clientId, setClientId] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const pageSize = 15;

  const { data, isLoading, error } = useQuery<PaginatedResponse<Trade & { client?: { name: string } }>>({
    queryKey: ['trades', page, clientId, from, to],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.set('page', String(page));
      params.set('pageSize', String(pageSize));
      if (clientId) params.set('clientId', clientId.trim());
      if (from) params.set('from', from);
      if (to) params.set('to', to);

      const res = await fetch(`/api/trades?${params.toString()}`, {
        headers: {
          'x-user-role': userRole,
          'x-employee-id': employeeId
        }
      });
      if (!res.ok) throw new Error('Failed to fetch trades');
      return res.json();
    }
  });

  const totalPages = data ? Math.ceil(data.total / data.pageSize) : 1;

  return (
    <div>
      <div className="view-header">
        <div>
          <h1 className="view-title">Trades Ledger</h1>
          <p className="view-subtitle">
            Isolated local database trades ledger (Active Snapshot v{data?.snapshotVersion || 1})
          </p>
        </div>
        <div>
          <span className="badge badge-blue">Total Trades: {data?.total || 0}</span>
        </div>
      </div>

      <div className="filter-bar">
        <div className="filter-group">
          <label>Client ID</label>
          <input
            type="text"
            className="filter-input"
            placeholder="e.g. CLI-0001"
            value={clientId}
            onChange={(e) => {
              setClientId(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <div className="filter-group">
          <label>From Date</label>
          <input
            type="date"
            className="filter-input"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <div className="filter-group">
          <label>To Date</label>
          <input
            type="date"
            className="filter-input"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {(clientId || from || to) && (
          <button
            className="page-btn"
            style={{ marginBottom: '2px' }}
            onClick={() => {
              setClientId('');
              setFrom('');
              setTo('');
              setPage(1);
            }}
          >
            Clear Filters
          </button>
        )}
      </div>

      {isLoading ? (
        <p style={{ color: 'var(--text-muted)' }}>Loading trades from local database...</p>
      ) : error ? (
        <p style={{ color: 'var(--danger)' }}>Error loading trades: {(error as Error).message}</p>
      ) : (
        <>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Trade ID</th>
                  <th>Client</th>
                  <th>Date</th>
                  <th>Symbol</th>
                  <th>Quantity</th>
                  <th>Price (₹)</th>
                  <th>Brokerage (₹)</th>
                  <th>Snapshot</th>
                </tr>
              </thead>
              <tbody>
                {data?.data.map((trade) => (
                  <tr key={trade.id}>
                    <td><strong>{trade.id}</strong></td>
                    <td>
                      <div>{trade.client?.name || trade.clientId}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{trade.clientId}</div>
                    </td>
                    <td>{new Date(trade.tradeDate).toLocaleString()}</td>
                    <td><span className="badge badge-amber">{trade.symbol}</span></td>
                    <td>{trade.quantity}</td>
                    <td>₹{trade.price.toLocaleString()}</td>
                    <td><strong>₹{trade.brokerage.toLocaleString()}</strong></td>
                    <td><span className="badge badge-green">v{trade.snapshotVersion}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination-bar">
            <span className="pagination-info">
              Showing page {page} of {totalPages} ({data?.total} total matching trades)
            </span>
            <div className="pagination-btns">
              <button
                className="page-btn"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </button>
              <button
                className="page-btn"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
