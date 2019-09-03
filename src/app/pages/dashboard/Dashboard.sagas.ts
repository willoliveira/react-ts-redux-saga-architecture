import { all, call, put, takeLatest } from 'redux-saga/effects'
import { get } from "../../shared/service/Http";
import { DASHBOARD_GET_USERS_SUCCESS, DASHBOARD_GET_USERS_ERROR, DASHBOARD_GET_USERS, DASHBOARD_GET_ALBUMS_SUCCESS, DASHBOARD_GET_ALBUMS_ERROR, DASHBOARD_GET_PHOTOS_SUCCESS, DASHBOARD_GET_PHOTOS_ERROR, DASHBOARD_GET_ALBUMS, DASHBOARD_GET_PHOTOS, DASHBOARD_GET_POSTS_SUCCESS, DASHBOARD_GET_POSTS_ERROR, DASHBOARD_GET_POSTS, DASHBOARD_GET_DATA_SUCCESS, DASHBOARD_GET_DATA_ERROR, DASHBOARD_GET_DATA } from './Dashboard.actions';

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

function fetchPostsApi() {
	return get('posts');
}

function* fetchPosts() {
	try {
		const payload = yield call(fetchPostsApi);
		yield put({
			type: DASHBOARD_GET_POSTS_SUCCESS,
			payload
		});
	} catch (error) {
		yield put({
			type: DASHBOARD_GET_POSTS_ERROR
		});
	}
}

function fetchAlbumsApi() {
	return get('albums');
}

function* fetchAlbums() {
	try {
		const payload = yield call(fetchAlbumsApi);
		yield put({
			type: DASHBOARD_GET_ALBUMS_SUCCESS,
			payload
		});
	} catch (error) {
		yield put({
			type: DASHBOARD_GET_ALBUMS_ERROR
		});
	}
}


function fetchPhotosApi() {
	return get('photos');
}

function* fetchPhotos() {
	try {
		const payload = yield call(fetchPhotosApi);
		yield put({
			type: DASHBOARD_GET_PHOTOS_SUCCESS,
			payload
		});
	} catch (error) {
		yield put({
			type: DASHBOARD_GET_PHOTOS_ERROR
		});
	}
}


function* fetchDashboardData() {
	try {
		const [users, posts, albums, photos] = yield all([
			call(fetchUserApi),
			call(fetchPostsApi),
			call(fetchAlbumsApi),
			call(fetchPhotosApi)
		]);

		yield put({
			type: DASHBOARD_GET_DATA_SUCCESS,
			users, posts, albums, photos
		});
	} catch (error) {
		yield put({
			type: DASHBOARD_GET_DATA_ERROR
		});
	}
}

export const DashboardSagas = [
	takeLatest(DASHBOARD_GET_USERS, fetchUser),
	takeLatest(DASHBOARD_GET_POSTS, fetchPosts),
	takeLatest(DASHBOARD_GET_ALBUMS, fetchAlbums),
	takeLatest(DASHBOARD_GET_PHOTOS, fetchPhotos),
	takeLatest(DASHBOARD_GET_DATA, fetchDashboardData),
];
