import { Outlet } from 'react-router-dom';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export default App;
