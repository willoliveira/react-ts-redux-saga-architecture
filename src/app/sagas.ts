import { all } from 'redux-saga/effects';
import { DashboardSagas } from "./pages/dashboard/Dashboard.sagas";

export function* rootSagas() {
	yield all([
		...DashboardSagas
	]);
}
