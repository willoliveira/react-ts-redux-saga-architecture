import React, { Component } from 'react';
import { DashboardSection } from '../DashboardSection/DashboardSection';
import { Table, IColumn } from '../../../../shared/components/Table/Table';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { dashboardGetUsers } from '../../Dashboard.actions';

const columns: IColumn[] = [
	{ name: 'Username', dataIndex: 'username', key: 'username' },
	{ name: 'Name', dataIndex: 'name', key: 'name' },
	{ name: 'E-mail', dataIndex: 'email', key: 'email' },
	{ name: 'City', dataIndex: 'address.city', key: 'addressCity' },
	{ name: 'Ride in group', dataIndex: '', key: 'rideInGroup' },
	{ name: 'Day of the week', dataIndex: '', key: 'dayOfWeek' },
	{ name: 'Post', render: (record, index) => 1, key: 'post' },
	{ name: 'Albums', render: (record, index) => 1, key: 'album' },
	{ name: 'Photos', render: (record, index) => 1, key: 'photos' },
]

export interface IDashboardUsersDispatch {
	dashboardGetUsers: () => void;
}

export interface IDashboardUsersProps {
	error: boolean;
	loading: boolean;
	users: any[];
}

export type IDashboardUsers = IDashboardUsersDispatch & IDashboardUsersProps;

export class DashboardUsersWrapper extends Component<IDashboardUsers> {

	componentDidMount() {
		this.props.dashboardGetUsers();
	}

	render() {
		return (
			<DashboardSection title='Users'>
				<Table columns={columns} dataSource={this.props.users} loading={this.props.loading} />
			</DashboardSection>
		)
	}
}

const mapStateToProps = (state: any) => {
	const { DashboardReducer } = state;
	const { error, users, loading } = DashboardReducer;
	return {
		error, users, loading
	}
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	dashboardGetUsers() {
		dispatch(dashboardGetUsers());
	}
});

export const DashboardUsers = connect(mapStateToProps, mapDispatchToProps)(DashboardUsersWrapper)
