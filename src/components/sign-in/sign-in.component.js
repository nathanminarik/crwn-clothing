import React from 'react';
import './sign-in.styles.scss';

import { FormInput } from './../form-input';
import { CustomButton } from './../custom-button';

import { signInWithGoogle } from './../../firebase/firebase.utils';

export class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.setState(() => ({
            email: '',
            password: ''
        }), () => console.log(this.state));
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with your username and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        id='email'
                        label='email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        id='password'
                        label='password'
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton
                            variant={'blue'}
                            onClick={signInWithGoogle}>Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
