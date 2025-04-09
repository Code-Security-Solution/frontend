import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './hooks/useAuth';
import IntroductionPage from './pages/IntroductionPage';
import MyPage from './pages/MyPage';
import SummaryReportPage from './pages/SummaryReportPage';

const { isLoggedIn } = useAuth();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // 모두 접근 가능한 페이지
      { index: true, element: <LandingPage /> },
      { path: '/introduction', element: <IntroductionPage /> },

      // 로그인 안 한 사용자만 접근 가능한 페이지
      {
        path: '/login',
        element: (
          <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/">
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/register',
        element: (
          <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/">
            <RegisterPage />
          </ProtectedRoute>
        ),
      },

      // 로그인 한 사용자만 접근 가능한 페이지
      {
        path: '/mypage/:email',
        element: (
          <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/">
            <MyPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/summary/:scanId',
        element: (
          <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/">
            <SummaryReportPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
