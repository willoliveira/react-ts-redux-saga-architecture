import React from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb } from './Breadcrumb';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';

const mockItems = [
	'Teste 1',
	'Teste 2',
	'Teste 3',
	'Teste 4',
]

describe('<Breadcrumb>', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Breadcrumb items={mockItems} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('render items', () => {
		const wrapper = render(<Breadcrumb items={mockItems} />);
		expect(wrapper.find('.breadcrumb-item')).to.have.lengthOf(mockItems.length);
	});
})
