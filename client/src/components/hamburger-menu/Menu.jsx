import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

import account from '../../assets/account-circle.svg'

function Menu({ active }) {

    return (
        <div id='menu' style={
            (active)
                ? { visibility: 'visible' }
                : { visibility: 'hidden' }
        }>
            <div className="content-container">
                <ul className='menu'>
                    <li className='menu-item'><Link to="/home">home</Link></li>
                    <li className='menu-item'><Link to="/news">news</Link></li>
                    <li className='menu-item'><Link to="/manga">manga</Link></li>
                    <li className='menu-item'><Link to="/series">series</Link></li>
                    <li className='menu-item'><Link to="/discussions">discussions</Link></li>
                    <li className='menu-item'><Link to="/history">history</Link></li>
                    <li className='menu-item'><Link to="/about">about us</Link></li>
                </ul>
                <div className='account-block'>
                    <img src={account} alt="Account image" id='userlogo' />
                    <span id='userlogin'>Jolyne <br />Higoshikata</span>
                </div>
            </div>
        </div>


    );
}

export default Menu;