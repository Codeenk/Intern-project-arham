import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Client, PaginatedResponse } from '@arham/shared';

interface ClientsViewProps {
  userRole: string;
  employeeId: string;
}

export const ClientsView: React.FC<ClientsViewProps> = ({ userRole, employeeId }) => {
  const [page, setPage] = useState(1);
  const pageSize = 15;

  const { data, isLoading, error } = useQuery<PaginatedResponse<Client>>({
    queryKey: ['clients', page],
    queryFn: async () => {
      const res = await fetch(`/api/clients?page=${page}&pageSize=${pageSize}`, {
        headers: {
          'x-user-role': userRole,
          'x-employee-id': employeeId
        }
      });
      if (!res.ok) throw new Error('Failed to fetch clients');
      return res.json();
    }
  });

  const totalPages = data ? Math.ceil(data.total / data.pageSize) : 1;

  return (
    <div>
      <div className="view-header">
        <div>
          <h1 className="view-title">Clients Directory</h1>
          <p className="view-subtitle">
            All registered client master records (Active Snapshot v{data?.snapshotVersion || 1})
          </p>
        </div>
        <div>
          <span className="badge badge-blue">Total Clients: {data?.total || 0}</span>
        </div>
      </div>

      {isLoading ? (
        <p style={{ color: 'var(--text-muted)' }}>Loading clients from local database...</p>
      ) : error ? (
        <p style={{ color: 'var(--danger)' }}>Error loading clients: {(error as Error).message}</p>
      ) : (
        <>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Client ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Snapshot Version</th>
                  <th>Created At</th>
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
                    <td>{new Date(client.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination-bar">
            <span className="pagination-info">
              Showing page {page} of {totalPages} ({data?.total} total clients)
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
