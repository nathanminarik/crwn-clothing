import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils'

import { AuthenticationPage, HomePage, ShopPage } from './pages';
import { Header } from './components';

export class App extends React.Component {
	constructor(props) {
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			this.setState(() => ({
				currentUser: user
			}), () => console.log(this.state))
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/authenticate' component={AuthenticationPage} />
				</Switch>
			</div>
		)
	}
}
