import React, { Component } from 'react';
import { DashboardHeader } from './components/DashboardHeader/DashboardHeader';
import { DashboardUsers } from './components/DashboardUsers/DashboardUsers';

export class Dashboard extends Component {

	render() {
		return (
			<section>
				<DashboardHeader />
				<DashboardUsers />
			</section>
		)
	}
}
