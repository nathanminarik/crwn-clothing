import React from 'react';
import './authentication.styles.scss';

import { SignIn, SignUp } from './../../components';

export const AuthenticationPage = () => (
    <div className='authentication-page'>
        <SignIn />
        <SignUp />
    </div>
)