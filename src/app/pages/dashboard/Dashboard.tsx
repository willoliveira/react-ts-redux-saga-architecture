import React, { Component } from 'react';
import { DashboardHeader } from './components/DashboardHeader/DashboardHeader';
import { DashboardUsers } from './components/DashboardUsers/DashboardUsers';
import { DashboardRegistration } from './components/DashboardRegistration/DashboardRegistration';

export class Dashboard extends Component {

	render() {
		return (
			<section className="Dashboard">
				<DashboardHeader />
				<DashboardUsers />
				<DashboardRegistration />
			</section>
		)
	}
}
