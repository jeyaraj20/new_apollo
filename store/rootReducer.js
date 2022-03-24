import { combineReducers } from 'redux';

import auth from './auth/reducer';
import admin from './admin/reducer';
import DashboardCategory from './DashboardCategory/reducer';
import Student from './Student/reducer';
import Testimonials from './Testimonials/reducer';
import City from './City/reducer'
export default combineReducers({
    auth,
    admin,
    DashboardCategory,
    Student,
    Testimonials,
    City
});