export const actionTypes = {
    GET_ALL_DASHBOARD_CATEGORY_REQUEST: 'GET_ALL_DASHBOARD_CATEGORY_REQUEST',
    GET_ALL_DASHBOARD_CATEGORY_SUCCESS: 'GET_ALL_DASHBOARD_CATEGORY_SUCCESS',
    GET_INACTIVE_DASHBOARD_CATEGORY_REQUEST: 'GET_INACTIVE_DASHBOARD_CATEGORY_REQUEST',
    GET_INACTIVE_DASHBOARD_CATEGORY_SUCCESS: 'GET_INACTIVE_DASHBOARD_CATEGORY_SUCCESS'
};

export function getAllDashboardCategory(payload) {
    return { type: actionTypes.GET_ALL_DASHBOARD_CATEGORY_REQUEST, payload };
}

export function getAllDashboardCategorySuccess(payload) {
    return { type: actionTypes.GET_ALL_DASHBOARD_CATEGORY_SUCCESS, payload };
}

export function getInactiveDashboardCategory(payload) {
    return { type: actionTypes.GET_INACTIVE_DASHBOARD_CATEGORY_REQUEST, payload };
}

export function getInactiveDashboardCategorySuccess(payload) {
    return { type: actionTypes.GET_INACTIVE_DASHBOARD_CATEGORY_SUCCESS, payload };
}
