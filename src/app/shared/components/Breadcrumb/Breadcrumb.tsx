import React, { Component } from 'react';
import { BreadcrumbItem } from './components/BreadcrumbItem/BreadcrumbItem';

export interface IBreadcrumb {
	homeIcon?: boolean;
	items: string[];
}

export class Breadcrumb extends Component<IBreadcrumb> {

	render() {
		const { items } = this.props;
		return (
			<nav className='breadcrumb-container'>
				<ul className='breadcrumb'>
					{items.map((item, index) => (
						<BreadcrumbItem
							key={`BreadcrumbItem-${index}`}
							index={index}
							title={item}
							length={items.length}
							homeIcon={this.props.homeIcon} />
					))}
				</ul>
			</nav>
		)
	}

}
