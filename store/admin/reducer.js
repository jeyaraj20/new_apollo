import { actionTypes } from './action';

export const initState = {
    allMenu: [],
    userMenu: []
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ADMIN_MENU_ALL_SUCCESS:
            return {
                ...state,
                ...{ allMenu: action.payload && action.payload.Adminmenu && action.payload.Adminmenu.length > 0 ? action.payload.Adminmenu : [] },
            };
            case actionTypes.GET_ADMIN_USER_MENU_SUCCESS:
                return {
                    ...state,
                    ...{ userMenu: action.payload && action.payload.Adminmenu && action.payload.Adminmenu.length > 0 ? action.payload.Adminmenu : [] },
                };
        default:
            return state;
    }
}

export default reducer;
