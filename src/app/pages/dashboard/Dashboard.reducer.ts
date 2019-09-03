import { DASHBOARD_GET_USERS, DASHBOARD_GET_USERS_SUCCESS, DASHBOARD_GET_USERS_ERROR } from "./Dashboard.actions";

const initialState = {
	error: false,
	users: [ ]
}

export function DashboardReducer(state: any = initialState, action: any) {
	switch (action.type) {
		case DASHBOARD_GET_USERS:
			return {
				...state,
				loading: true
			}
		case DASHBOARD_GET_USERS_SUCCESS:
			return {
				...state,
				users: action.payload,
				loading: false
			}
		case DASHBOARD_GET_USERS_ERROR:
			return {
				...state,
				users: [ ],
				error: true,
				loading: false
			}
		default:
			return state;
	}
}
