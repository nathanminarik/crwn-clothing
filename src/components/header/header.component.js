import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './../../assets';

import './header.styles.scss';

export const Header = () => (
    <div className="header">
        <Link to ='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
        </div>
    </div>
)