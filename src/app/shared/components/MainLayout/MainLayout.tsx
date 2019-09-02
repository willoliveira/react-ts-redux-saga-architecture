import React, { FC } from 'react';
import { Header } from '../Header/Header';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';


const BreadcrumbItems = [
	'Home',
	'Page Name',
	'Breadcrumb',
	'Current Page'
]


export const MainLayout: FC = ({ children }) => (
	<section>
		<Header />
		<Breadcrumb
			items={BreadcrumbItems}
			homeIcon={true} />
		{children}
	</section>
)
