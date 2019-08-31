import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header-logo">
					<FontAwesomeIcon icon={faVolleyballBall} />
					<span className="header-logo__name">Venturus Sports</span>
				</div>
				<div className="header-user">
					<div className="header-user__initials">JB</div>
					<span className="header-user__name">Jason Bourne</span>
					<FontAwesomeIcon icon={faChevronDown} />
				</div>
			</header>
		)
	}
}
