export const actionTypes = {
    GET_ALL_CITY_REQUEST: 'GET_ALL_CITY_REQUEST',
    GET_ALL_CITY_SUCCESS: 'GET_ALL_CITY_SUCCESS',
    GET_INACTIVE_CITY_REQUEST: 'GET_INACTIVE_CITY_REQUEST',
    GET_INACTIVE_CITY_SUCCESS: 'GET_INACTIVE_CITY_SUCCESS'
};

export function getAllCity(payload) {
    return { type: actionTypes.GET_ALL_CITY_REQUEST, payload };
}

export function getAllCitySuccess(payload) {
    return { type: actionTypes.GET_ALL_CITY_SUCCESS, payload };
}

export function getInactiveCity(payload) {
    return { type: actionTypes.GET_INACTIVE_CITY_REQUEST, payload };
}

export function getInactiveCitySuccess(payload) {
    return { type: actionTypes.GET_INACTIVE_CITY_SUCCESS, payload };
}
