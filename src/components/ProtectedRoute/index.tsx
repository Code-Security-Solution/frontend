import { useNavigate } from 'react-router-dom';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useUserInfoStore } from '@/stores/useUserInfoStore';
import DimmedLoadingPage from '@/pages/LoadingPage/DimmedLoadingPage';

interface ProtectedRouteProps {
  authority: 'memberOnly' | 'nonMemberOnly';
  redirectPath: string;
}

const ProtectedRoute = ({ authority, redirectPath, children }: PropsWithChildren<ProtectedRouteProps>) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUserInfoStore();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (authority === 'memberOnly' && !isAuthenticated) {
      navigate(redirectPath, { replace: false });
    }

    if (authority === 'nonMemberOnly' && isAuthenticated) {
      navigate(redirectPath, { replace: false });
    }

    setAuthChecked(true);
  }, []);

  if (!authChecked) {
    return <DimmedLoadingPage />;
  }

  return children;
};

export default ProtectedRoute;
