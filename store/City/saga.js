import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAllCitySuccess, getInactiveCitySuccess } from './action';

import CityRepository from '../../repositories/LocationControllerRepository';

function* getAllCitySaga({ payload }) {
    try {
        const data = yield call(CityRepository.getAllCity, payload);
        yield put(getAllCitySuccess(data));
    } catch (err) {
        yield put(getAllCitySuccess(null));
    }
}

function* getInactiveCitySaga({ payload }) {
    try {
        const data = yield call(CityRepository.getInactiveCity, payload);
        yield put(getInactiveCitySuccess(data));
    } catch (err) {
        yield put(getInactiveCitySuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ALL_CITY_REQUEST, getAllCitySaga)]);
    yield all([takeEvery(actionTypes.GET_INACTIVE_CITY_REQUEST, getInactiveCitySaga)]);
}
