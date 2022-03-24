import { actionTypes } from './action';

export const initState = {
    allDashboardCategory: [],
    totalActiveCount: 0,
    inactiveDashboardCategory: [],
    totalInactiveCount: 0,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_DASHBOARD_CATEGORY_SUCCESS:
            return {
                ...state,
                ...{
                    allDashboardCategory: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.category : [],
                    totalActiveCount: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.count : 0
                },
            };
        case actionTypes.GET_INACTIVE_DASHBOARD_CATEGORY_SUCCESS:
            return {
                ...state,
                ...{
                    inactiveDashboardCategory: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.category : [],
                    totalInactiveCount: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.count : 0
                },
            };
        default:
            return state;
    }
}

export default reducer;
