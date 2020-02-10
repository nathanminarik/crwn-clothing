import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import { HomePage, ShopPage } from './pages';
import { Header } from './components';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	)
}

export default App;
