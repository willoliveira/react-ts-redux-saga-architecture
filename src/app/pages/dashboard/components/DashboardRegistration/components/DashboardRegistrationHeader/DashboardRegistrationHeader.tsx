import React, { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLifeRing, faHeartbeat, faSmile } from '@fortawesome/free-solid-svg-icons'
import './DashboardRegistrationHeader.scss';

export const DashboardRegistrationHeader: FC = () => (
	<ul className="DashboardRegistrationHeader">
		<li>
			<p className="title">Need help?</p>
			<div className="content">
				<FontAwesomeIcon className="fa" icon={faLifeRing} />
				<div className="text">
					<p>Lorem ipsum dolor sit amet, consectetur</p>
					<p>adipisicing elit, sed do eiusmod tempor</p>
					<p>incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
		</li>
		<li>
			<p className="title">Why register?</p>
			<div className="content">
				<FontAwesomeIcon className="fa" icon={faHeartbeat} />
				<div className="text">
					<p>Lorem ipsum dolor sit amet, consectetur</p>
					<p>adipisicing elit, sed do eiusmod tempor</p>
					<p>incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
		</li>
		<li>
			<p className="title">What people are saying...</p>
			<div className="content">
				<FontAwesomeIcon className="fa" icon={faSmile} />
				<div className="text">
					<p>Lorem ipsum dolor sit amet, consectetur</p>
					<p>adipisicing elit, sed do eiusmod tempor</p>
					<p>incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
		</li>
	</ul>
)
