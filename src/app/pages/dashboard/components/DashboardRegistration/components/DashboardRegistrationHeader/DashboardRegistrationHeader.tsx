import React, { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLifeRing, faHeartbeat, faSmile } from '@fortawesome/free-solid-svg-icons'

export const DashboardRegistrationHeader: FC = () => (
	<ul>
		<li>
			<p>Need help?</p>
			<div>
				<FontAwesomeIcon icon={faLifeRing} />
				<div>
					<p>Lorem ipsum dolor sit amet, consectetur</p>
					<p>adipisicing elit, sed do eiusmod tempor</p>
					<p>incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
		</li>
		<li>
			<p>Why register?</p>
			<div>
				<FontAwesomeIcon icon={faHeartbeat} />
				<div>
					<p>Lorem ipsum dolor sit amet, consectetur</p>
					<p>adipisicing elit, sed do eiusmod tempor</p>
					<p>incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
		</li>
		<li>
			<p>What people are saying...</p>
			<div>
				<FontAwesomeIcon icon={faSmile} />
				<div>
					<p>Lorem ipsum dolor sit amet, consectetur</p>
					<p>adipisicing elit, sed do eiusmod tempor</p>
					<p>incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
		</li>
	</ul>
)
