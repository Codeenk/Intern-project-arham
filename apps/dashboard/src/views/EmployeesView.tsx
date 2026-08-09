import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Employee } from '@arham/shared';

interface EmployeesViewProps {
  userRole: string;
  employeeId: string;
}

export const EmployeesView: React.FC<EmployeesViewProps> = ({ userRole, employeeId }) => {
  const { data, isLoading, error } = useQuery<Employee[]>({
    queryKey: ['employees', userRole, employeeId],
    queryFn: async () => {
      const res = await fetch('/api/employees', {
        headers: {
          'x-user-role': userRole,
          'x-employee-id': employeeId
        }
      });
      if (!res.ok) throw new Error('Failed to fetch employees');
      return res.json();
    }
  });

  return (
    <div>
      <div className="view-header">
        <div>
          <h1 className="view-title">Employee Directory</h1>
          <p className="view-subtitle">
            Internal firm staff and relationship managers ({userRole} View)
          </p>
        </div>
        <div>
          <span className="badge badge-blue">Total Staff: {data?.length || 0}</span>
        </div>
      </div>

      {isLoading ? (
        <p style={{ color: 'var(--text-muted)' }}>Loading employees...</p>
      ) : error ? (
        <p style={{ color: 'var(--danger)' }}>Error loading employees: {(error as Error).message}</p>
      ) : (
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                {userRole === 'MANAGEMENT' && <th>Incentive Rate</th>}
                <th>Member Since</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((emp) => (
                <tr key={emp.id}>
                  <td><strong>{emp.id}</strong></td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>
                    <span className={`badge ${emp.role === 'MANAGEMENT' ? 'badge-blue' : 'badge-green'}`}>
                      {emp.role}
                    </span>
                  </td>
                  {userRole === 'MANAGEMENT' && (
                    <td>
                      <strong>{(emp.incentiveRate * 100).toFixed(0)}%</strong>
                    </td>
                  )}
                  <td>{new Date(emp.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
