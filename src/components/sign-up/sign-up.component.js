import React from 'react';
import { FormInput } from './../form-input';
import { CustomButton } from './../custom-button';
import { auth, createUserProfileDocument } from './../../firebase/firebase.utils'

import './sign-up.styles.scss';

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmPassword: '',
            email: '',
            displayName: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {
            confirmPassword,
            displayName,
            email,
            password
        } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                confirmPassword: '',
                email: '',
                displayName: '',
                password: ''
            });

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const {
            confirmPassword,
            displayName,
            email,
            password
        } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account.</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        id='displayName'
                        label='Display Name'
                        name='displayName'
                        onChange={this.handleChange}
                        type='text'
                        value={displayName}
                    />
                    <FormInput
                        id='email'
                        label='Email'
                        name='email'
                        onChange={this.handleChange}
                        type='email'
                        value={email}
                    />
                    <FormInput
                        id='password'
                        label='Password'
                        name='password'
                        onChange={this.handleChange}
                        type='password'
                        value={password}
                    />
                    <FormInput
                        id='confirmPassword'
                        label='Confirm Password'
                        name='confirmPassword'
                        onChange={this.handleChange}
                        type='password'
                        value={confirmPassword}
                    />
                    <CustomButton
                        type='submit'>
                            SIGN UP
                    </CustomButton>
                </form>
            </div>
        )
    }
}