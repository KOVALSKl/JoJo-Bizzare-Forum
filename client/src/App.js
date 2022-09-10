import './App.css';
import AppRouter from './components/AppRouter';
import { BrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <AppRouter />

        <Outlet />
      </BrowserRouter>
    </div>
  );
}

export default App;
