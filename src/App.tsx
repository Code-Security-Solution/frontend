import { BrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/common/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Outlet />
    </BrowserRouter>
  );
};

export default App;
