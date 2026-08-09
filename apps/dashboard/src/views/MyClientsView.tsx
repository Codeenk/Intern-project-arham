import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Client, PaginatedResponse } from '@arham/shared';

interface MyClientsViewProps {
  userRole: string;
  employeeId: string;
}

export const MyClientsView: React.FC<MyClientsViewProps> = ({ userRole, employeeId }) => {
  const [page, setPage] = useState(1);
  const pageSize = 15;

  const { data, isLoading, error } = useQuery<PaginatedResponse<Client>>({
    queryKey: ['my-clients', employeeId, page],
    queryFn: async () => {
      const res = await fetch(`/api/my-clients?page=${page}&pageSize=${pageSize}`, {
        headers: {
          'x-user-role': userRole,
          'x-employee-id': employeeId
        }
      });
      if (!res.ok) throw new Error('Failed to fetch mapped clients');
      return res.json();
    }
  });

  const totalPages = data ? Math.ceil(data.total / data.pageSize) : 1;

  return (
    <div>
      <div className="view-header">
        <div>
          <h1 className="view-title">My Mapped Clients</h1>
          <p className="view-subtitle">
            Clients assigned to employee <strong>{employeeId}</strong> (Backend Authorised Scope)
          </p>
        </div>
        <div>
          <span className="badge badge-green">Mapped Clients: {data?.total || 0}</span>
        </div>
      </div>

      {isLoading ? (
        <p style={{ color: 'var(--text-muted)' }}>Loading mapped clients...</p>
      ) : error ? (
        <p style={{ color: 'var(--danger)' }}>Error loading mapped clients: {(error as Error).message}</p>
      ) : (
        <>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Client ID</th>
                  <th>Client Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Snapshot Version</th>
                  <th>Assigned Manager</th>
                </tr>
              </thead>
              <tbody>
                {data?.data.map((client) => (
                  <tr key={client.id}>
                    <td><strong>{client.id}</strong></td>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                    <td><span className="badge badge-green">v{client.snapshotVersion}</span></td>
                    <td><span className="badge badge-blue">{employeeId}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination-bar">
            <span className="pagination-info">
              Showing page {page} of {totalPages} ({data?.total} mapped clients)
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
