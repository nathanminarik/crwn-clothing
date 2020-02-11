import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/firebase.utils';
import { Logo } from './../../assets';

import './header.styles.scss';

export const Header = ({
    currentUser
}) => (
    <div className="header">
        <Link to ='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
            {currentUser
                ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                : <Link to='/authenticate' className='option'>SIGN IN</Link>}
        </div>
    </div>
)