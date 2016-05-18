import React, { Component } from 'react'

import Menu from './Menu'


class Navigation extends Component {

	constructor() {
		super()

		this.state = {
			navigationLinks: [
				{ href: '#/', text: 'Home' },
				{ href: '#/services', text: 'Services' },
				{ href: '#/about', text: 'About' }
			]
		}
	}

	render() {
	    return (
		    <nav className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
		        <div className='container'>
	    			<div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
	    				<Menu links={ this.state.navigationLinks } />
	    			</div>
	    		</div>
	    	</nav>
		)
	}
}

export default Navigation
