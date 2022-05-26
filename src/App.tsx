import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './common/Menu';
import './App.css';

function App() {
  return (
    <div className='App'>
      <ResponsiveAppBar />
      <Outlet />
    </div>
  );
}

export default App;
