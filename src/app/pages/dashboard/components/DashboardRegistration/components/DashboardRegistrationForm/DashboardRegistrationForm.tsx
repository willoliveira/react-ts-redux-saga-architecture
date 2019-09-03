import React, { Component } from 'react';

export interface IDashboardRegistrationForm {

}

export class DashboardRegistrationForm extends Component<IDashboardRegistrationForm> {
	render() {
		return (
			<form className='form'>
				<div>
					<div className='form-group'>
						<label htmlFor="username">Username</label>
						<input type="text" name="username" id="username"/>
						<p>Instructions to show on input focus.</p>
					</div>
					<div className='form-group'>
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name"/>
						<p>Instructions to show on input focus.</p>
					</div>
					<div className='form-group'>
						<label htmlFor="email">E-mail</label>
						<input type="text" name="email" id="email"/>
						<p>Instructions to show on input focus.</p>
					</div>
				</div>
				<div>
					<div className='form-group'>
						<label htmlFor="city">City</label>
						<input type="text" name="city" id="city"/>
						<p>Instructions to show on input focus.</p>
					</div>
					<div className='form-group'>
						<label htmlFor="name">Ride in group?</label>
						<label>
							<input type="radio" name="rideInGroup" id="rideInGroup" value="0"/>
							Always
						</label>
						<label>
							<input type="radio" name="rideInGroup" id="rideInGroup" value="1"/>
							Sometimes
						</label>
						<label>
							<input type="radio" name="rideInGroup" id="rideInGroup" value="2"/>
							Never
						</label>
					</div>
					<div className='form-group'>
						<label htmlFor="name">Days of week</label>
						<label>
							<input type="checkbox" name="daysOfWeek" id="daysOfWeek" value="0"/>
							Sun
						</label>
						<label>
							<input type="checkbox" name="daysOfWeek" id="daysOfWeek" value="1"/>
							Mon
						</label>
						<label>
							<input type="checkbox" name="daysOfWeek" id="daysOfWeek" value="2"/>
							Tue
						</label>
						<label>
							<input type="checkbox" name="daysOfWeek" id="daysOfWeek" value="3"/>
							Wed
						</label>
						<label>
							<input type="checkbox" name="daysOfWeek" id="daysOfWeek" value="4"/>
							Thu
						</label>
						<label>
							<input type="checkbox" name="daysOfWeek" id="daysOfWeek" value="5"/>
							Fri
						</label>
						<label>
							<input type="checkbox" name="daysOfWeek" id="daysOfWeek" value="6"/>
							Sat
						</label>
					</div>
				</div>
			</form>
		)
	}
}
