import React, { Component } from 'react'
import { Route, Router, hashHistory } from 'react-router'

import HomePage from '../pages/HomePage'
import ServicePage from '../pages/ServicePage'
import AboutPage from '../pages/AboutPage'

export default class App extends Component {
	render() {
		return (
			<Router history={ hashHistory }>
				<Route path='/' component={ HomePage } >
					<Route path='services' component={ ServicePage } />
					<Route path='about' component={ AboutPage } />
				</Route>
			</Router>
		)
	}
}
