import React, { FC } from 'react';
import './DashboardSection.scss';

export interface IDashboardSection {
	title: string;
	className?: string;
}

export const DashboardSection: FC<IDashboardSection> = ({ title, children, className }) => (
	<section className={`DashboardSection ${className}`}>
		<div className='MainLayout__fluid-layout'>
			<header>
				<p className="DashboardSection__title">{title}</p>
				<hr className="DashboardSection__rule" />
			</header>
			{children}
		</div>
	</section>
)
