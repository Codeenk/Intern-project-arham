import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { IncentiveSummary } from '@arham/shared';

interface IncentivesViewProps {
  userRole: string;
  employeeId: string;
}

export const IncentivesView: React.FC<IncentivesViewProps> = ({ userRole, employeeId }) => {
  const { data, isLoading, error } = useQuery<{
    role: string;
    summary?: IncentiveSummary;
    summaries?: IncentiveSummary[];
    grandTotalIncentive?: number;
    snapshotVersion: number;
  }>({
    queryKey: ['incentives', userRole, employeeId],
    queryFn: async () => {
      const res = await fetch('/api/incentives', {
        headers: {
          'x-user-role': userRole,
          'x-employee-id': employeeId
        }
      });
      if (!res.ok) throw new Error('Failed to fetch incentives data');
      return res.json();
    }
  });

  return (
    <div>
      <div className="view-header">
        <div>
          <h1 className="view-title">Employee Incentives</h1>
          <p className="view-subtitle">
            Server-calculated financial incentives from trade brokerage (Active Snapshot v{data?.snapshotVersion || 1})
          </p>
        </div>
        <div>
          <span className="badge badge-green">{userRole} ACCESS</span>
        </div>
      </div>

      <div className="formula-card">
        📐 <strong>Incentive Formula:</strong> Incentive = Sum(Trade Brokerage of Mapped Clients in Active Snapshot) × Employee Incentive Rate (e.g. 10% standard RM rate / 15% Management rate).
      </div>

      {isLoading ? (
        <p style={{ color: 'var(--text-muted)' }}>Calculating server-side incentives...</p>
      ) : error ? (
        <p style={{ color: 'var(--danger)' }}>Error loading incentives: {(error as Error).message}</p>
      ) : userRole === 'EMPLOYEE' && data?.summary ? (
        <div>
          <div className="card-grid">
            <div className="card">
              <div className="card-title">Employee Name</div>
              <div className="card-value" style={{ fontSize: '1.25rem' }}>
                {data.summary.employeeName}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                ID: {data.summary.employeeId}
              </div>
            </div>

            <div className="card">
              <div className="card-title">Mapped Clients</div>
              <div className="card-value">{data.summary.mappedClientCount}</div>
            </div>

            <div className="card">
              <div className="card-title">Client Brokerage</div>
              <div className="card-value">₹{data.summary.totalBrokerage.toLocaleString()}</div>
            </div>

            <div className="card" style={{ borderColor: 'var(--primary)' }}>
              <div className="card-title">Calculated Incentive ({(data.summary.incentiveRate * 100).toFixed(0)}%)</div>
              <div className="card-value" style={{ color: '#60a5fa' }}>
                ₹{data.summary.calculatedIncentive.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      ) : userRole === 'MANAGEMENT' && data?.summaries ? (
        <div>
          <div className="card-grid">
            <div className="card">
              <div className="card-title">Total Staff Evaluated</div>
              <div className="card-value">{data.summaries.length}</div>
            </div>

            <div className="card" style={{ borderColor: 'var(--success)' }}>
              <div className="card-title">Firm Total Payout</div>
              <div className="card-value" style={{ color: '#34d399' }}>
                ₹{(data.grandTotalIncentive || 0).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Role</th>
                  <th>Mapped Clients</th>
                  <th>Total Brokerage (₹)</th>
                  <th>Incentive Rate</th>
                  <th>Calculated Payout (₹)</th>
                </tr>
              </thead>
              <tbody>
                {data.summaries.map((s) => (
                  <tr key={s.employeeId}>
                    <td><strong>{s.employeeId}</strong></td>
                    <td>{s.employeeName}</td>
                    <td>{s.email}</td>
                    <td>{s.mappedClientCount}</td>
                    <td>₹{s.totalBrokerage.toLocaleString()}</td>
                    <td><span className="badge badge-amber">{(s.incentiveRate * 100).toFixed(0)}%</span></td>
                    <td><strong style={{ color: '#60a5fa' }}>₹{s.calculatedIncentive.toLocaleString()}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p style={{ color: 'var(--text-muted)' }}>No incentive data returned.</p>
      )}
    </div>
  );
};
