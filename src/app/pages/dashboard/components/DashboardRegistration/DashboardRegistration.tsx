import React, { FC } from 'react';
import { DashboardRegistrationHeader } from './components/DashboardRegistrationHeader/DashboardRegistrationHeader';
import { DashboardRegistrationForm } from './components/DashboardRegistrationForm/DashboardRegistrationForm';

export const DashboardRegistration: FC = () => (
	<>
		<DashboardRegistrationHeader />
		<DashboardRegistrationForm />
	</>
)
