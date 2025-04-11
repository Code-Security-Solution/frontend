import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import IntroductionPage from './pages/IntroductionPage';
import MyPage from './pages/MyPage';
import SummaryReportPage from './pages/SummaryReportPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // 모두 접근 가능한 페이지
      { index: true, element: <LandingPage /> },
      { path: '/introduction', element: <IntroductionPage /> },
      { path: '/summary/:scanId', element: <SummaryReportPage /> },

      // 로그인 안 한 사용자만 접근 가능한 페이지
      {
        path: '/login',
        element: (
          <ProtectedRoute authority="nonMemberOnly" redirectPath="/">
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/register',
        element: (
          <ProtectedRoute authority="nonMemberOnly" redirectPath="/">
            <RegisterPage />
          </ProtectedRoute>
        ),
      },

      // 로그인 한 사용자만 접근 가능한 페이지
      {
        path: '/mypage/:email',
        element: (
          <ProtectedRoute authority="memberOnly" redirectPath="/">
            <MyPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
