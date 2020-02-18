import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from './../../firebase/firebase.utils';
import { selectCartIsHidden, selectCurrentUser } from '../../redux';

import { CartIcon } from './../cart-icon';
import { CartDropdown } from './../cart-dropdown';

import './header.styles.scss';
import { Logo } from './../../assets';

const HeaderNotConnected = ({
    currentUser,
    isCartHidden
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
            <CartIcon />
        </div>
        { isCartHidden ? null : <CartDropdown /> }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartHidden: selectCartIsHidden
});

export const Header = connect(mapStateToProps)(HeaderNotConnected);
