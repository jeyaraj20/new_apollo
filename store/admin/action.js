export const actionTypes = {
    GET_ADMIN_MENU_ALL_REQUEST: 'GET_ADMIN_MENU_ALL_REQUEST',
    GET_ADMIN_MENU_ALL_SUCCESS: 'GET_ADMIN_MENU_ALL_SUCCESS',
    GET_ADMIN_USER_MENU_REQUEST: 'GET_ADMIN_USER_MENU_REQUEST',
    GET_ADMIN_USER_MENU_SUCCESS: 'GET_ADMIN_USER_MENU_SUCCESS'
};

export function getAdminMenuAll() {
    console.log('dckndcscsdc')
    return { type: actionTypes.GET_ADMIN_MENU_ALL_REQUEST };
}

export function getAdminMenuAllSuccess(payload) {
    return { type: actionTypes.GET_ADMIN_MENU_ALL_SUCCESS, payload };
}

export function getAdminUserMenu() {
    return { type: actionTypes.GET_ADMIN_USER_MENU_REQUEST };
}

export function getAdminUserMenuSuccess(payload) {
    return { type: actionTypes.GET_ADMIN_USER_MENU_SUCCESS, payload };
}