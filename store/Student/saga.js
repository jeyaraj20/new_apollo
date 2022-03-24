import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAllStudentSuccess, getInactiveStudentSuccess } from './action';

import StudentRepository from '../../repositories/StudentRepository';

function* getAllStudentSaga({ payload }) {
    try {
        const data = yield call(StudentRepository.getAllStudent, payload);
        yield put(getAllStudentSuccess(data));
    } catch (err) {
        yield put(getAllStudentSuccess(null));
    }
}

function* getInactiveStudentSaga({ payload }) {
    try {
        const data = yield call(StudentRepository.getInactiveStudent, payload);
        yield put(getInactiveStudentSuccess(data));
    } catch (err) {
        yield put(getInactiveStudentSuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ALL_STUDENT_REQUEST, getAllStudentSaga)]);
    yield all([takeEvery(actionTypes.GET_INACTIVE_STUDENT_REQUEST, getInactiveStudentSaga)]);
}
