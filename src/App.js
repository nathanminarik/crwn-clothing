import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.scss';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux'
import { AuthenticationPage, HomePage, ShopPage } from './pages';
import { Header } from './components';

class AppWithoutHydration extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		const { 
			setCurrentUser
		} = this.props;

		// The following is firebase specific
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});

			} else {
				setCurrentUser(userAuth)
			}

		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/authenticate' component={AuthenticationPage} />
				</Switch>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export const App = connect(
	null,
	mapDispatchToProps
)(AppWithoutHydration);
