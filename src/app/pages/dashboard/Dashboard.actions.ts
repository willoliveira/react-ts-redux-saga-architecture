import { action } from 'typesafe-actions';
import { IUser } from '../../shared/model/user.model';

export const DASHBOARD_GET_USERS = 'DASHBOARD_GET_USERS';
export const DASHBOARD_GET_USERS_SUCCESS = 'DASHBOARD_GET_USERS_SUCCESS';
export const DASHBOARD_GET_USERS_ERROR = 'DASHBOARD_GET_USERS_ERROR';

export const DASHBOARD_DELETE_USER = 'DASHBOARD_DELETE_USER';
export const DASHBOARD_DELETE_USER_SUCCESS = 'DASHBOARD_DELETE_USER_SUCCESS';
export const DASHBOARD_DELETE_USER_ERROR = 'DASHBOARD_DELETE_USER_ERROR';

export const DASHBOARD_ADD_USER = 'DASHBOARD_ADD_USER';
export const DASHBOARD_ADD_USER_SUCCESS = 'DASHBOARD_ADD_USER_SUCCESS';
export const DASHBOARD_ADD_USER_ERROR = 'DASHBOARD_ADD_USER_ERROR';

export const DASHBOARD_GET_POSTS = 'DASHBOARD_GET_POSTS';
export const DASHBOARD_GET_POSTS_SUCCESS = 'DASHBOARD_GET_POSTS_SUCCESS';
export const DASHBOARD_GET_POSTS_ERROR = 'DASHBOARD_GET_POSTS_ERROR';

export const DASHBOARD_GET_ALBUMS = 'DASHBOARD_GET_ALBUMS';
export const DASHBOARD_GET_ALBUMS_SUCCESS = 'DASHBOARD_GET_ALBUMS_SUCCESS';
export const DASHBOARD_GET_ALBUMS_ERROR = 'DASHBOARD_GET_ALBUMS_ERROR';

export const DASHBOARD_GET_PHOTOS = 'DASHBOARD_GET_PHOTOS';
export const DASHBOARD_GET_PHOTOS_SUCCESS = 'DASHBOARD_GET_PHOTOS_SUCCESS';
export const DASHBOARD_GET_PHOTOS_ERROR = 'DASHBOARD_GET_PHOTOS_ERROR';

export const DASHBOARD_GET_DATA = 'DASHBOARD_GET_DATA';
export const DASHBOARD_GET_DATA_SUCCESS = 'DASHBOARD_GET_DATA_SUCCESS';
export const DASHBOARD_GET_DATA_ERROR = 'DASHBOARD_GET_DATA_ERROR';

export const DASHBOARD_UDPATE_USER_FORM = 'DASHBOARD_UDPATE_USER_FORM';
export const DASHBOARD_CLEAR_USER_FORM = 'DASHBOARD_CLEAR_USER_FORM';

export const dashboardGetUsers = () => action(DASHBOARD_GET_USERS);
export const dashboardGetPosts= () => action(DASHBOARD_GET_POSTS);
export const dashboardGetAlbums = () => action(DASHBOARD_GET_ALBUMS);
export const dashboardGetPhotos = () => action(DASHBOARD_GET_PHOTOS);

export const dashboardDeleteUser = (userId: number) => action(DASHBOARD_DELETE_USER, userId);
export const dashboardAddUser = (user: IUser) => action(DASHBOARD_ADD_USER, user);

export const dashboardGetData = () => action(DASHBOARD_GET_DATA);

export const dashboardUpdateUserForm = (formData: any) => action(DASHBOARD_UDPATE_USER_FORM, formData);
export const dashboardClearUserForm = () => action(DASHBOARD_CLEAR_USER_FORM);
