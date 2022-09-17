import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Menu.css'

import account from '../../assets/account-circle.svg'
import UserBlock from '../user-block/UserBlock';
import { open, close } from '../../features/menu/menuSlice'

function Menu({ active }) {

    const dispatch = useDispatch();

    return (
        <div id='menu' style={
            (active)
                ? { visibility: 'visible' }
                : { visibility: 'hidden' }
        }>
            <div className="content-container">
                <ul className='menu' onClickCapture={(e) => {
                    if (e.target.className === 'item-link') {
                        dispatch(close());
                    }
                }}>
                    <li className='menu-item'><Link className='item-link' to="/home">home</Link></li>
                    <li className='menu-item'><Link className='item-link' to="/news">news</Link></li>
                    <li className='menu-item'><Link className='item-link' to="/manga">manga</Link></li>
                    <li className='menu-item'><Link className='item-link' to="/series">series</Link></li>
                    <li className='menu-item'><Link className='item-link' to="/discussions">discussions</Link></li>
                    <li className='menu-item'><Link className='item-link' to="/history">history</Link></li>
                    <li className='menu-item'><Link className='item-link' to="/about">about us</Link></li>
                </ul>
                <UserBlock classNames={['account-block']} />
            </div>
        </div>


    );
}

export default Menu;