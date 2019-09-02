import React from 'react';
import ReactDOM from 'react-dom';
import { BreadcrumbItem } from './BreadcrumbItem';

describe('<BreadcrumbItem>', () => {

	describe('renders without crashing', () => {

		it('first index', () => {
			const div = document.createElement('div');
			ReactDOM.render(<BreadcrumbItem key='bi-1' index={0} length={5} title='Teste 1' />, div);
			ReactDOM.unmountComponentAtNode(div);
		});

		it('first index with home icon', () => {
			const div = document.createElement('div');
			ReactDOM.render(<BreadcrumbItem key='bi-1' homeIcon={true} index={0} length={5} title='Teste 1' />, div);
			ReactDOM.unmountComponentAtNode(div);
		});

		it('middle index', () => {
			const div = document.createElement('div');
			ReactDOM.render(<BreadcrumbItem key='bi-1' index={2} length={5} title='Teste 1' />, div);
			ReactDOM.unmountComponentAtNode(div);
		});

		it('last index', () => {
			const div = document.createElement('div');
			ReactDOM.render(<BreadcrumbItem key='bi-1' index={4} length={5} title='Teste 1' />, div);
			ReactDOM.unmountComponentAtNode(div);
		});

	});

})
