import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle.tsx';
import theme from './styles/theme.ts';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
    mutations: {
      throwOnError: true,
    },
  },
});

const enableMockWorker = async () => {
  if (import.meta.env.VITE_ENV === 'production') return;

  const { worker } = await import('./mocks/browser');
  worker.start();
};

enableMockWorker().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>,
  );
});
