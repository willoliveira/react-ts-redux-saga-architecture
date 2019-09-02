import React, { FC } from 'react';

export interface IDashboardSection {
	title: string;
}

export const DashboardSection: FC<IDashboardSection> = ({ title, children }) => (
	<section>
		<header>{title}</header>
		{children}
	</section>
)
