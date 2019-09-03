import { createStore, combineReducers, applyMiddleware } from 'redux'
import { DashboardReducer } from './pages/dashboard/Dashboard.reducer';
import createSagaMiddleware from '@redux-saga/core';
import { rootSagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers({
	DashboardReducer
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);
