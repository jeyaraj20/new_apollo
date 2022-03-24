import { all } from 'redux-saga/effects';

import AuthSaga from './auth/saga';
import AdminSaga from './admin/saga';
import DashboardCategory from './DashboardCategory/saga';
import Student from './Student/saga';
import Testimonials from './Testimonials/saga';
import City from './City/saga'
export default function* rootSaga() {
    yield all([
        AuthSaga(),
        AdminSaga(),
        DashboardCategory(),
        Student(),
        Testimonials(),
        City()
    ]);
}

