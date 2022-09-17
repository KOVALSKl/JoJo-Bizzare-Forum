import './App.css';
import AppRouter from './components/AppRouter';
import { BrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { open, close } from './features/menu/menuSlice'
import { setUser } from './features/user/userSlice';
import { BASE_URL } from './utils/consts';
import { useCookies } from 'react-cookie';
const axios = require('axios').default;

function App() {

  const isMenuOpen = useSelector((state) => state.menu.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  let checkAuthor = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/user/auth`, {
        headers: {
          'Authorization': `Bearer ${cookies.token}`
        }
      });

      let { user: userData, token: updatedToken } = response.data;
      let now = new Date();
      now.setDate(now.getDate() + 1);
      setCookie('token', updatedToken, { path: '/', expires: now });

      dispatch(setUser(userData));

    } catch (e) {
      console.log(e.response.data.message);
      dispatch(setUser(null));
    }
  }

  const [cookies, setCookie] = useCookies(['token'])

  useEffect(() => {
    checkAuthor();
  }, [cookies.token])

  return (

    <BrowserRouter>
      <Header />
      <div className='app' onClick={() => {
        if (isMenuOpen) dispatch(close());
      }}>
        <AppRouter />
      </div>
      <Outlet />
    </BrowserRouter >
  );
}

export default App;
