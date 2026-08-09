import React from 'react';
import { SyncStatusBadge } from './SyncStatusBadge';
import { UserRole, Employee } from '@arham/shared';

export type ViewType = 'clients' | 'trades' | 'my-clients' | 'employees' | 'incentives';

interface NavbarProps {
  currentView: ViewType;
  onSelectView: (view: ViewType) => void;
  userRole: UserRole;
  employeeId: string;
  onRoleChange: (role: UserRole, empId: string) => void;
  syncStatus: any;
  onTriggerSync: () => void;
  isSyncing: boolean;
  employees: (Employee & { mappedClientCount?: number })[];
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onSelectView,
  userRole,
  employeeId,
  onRoleChange,
  syncStatus,
  onTriggerSync,
  isSyncing,
  employees
}) => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <span>Arham Fintech</span>
          <span className="brand-badge">Ops Portal</span>
        </div>

        <div className="nav-links">
          <button
            className={`nav-btn ${currentView === 'clients' ? 'active' : ''}`}
            onClick={() => onSelectView('clients')}
          >
            Clients
          </button>
          <button
            className={`nav-btn ${currentView === 'trades' ? 'active' : ''}`}
            onClick={() => onSelectView('trades')}
          >
            Trades
          </button>
          <button
            className={`nav-btn ${currentView === 'my-clients' ? 'active' : ''}`}
            onClick={() => onSelectView('my-clients')}
          >
            My Clients
          </button>
          <button
            className={`nav-btn ${currentView === 'employees' ? 'active' : ''}`}
            onClick={() => onSelectView('employees')}
          >
            Employees
          </button>
          <button
            className={`nav-btn ${currentView === 'incentives' ? 'active' : ''}`}
            onClick={() => onSelectView('incentives')}
          >
            Incentives
          </button>
        </div>

        <div className="nav-controls">
          <div className="role-selector">
            <label>Demo Role:</label>
            <select
              value={`${userRole}:${employeeId}`}
              onChange={(e) => {
                const [role, id] = e.target.value.split(':');
                onRoleChange(role as UserRole, id);
              }}
            >
              {employees && employees.length > 0 ? (
                <>
                  <optgroup label="Management Accounts">
                    {employees
                      .filter((e) => e.role === 'MANAGEMENT')
                      .map((emp) => (
                        <option key={emp.id} value={`MANAGEMENT:${emp.id}`}>
                          Management: {emp.id} ({emp.name})
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Relationship Managers (18 RMs)">
                    {employees
                      .filter((e) => e.role === 'EMPLOYEE')
                      .map((emp) => (
                        <option key={emp.id} value={`EMPLOYEE:${emp.id}`}>
                          {emp.id} — {emp.name} {emp.mappedClientCount !== undefined ? `(${emp.mappedClientCount} clients)` : ''}
                        </option>
                      ))}
                  </optgroup>
                </>
              ) : (
                <>
                  <option value="MANAGEMENT:EMP-001">Management (EMP-001)</option>
                  <option value="EMPLOYEE:EMP-003">Employee (EMP-003)</option>
                </>
              )}
            </select>
          </div>

          {syncStatus && (
            <SyncStatusBadge
              status={syncStatus.currentStatus}
              version={syncStatus.activeSnapshotVersion}
              lastUpdated={syncStatus.lastSuccessfulSync}
              latestError={syncStatus.latestError}
              onTriggerSync={onTriggerSync}
              isSyncing={isSyncing}
            />
          )}
        </div>
      </nav>

      {syncStatus?.currentStatus === 'FAILED' && (
        <div className="warning-banner">
          ⚠️ <strong>BSE Synchronization Unavailable:</strong> {syncStatus.latestError || 'Network timeout or API disruption'}. Showing last known-good snapshot version v{syncStatus.activeSnapshotVersion}.
        </div>
      )}
    </header>
  );
};
