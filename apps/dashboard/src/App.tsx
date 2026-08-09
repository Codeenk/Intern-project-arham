import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { UserRole, RealtimeEvent, Employee } from '@arham/shared';
import { Navbar, ViewType } from './components/Navbar';
import { ClientsView } from './views/ClientsView';
import { TradesView } from './views/TradesView';
import { MyClientsView } from './views/MyClientsView';
import { EmployeesView } from './views/EmployeesView';
import { IncentivesView } from './views/IncentivesView';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('clients');
  const [userRole, setUserRole] = useState<UserRole>('MANAGEMENT');
  const [employeeId, setEmployeeId] = useState<string>('EMP-001');
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  const queryClient = useQueryClient();

  // Fetch Employees List for Dynamic Role Switcher
  const { data: employees } = useQuery<(Employee & { mappedClientCount?: number })[]>({
    queryKey: ['all-employees-list'],
    queryFn: async () => {
      const res = await fetch('/api/employees', {
        headers: {
          'x-user-role': 'MANAGEMENT',
          'x-employee-id': 'EMP-001'
        }
      });
      if (!res.ok) return [];
      return res.json();
    }
  });

  // Fetch Sync Status
  const { data: syncStatus, refetch: refetchSyncStatus } = useQuery({
    queryKey: ['sync-status'],
    queryFn: async () => {
      const res = await fetch('/api/sync/status', {
        headers: {
          'x-user-role': userRole,
          'x-employee-id': employeeId
        }
      });
      if (!res.ok) throw new Error('Failed to fetch sync status');
      return res.json();
    },
    refetchInterval: 10000 // Backup poll every 10 seconds
  });

  // REALTIME UPDATES: Server-Sent Events (SSE) Listener
  useEffect(() => {
    console.log('[SSE] Subscribing to /api/events stream...');
    const eventSource = new EventSource('/api/events');

    eventSource.onmessage = (event) => {
      try {
        const payload: RealtimeEvent = JSON.parse(event.data);
        console.log('[SSE Received]', payload);

        if (payload.type === 'DATA_UPDATED') {
          console.log(`[Realtime Update] New snapshot v${payload.syncVersion} published! Invalidating active queries...`);
          queryClient.invalidateQueries();
          refetchSyncStatus();
        }
      } catch (err) {
        console.error('[SSE Parse Error]', err);
      }
    };

    eventSource.onerror = (err) => {
      console.warn('[SSE Connection Warning]', err);
    };

    return () => {
      eventSource.close();
    };
  }, [queryClient, refetchSyncStatus]);

  // Handle Manual Sync Trigger
  const handleTriggerSync = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch('/api/sync/trigger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': userRole,
          'x-employee-id': employeeId
        },
        body: JSON.stringify({ autoRun: true })
      });
      const data = await res.json();
      console.log('[Manual Sync Result]', data);
      await refetchSyncStatus();
      queryClient.invalidateQueries();
    } catch (err) {
      console.error('[Manual Sync Error]', err);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleRoleChange = (role: UserRole, empId: string) => {
    setUserRole(role);
    setEmployeeId(empId);
  };

  return (
    <div className="app-container">
      <Navbar
        currentView={currentView}
        onSelectView={setCurrentView}
        userRole={userRole}
        employeeId={employeeId}
        onRoleChange={handleRoleChange}
        syncStatus={syncStatus}
        onTriggerSync={handleTriggerSync}
        isSyncing={isSyncing}
        employees={employees || []}
      />

      <main className="main-content">
        {currentView === 'clients' && (
          <ClientsView userRole={userRole} employeeId={employeeId} />
        )}
        {currentView === 'trades' && (
          <TradesView userRole={userRole} employeeId={employeeId} />
        )}
        {currentView === 'my-clients' && (
          <MyClientsView userRole={userRole} employeeId={employeeId} />
        )}
        {currentView === 'employees' && (
          <EmployeesView userRole={userRole} employeeId={employeeId} />
        )}
        {currentView === 'incentives' && (
          <IncentivesView userRole={userRole} employeeId={employeeId} />
        )}
      </main>
    </div>
  );
};
