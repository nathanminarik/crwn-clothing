import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import { HomePage, ShopPage } from './pages';

const HatsPage = (props) => {
	console.log(props)
	return (
		<div>
			<h1>Hats</h1>
		</div>
	)
};

function App() {
	return (
		<Switch>
			<Route path='/' exact component={HomePage} />
			<Route path='/shop' component={ShopPage} />
		</Switch>
	)
}

export default App;
