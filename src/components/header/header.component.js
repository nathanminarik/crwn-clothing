import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './../../firebase/firebase.utils';
import { Logo } from './../../assets';

import './header.styles.scss';
import { CartIcon } from './../cart-icon';
import { CartDropdown } from './../cart-dropdown';

const mapStateToProps = ({
    cart: { isHidden },
    user: { currentUser }
}) => ({
    currentUser: currentUser,
    isCartHidden: isHidden
});

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

export const Header = connect(mapStateToProps)(HeaderNotConnected);
