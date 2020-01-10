import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Home from './pages/Home.js'

import './assets/styles/App.scss'

ReactDOM.render(
	<HashRouter basename="/spainvillage">
		<Switch>
			<Route path="/" exact component={Home} />
		</Switch>
	</HashRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
