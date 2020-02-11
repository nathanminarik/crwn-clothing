import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

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
		// The following is firebase specific
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					});
				});

			} else {
				this.setState({
					currentUser: userAuth
				});
			}

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
