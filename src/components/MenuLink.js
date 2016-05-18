import React, { PropTypes } from 'react'

const MenuLink = ({ href, text }) => (
	<li>
		<a href={href}> {text} </a>
	</li>
)

MenuLink.propTypes = {
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default MenuLink
