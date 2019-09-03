import React, { Component } from 'react';

export interface IColumn {
	key: string;
	name: string;
	dataIndex?: string;
	render?: (record: any, index: number) => any;
}

export interface ITable {
	columns: IColumn[];
	dataSource: any[];
	loading: boolean;
	actions: any[];
}

export class Table extends Component<ITable> {

	constructor(props: ITable) {
		super(props);

		this.renderDataSource = this.renderDataSource.bind(this);
	}

	getIndexDataSource(data: any, dataIndex: string) {
		return (
			dataIndex ? data[dataIndex] : ''
		)
	}

	renderDataSource(data: any, column: IColumn, columnIndex: number) {
		const { dataIndex = '' } = column;
		return (
			column.render
				? column.render(data, columnIndex)
				: this.getIndexDataSource(data, dataIndex)
		)
	}

	renderActions(record: any, index: number) {
		return this.props.actions.map(action => action(record, index));
	}

	render() {
		const { dataSource, loading } = this.props;

		if (!dataSource && !loading) {
			return (
				<div>No data!</div>
			);
		}
		return (
			<table>
				<thead>
					<tr>
						{
							this.props.columns.map((column: IColumn) => (
								<th key={`header-${column.key}`}>{column.name}</th>
							))
						}
						{
							this.props.actions.length
								? <th></th>
								: null
						}
					</tr>
				</thead>
				<tbody>
					{
						this.props.dataSource.map((data: any, index: number) => (
							<tr key={data.index}>
								{
									this.props.columns.map((column: IColumn, index) => (
										<td key={`content-${column.key}`}>{this.renderDataSource(data, column, index)}</td>
									))
								}
								{
									this.props.actions.length
										? <td>{this.renderActions(data, index)}</td>
										: null
								}
							</tr>
						))
					}
				</tbody>
			</table>
		);
	}
}
