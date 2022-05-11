import { ReactElement, ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children?: ReactNode;
}

const ProtectedRoute = ({
  isAllowed = false,
  redirectPath = '/',
  children,
}: ProtectedRouteProps): ReactElement => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
