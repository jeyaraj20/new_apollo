import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAllDashboardCategorySuccess, getInactiveDashboardCategorySuccess } from './action';

import DashboardCategoryRepository from '../../repositories/DashboardCategoryRepository';

function* getAllDashboardCategorySaga({ payload }) {
    try {
        const data = yield call(DashboardCategoryRepository.getAlldashboardCategory, payload);
        yield put(getAllDashboardCategorySuccess(data));
    } catch (err) {
        yield put(getAllDashboardCategorySuccess(null));
    }
}

function* getInactiveDashboardCategorySaga({ payload }) {
    try {
        const data = yield call(DashboardCategoryRepository.getInactivedashboardCategory, payload);
        yield put(getInactiveDashboardCategorySuccess(data));
    } catch (err) {
        yield put(getInactiveDashboardCategorySuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ALL_DASHBOARD_CATEGORY_REQUEST, getAllDashboardCategorySaga)]);
    yield all([takeEvery(actionTypes.GET_INACTIVE_DASHBOARD_CATEGORY_REQUEST, getInactiveDashboardCategorySaga)]);
}
