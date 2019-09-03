import { call, put, takeLatest } from 'redux-saga/effects'
import { get } from "../../shared/service/Http";
import { DASHBOARD_GET_USERS_SUCCESS, DASHBOARD_GET_USERS_ERROR, DASHBOARD_GET_USERS } from './Dashboard.actions';

function fetchUserApi() {
	return get('users');
}

function* fetchUser() {
	try {
		const payload = yield call(fetchUserApi);
		yield put({
			type: DASHBOARD_GET_USERS_SUCCESS,
			payload
		});
	} catch (error) {
		yield put({
			type: DASHBOARD_GET_USERS_ERROR
		});
	}
}

export const DashboardSagas = [
	takeLatest(DASHBOARD_GET_USERS, fetchUser)
];
