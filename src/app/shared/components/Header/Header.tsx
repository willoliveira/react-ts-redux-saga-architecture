import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Header.scss';

export class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className='MainLayout__fluid-layout'>
					<div className="header-logo">
						<div className='header-logo__icon'>
							<FontAwesomeIcon className='fa' icon={faVolleyballBall} />
						</div>
						<div className="header-logo__name">Sports</div>
					</div>
					<div className="header-user">
						<div className="header-user__initials">JB</div>
						<div className="header-user__name">Jason Bourne</div>
						<FontAwesomeIcon className='fa' icon={faChevronDown} />
					</div>
				</div>
			</header>
		)
	}
}
