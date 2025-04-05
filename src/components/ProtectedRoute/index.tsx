import { useNavigate } from 'react-router-dom';
import { PropsWithChildren, useEffect } from 'react';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
}

const ProtectedRoute = ({ isAllowed, redirectPath, children }: PropsWithChildren<ProtectedRouteProps>) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAllowed) navigate(redirectPath);
  }, []);

  return children;
};

export default ProtectedRoute;
