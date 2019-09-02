import React, { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export interface IBreadcrumbItem {
	homeIcon?: boolean;
	index: number;
	length: number;
	title: string;
}

export const BreadcrumbItem: FC<IBreadcrumbItem> = (props: IBreadcrumbItem) => (
	<li className='breadcrumb-item'>
		<a href="#">
			{RenderHomeIcon(props)}
			{RenderCaret(props)}
		</a>
	</li>
)

const RenderHomeIcon = ({ index, homeIcon, title }: IBreadcrumbItem) => (
	index === 0 && homeIcon
		? <FontAwesomeIcon icon={faHome} />
		: title
)

const RenderCaret = ({ index, length }: IBreadcrumbItem) => (
	index + 1 < length
		? <FontAwesomeIcon icon={faChevronRight} />
		: null
)
