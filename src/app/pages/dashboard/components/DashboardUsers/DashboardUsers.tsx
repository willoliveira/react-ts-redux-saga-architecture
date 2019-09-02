import React, { Component } from 'react';
import { DashboardSection } from '../DashboardSection/DashboardSection';
import { Table, IColumn } from '../../../../shared/components/Table/Table';

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

const dataSource = [
	{
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "Sincere@april.biz",
		address: {
			street: "Kulas Light",
			suite: "Apt. 556",
			city: "Gwenborough",
			zipcode: "92998-3874",
			geo: {
				lat: "-37.3159",
				lng: "81.1496"
			}
		},
		phone: "1-770-736-8031 x56442",
		website: "hildegard.org",
		company: {
			name: "Romaguera-Crona",
			catchPhrase: "Multi-layered client-server neural-net",
			bs: "harness real-time e-markets"
		}
	},
	{
		id: 2,
		name: "Ervin Howell",
		username: "Antonette",
		email: "Shanna@melissa.tv",
		address: {
			street: "Victor Plains",
			suite: "Suite 879",
			city: "Wisokyburgh",
			zipcode: "90566-7771",
			geo: {
				lat: "-43.9509",
				lng: "-34.4618"
			}
		},
		phone: "010-692-6593 x09125",
		website: "anastasia.net",
		company: {
			name: "Deckow-Crist",
			catchPhrase: "Proactive didactic contingency",
			bs: "synergize scalable supply-chains"
		}
	},
]

export class DashboardUsers extends Component {

	render() {
		return (
			<DashboardSection title='Users'>
				<Table columns={columns} dataSource={dataSource} />
			</DashboardSection>
			)
		}
	}
