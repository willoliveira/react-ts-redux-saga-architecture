import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { render } from 'enzyme';
import { expect } from 'chai';

describe('<Header>', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Header />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('Render name company', () => {
		const wrapper = render(<Header />);
		expect(wrapper.find('.header-logo__name').text()).to.equal('Sports');
	});
})
