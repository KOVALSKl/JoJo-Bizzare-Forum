import './App.css';
import AppRouter from './components/AppRouter';
import { BrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { open, close } from './features/menu/menuSlice'

function App() {

  const isMenuOpen = useSelector((state) => state.menu.value);
  const dispatch = useDispatch();

  return (
    <div className='app' onClick={() => {
      if (isMenuOpen) dispatch(close());
    }}>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

export default App;
