import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './../../firebase/firebase.utils';
import { Logo } from './../../assets';

import './header.styles.scss';

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export const Header = connect(mapStateToProps)(({
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
));
