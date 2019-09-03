import { DASHBOARD_GET_USERS, DASHBOARD_GET_USERS_SUCCESS, DASHBOARD_GET_USERS_ERROR, DASHBOARD_GET_DATA, DASHBOARD_GET_DATA_SUCCESS, DASHBOARD_GET_DATA_ERROR, DASHBOARD_ADD_USER, DASHBOARD_DELETE_USER } from "./Dashboard.actions";

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
		case DASHBOARD_GET_DATA:
			return {
				...state,
				loading: true
			}
		case DASHBOARD_GET_DATA_SUCCESS:
			return {
				...state,
				users: action.users,
				posts: action.posts,
				albums: action.albums,
				photos: action.photos,
				loading: false
			}
		case DASHBOARD_GET_DATA_ERROR:
			return {
				...state,
				users: [ ],
				posts: [ ],
				albums: [ ],
				photos: [ ],
				error: true,
				loading: false
			}
		case DASHBOARD_ADD_USER:
			return {
				...state,
				users: [...state.users, state.user]
			}
		case DASHBOARD_DELETE_USER:
			return {
				...state,
				users: state.users.filter((user: any) => user.id !== action.payload)
			}
		default:
			return state;
	}
}
