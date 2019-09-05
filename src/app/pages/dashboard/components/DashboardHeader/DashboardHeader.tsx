import React, { FC } from 'react';
import { faPuzzlePiece, faTrophy, faMapSigns } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DashboardHeader.scss';

export const DashboardHeader: FC = () => (
	<section className="DashboardHeader">
		<div className='MainLayout__fluid-layout'>
			<div className="DashboardHeader__section">
				<FontAwesomeIcon className="fa" icon={faPuzzlePiece} />
				<div className="DashboardHeader__text">
					<p>Sport type</p>
					<h3>Clycling</h3>
				</div>
			</div>
			<div className="DashboardHeader__section">
				<FontAwesomeIcon className="fa" icon={faTrophy} />
				<div className="DashboardHeader__text">
					<p>Mode</p>
					<h3>Advanced</h3>
				</div>
			</div>
			<div className="DashboardHeader__section">
				<FontAwesomeIcon className="fa" icon={faMapSigns} />
				<div className="DashboardHeader__text">
					<p>Route</p>
					<h3>30 Miles</h3>
				</div>
			</div>
		</div>
	</section>
)
