import React from 'react';

interface SyncStatusProps {
  status: 'IDLE' | 'SYNCING' | 'SUCCESS' | 'FAILED' | 'RETRYING';
  version: number;
  lastUpdated: string | null;
  latestError: string | null;
  onTriggerSync: () => void;
  isSyncing: boolean;
}

export const SyncStatusBadge: React.FC<SyncStatusProps> = ({
  status,
  version,
  lastUpdated,
  latestError,
  onTriggerSync,
  isSyncing
}) => {
  const formattedTime = lastUpdated ? new Date(lastUpdated).toLocaleTimeString() : 'Never';

  return (
    <div className="sync-badge-container">
      <span className={`status-indicator ${status}`}></span>
      <div className="sync-info">
        <span className="sync-status-text">
          Sync {status} (v{version})
        </span>
        <span className="sync-subtext">Updated: {formattedTime}</span>
      </div>

      <button
        className="sync-trigger-btn"
        onClick={onTriggerSync}
        disabled={isSyncing || status === 'SYNCING' || status === 'RETRYING'}
      >
        {isSyncing || status === 'SYNCING' || status === 'RETRYING' ? 'Syncing...' : 'Sync Now'}
      </button>
    </div>
  );
};
