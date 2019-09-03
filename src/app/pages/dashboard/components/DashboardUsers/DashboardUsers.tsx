import React, { Component } from 'react';
import { DashboardSection } from '../DashboardSection/DashboardSection';
import { Table, IColumn } from '../../../../shared/components/Table/Table';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { dashboardGetUsers, dashboardGetData } from '../../Dashboard.actions';
import { IUser } from '../../../../shared/model/user.model';
import { IPost } from '../../../../shared/model/post.model';
import { IAlbum } from '../../../../shared/model/album.mode';
import { DashboardUsersTablePosts } from './components/DashboardUsersTablePosts/DashboardUsersTablePosts';
import { DashboardUsersTableAlbum } from './components/DashboardUsersTableAlbums/DashboardUsersTableAlbums';
import { DashboardUsersTablePhotos } from './components/DashboardUsersTablePhotos/DashboardUsersTablePhotos';
import { IPhoto } from '../../../../shared/model/photo.model';

export interface IDashboardUsersDispatch {
	dashboardGetUsers: () => void;
	dashboardGetData: () => void;
}

export interface IDashboardUsersProps {
	error: boolean;
	loading: boolean;
	users: IUser[];
	posts: IPost[];
	albums: IAlbum[];
	photos: IPhoto[];
}

export type IDashboardUsers = IDashboardUsersDispatch & IDashboardUsersProps;

export class DashboardUsersWrapper extends Component<IDashboardUsers> {

	getColumns(): IColumn[] {
		return  [
			{ name: 'Username', dataIndex: 'username', key: 'username' },
			{ name: 'Name', dataIndex: 'name', key: 'name' },
			{ name: 'E-mail', dataIndex: 'email', key: 'email' },
			{ name: 'City', dataIndex: 'address.city', key: 'addressCity' },
			{ name: 'Ride in group', dataIndex: '', key: 'rideInGroup' },
			{ name: 'Day of the week', dataIndex: '', key: 'dayOfWeek' },
			{ name: 'Post', render: (record, index) => <DashboardUsersTablePosts userId={record.id} posts={this.props.posts} />, key: 'post' },
			{ name: 'Albums', render: (record, index) => <DashboardUsersTableAlbum userId={record.id} albums={this.props.albums} />, key: 'album' },
			{ name: 'Photos', render: (record, index) => <DashboardUsersTablePhotos userId={record.id} albums={this.props.albums} photos={this.props.photos} />, key: 'photos' },
		];
	}

	componentDidMount() {
		this.props.dashboardGetData();
	}

	render() {
		return (
			<DashboardSection title='Users'>
				<Table columns={this.getColumns()} dataSource={this.props.users} loading={this.props.loading} />
			</DashboardSection>
		)
	}
}

const mapStateToProps = (state: any) => {
	const { DashboardReducer } = state;
	const { error, users, posts, albums, photos, loading } = DashboardReducer;
	return {
		error, users, posts, albums, photos, loading
	}
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	dashboardGetUsers() {
		dispatch(dashboardGetUsers());
	},
	dashboardGetData() {
		dispatch(dashboardGetData());
	}
});

export const DashboardUsers = connect(mapStateToProps, mapDispatchToProps)(DashboardUsersWrapper)
