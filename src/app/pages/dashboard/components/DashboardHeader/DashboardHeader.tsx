import React, { FC } from 'react';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DashboardHeader: FC = () => (
	<ul>
		<li>
			<FontAwesomeIcon icon={faPuzzlePiece} />
			<div>
				<p>Sport type</p>
				<h3>Clycling</h3>
			</div>
		</li>
		<li>
			<FontAwesomeIcon icon={faPuzzlePiece} />
			<div>
				<p>Mode</p>
				<h3>Advanced</h3>
			</div>
		</li>
		<li>
			<FontAwesomeIcon icon={faPuzzlePiece} />
			<div>
				<p>Route</p>
				<h3>30 Miles</h3>
			</div>
		</li>
	</ul>
)
