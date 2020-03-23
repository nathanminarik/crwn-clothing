import React, { useState } from 'react';
import { FormInput } from './../form-input';
import { CustomButton } from './../custom-button';
import { auth, createUserProfileDocument } from './../../firebase/firebase.utils'

import './sign-up.styles.scss';

export const SignUp = (props) => {

    const INITIAL_STATE = {
        confirmPassword: '',
        displayName: '',
        email: '',
        password: ''
    };

    const [userCredentials, setUserCredentials] = useState(INITIAL_STATE)
    const {
        confirmPassword,
        displayName,
        email,
        password
    } = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            setUserCredentials(INITIAL_STATE);

        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account.</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    id='displayName'
                    label='Display Name'
                    name='displayName'
                    onChange={handleChange}
                    type='text'
                    value={displayName}
                />
                <FormInput
                    id='email'
                    label='Email'
                    name='email'
                    onChange={handleChange}
                    type='email'
                    value={email}
                />
                <FormInput
                    id='password'
                    label='Password'
                    name='password'
                    onChange={handleChange}
                    type='password'
                    value={password}
                />
                <FormInput
                    id='confirmPassword'
                    label='Confirm Password'
                    name='confirmPassword'
                    onChange={handleChange}
                    type='password'
                    value={confirmPassword}
                />
                <CustomButton
                    type='submit'>
                        SIGN UP
                </CustomButton>
            </form>
        </div>
    );
}
