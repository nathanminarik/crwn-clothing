import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { selectCurrentUser, setCurrentUser } from './redux'

import { AuthenticationPage, CheckoutPage, HomePage, ShopPage } from './pages';
import { Header } from './components';

import './App.scss';

const AppNotConnected = ({
	setCurrentUser,
	currentUser
}) => {
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
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
		});
		return unsubscribe;

	}, [setCurrentUser]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route
					exact
					path='/authenticate'
					render={() => currentUser ? <Redirect to='/' /> : <AuthenticationPage />}
				/>
				<Route exact path='/checkout' component={CheckoutPage} />
			</Switch>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppNotConnected);


// Pre hooks
// class AppNotConnected extends React.Component {

// 	unsubscribeFromAuth = null;

// 	componentDidMount() {
// 		const { 
// 			setCurrentUser
// 		} = this.props;

// 		// The following is firebase specific and uses their observer pattern. It is the equivalent of using promises and redux-thunk

// 		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
// 			if (userAuth) {
// 				const userRef = await createUserProfileDocument(userAuth);

// 				userRef.onSnapshot(snapshot => {
// 					setCurrentUser({
// 						id: snapshot.id,
// 						...snapshot.data()
// 					});
// 				});

// 			} else {
// 				setCurrentUser(userAuth)
// 			}
// 		})
// 	}

// 	componentWillUnmount() {
// 		this.unsubscribeFromAuth();
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<Header />
// 				<Switch>
// 					<Route exact path='/' component={HomePage} />
// 					<Route path='/shop' component={ShopPage} />
// 					<Route
// 						exact
// 						path='/authenticate'
// 						render={() => this.props.currentUser ? <Redirect to='/' /> : <AuthenticationPage />}
// 					/>
// 					<Route exact path='/checkout' component={CheckoutPage} />
// 				</Switch>
// 			</div>
// 		)
// 	}
// }

// const mapStateToProps = createStructuredSelector({
// 	currentUser: selectCurrentUser
// });

// const mapDispatchToProps = dispatch => ({
// 	setCurrentUser: user => dispatch(setCurrentUser(user))
// });

// export const App = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(AppNotConnected);
