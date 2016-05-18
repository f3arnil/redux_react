import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import IndexDisplay from '../components/IndexDisplay'

export default class HomePage extends Component {
	constructor() {
		super()
	}

	render() {

		const { children } = this.props;

		return ( <div>
				<Navigation />
				<div className='test'>{ children || <IndexDisplay /> }</div>
			</div>
		)
	}
}
