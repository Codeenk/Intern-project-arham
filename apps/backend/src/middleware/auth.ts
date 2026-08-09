import { Request, Response, NextFunction } from 'express';
import { UserRole } from '@arham/shared';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: UserRole;
  };
}

export function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  // Read role and employee ID from request headers or query (defaulting to MANAGEMENT for simple browser testing if unset)
  const roleHeader = (req.headers['x-user-role'] as string)?.toUpperCase();
  const empIdHeader = req.headers['x-employee-id'] as string;

  const role: UserRole = roleHeader === 'EMPLOYEE' ? 'EMPLOYEE' : 'MANAGEMENT';
  const id: string = empIdHeader || (role === 'EMPLOYEE' ? 'EMP-003' : 'EMP-001');

  req.user = { id, role };
  next();
}

export function requireManagement(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== 'MANAGEMENT') {
    return res.status(403).json({
      error: 'Forbidden: Management access required'
    });
  }
  next();
}
