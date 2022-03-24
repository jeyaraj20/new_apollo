import { all, put, call, takeEvery } from 'redux-saga/effects';

import { actionTypes, getAllTestimonialsSuccess, getInactiveTestimonialsSuccess } from './action';

import TestimonialsRepository from '../../repositories/TestimonialsRepository';

function* getAllTestimonialsSaga({ payload }) {
    try {
        const data = yield call(TestimonialsRepository.getAllTestimonials, payload);
        yield put(getAllTestimonialsSuccess(data));
    } catch (err) {
        yield put(getAllTestimonialsSuccess(null));
    }
}

function* getInactiveTestimonialsSaga({ payload }) {
    try {
        const data = yield call(TestimonialsRepository.getInactiveTestimonials, payload);
        yield put(getInactiveTestimonialsSuccess(data));
    } catch (err) {
        yield put(getInactiveTestimonialsSuccess(null));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ALL_TESTIMONIALS_REQUEST, getAllTestimonialsSaga)]);
    yield all([takeEvery(actionTypes.GET_INACTIVE_TESTIMONIALS_REQUEST, getInactiveTestimonialsSaga)]);
}
