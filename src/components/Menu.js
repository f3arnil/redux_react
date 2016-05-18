import React, { PropTypes } from 'react'

import MenuLink from './MenuLink'

let linkIndex = 0;

const Menu = ({links}) => (
	<ul className='nav navbar-nav navbar-right'>
		{
			links.map((link) => (
				<MenuLink
					key={ linkIndex++ }
					href={ link.href }
					text={ link.text } />
			))
		}
	</ul>
)

Menu.propTypes = {
	links: PropTypes.array
}

export default Menu