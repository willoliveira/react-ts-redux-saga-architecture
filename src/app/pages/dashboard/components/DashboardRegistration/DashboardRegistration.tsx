import React, { FC } from 'react';
import { DashboardRegistrationHeader } from './components/DashboardRegistrationHeader/DashboardRegistrationHeader';
import { DashboardRegistrationForm } from './components/DashboardRegistrationForm/DashboardRegistrationForm';
import { DashboardSection } from '../DashboardSection/DashboardSection';

export const DashboardRegistration: FC = () => (
	<DashboardSection className="DasboardRegistration" title='Registration'>
		<section className="MainLayout__fluid-layout">
			<DashboardRegistrationHeader />
			<DashboardRegistrationForm />
		</section>
	</DashboardSection>
)
