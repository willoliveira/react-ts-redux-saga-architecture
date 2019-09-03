import { action } from 'typesafe-actions';

export const DASHBOARD_GET_USERS = 'DASHBOARD_GET_USERS';
export const DASHBOARD_GET_USERS_SUCCESS = 'DASHBOARD_GET_USERS_SUCCESS';
export const DASHBOARD_GET_USERS_ERROR = 'DASHBOARD_GET_USERS_ERROR';

export const dashboardGetUsers = () => action(DASHBOARD_GET_USERS);
