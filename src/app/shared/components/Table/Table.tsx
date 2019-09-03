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
					</tr>
				</thead>
				<tbody>
					{
						this.props.dataSource.map((data: any) => (
							<tr key={data.index}>
								{
									this.props.columns.map((column: IColumn, index) => (
										<td key={`content-${column.key}`}>{this.renderDataSource(data, column, index)}</td>
									))
								}
							</tr>
						))
					}
				</tbody>
			</table>
		);
	}
}
