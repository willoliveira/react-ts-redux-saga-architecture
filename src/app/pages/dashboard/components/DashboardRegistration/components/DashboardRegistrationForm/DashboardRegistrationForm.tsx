import React, { Component, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { dashboardUpdateUserForm, dashboardClearUserForm, dashboardAddUser } from '../../../../Dashboard.actions';

export interface IDashboardRegistrationForm {
	formData: { [key: string]: any };
	dashboardUpdateUserForm: (formData: any) => void;
	dashboardClearUserForm: () => void;
	dashboardAddUser: (user: any) => void;
}

export class DashboardRegistrationFormWrapper extends Component<IDashboardRegistrationForm> {

	constructor(props: IDashboardRegistrationForm) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onReset = this.onReset.bind(this);

		this.getValue = this.getValue.bind(this);
		this.isChecked = this.isChecked.bind(this);
	}

	onChange(event: ChangeEvent<HTMLInputElement>) {
		const { value, type, name } = event.target;
		let formDataValue: any = { };

		if (type === 'checkbox') {
			const { checked } = event.target;
			if (this.props.formData && this.props.formData[name]) {
				const index = this.props.formData[name].indexOf(value);
				if (index > -1) {
					formDataValue[name] = this.props.formData[name].filter((d: any) => d !== value);
				} else {
					formDataValue[name] = [...this.props.formData[name], value]
				}
			} else {
				formDataValue[name] = [ value ]
			}
		} else {
			formDataValue[name] = value;
		}

		this.props.dashboardUpdateUserForm(formDataValue);
	}

	getValue(name: string) {
		return this.props.formData[name] || '';
	}

	isChecked(name: string, value: string) {
		return this.props.formData[name] && this.props.formData[name].length ? this.props.formData[name].indexOf(value) > -1 : false;
	}

	isRadioChecked(name: string, value: string) {
		return this.props.formData[name] === value;
	}

	onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formElement: any = event.target;
		formElement.reset();

		this.props.dashboardAddUser(this.props.formData);
		this.props.dashboardClearUserForm();
	}

	onReset(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formElement: any = event.target;
		formElement.reset();

		this.props.dashboardClearUserForm();
	}

	render() {
		return (
			<form className='form' onSubmit={this.onSubmit} onReset={this.onReset}>
				<div>
					<div className='form-group'>
						<label htmlFor="username">Username</label>
						<input onChange={this.onChange} type="text" name="username" id="username" value={this.getValue('username')} required />
						<p>Instructions to show on input focus.</p>
					</div>
					<div className='form-group'>
						<label htmlFor="name">Name</label>
						<input onChange={this.onChange} type="text" name="name" id="name" value={this.getValue('name')} required />
						<p>Instructions to show on input focus.</p>
					</div>
					<div className='form-group'>
						<label htmlFor="email">E-mail</label>
						<input onChange={this.onChange} type="text" name="email" id="email" value={this.getValue('email')} required />
						<p>Instructions to show on input focus.</p>
					</div>
				</div>
				<div>
					<div className='form-group'>
						<label htmlFor="city">City</label>
						<input onChange={this.onChange} type="text" name="city" id="city" value={this.getValue('city')} required />
						<p>Instructions to show on input focus.</p>
					</div>
					<div className='form-group'>
						<label htmlFor="name">Ride in group?</label>
						<label>
							<input onChange={this.onChange} type="radio" name="rideInGroup" id="rideInGroup" value="always" checked={this.isRadioChecked('rideInGroup', 'always')} />
							Always
						</label>
						<label>
							<input onChange={this.onChange} type="radio" name="rideInGroup" id="rideInGroup" value="sometimes" checked={this.isRadioChecked('rideInGroup','sometimes')} />
							Sometimes
						</label>
						<label>
							<input onChange={this.onChange} type="radio" name="rideInGroup" id="rideInGroup" value="never" checked={this.isRadioChecked('rideInGroup','never')} />
							Never
						</label>
					</div>
					<div className='form-group'>
						<label htmlFor="name">Days of week</label>
						<label>
							<input onChange={this.onChange} type="checkbox" name="daysOfWeek" id="daysOfWeek" value="sun" checked={this.isChecked('daysOfWeek', 'sun')} />
							Sun
						</label>
						<label>
							<input onChange={this.onChange} type="checkbox" name="daysOfWeek" id="daysOfWeek" value="mon" checked={this.isChecked('daysOfWeek', 'mon')} />
							Mon
						</label>
						<label>
							<input onChange={this.onChange} type="checkbox" name="daysOfWeek" id="daysOfWeek" value="tue" checked={this.isChecked('daysOfWeek', 'tue')} />
							Tue
						</label>
						<label>
							<input onChange={this.onChange} type="checkbox" name="daysOfWeek" id="daysOfWeek" value="wed" checked={this.isChecked('daysOfWeek', 'wed')} />
							Wed
						</label>
						<label>
							<input onChange={this.onChange} type="checkbox" name="daysOfWeek" id="daysOfWeek" value="thu" checked={this.isChecked('daysOfWeek', 'thu')} />
							Thu
						</label>
						<label>
							<input onChange={this.onChange} type="checkbox" name="daysOfWeek" id="daysOfWeek" value="fri" checked={this.isChecked('daysOfWeek', 'fri')} />
							Fri
						</label>
						<label>
							<input onChange={this.onChange} type="checkbox" name="daysOfWeek" id="daysOfWeek" value="sat" checked={this.isChecked('daysOfWeek', 'sat')} />
							Sat
						</label>
					</div>
				</div>
				<div className='form-actions'>
					<button type='submit'>Save</button>
					<button type='reset'>Discard</button>
				</div>
			</form>
		)
	}
}

const mapStateToProps = (state: any) => {
	const { DashboardReducer } = state;
	const { formData } = DashboardReducer;
	return {
		formData
	}
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	dashboardUpdateUserForm(formData: any) {
		dispatch(dashboardUpdateUserForm(formData));
	},
	dashboardClearUserForm() {
		dispatch(dashboardClearUserForm());
	},
	dashboardAddUser(user: any) {
		dispatch(dashboardAddUser(user));
	}
});

export const DashboardRegistrationForm = connect(mapStateToProps, mapDispatchToProps)(DashboardRegistrationFormWrapper)
