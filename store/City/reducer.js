import { actionTypes } from './action';

export const initState = {
    allCity: [],
    totalActiveCount: 0,
    inactiveCity: [],
    totalInactiveCount: 0,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_CITY_SUCCESS:
            return {
                ...state,
                ...{
                    allCity: action.payload && action.payload.city && action.payload.city.length > 0 ? action.payload.city : [],
                    totalActiveCount: action.payload && action.payload.city && action.payload.city.length > 0 ? action.payload.count : 0
                },
            };
        case actionTypes.GET_INACTIVE_CITY_SUCCESS:
            return {
                ...state,
                ...{
                    inactiveCity: action.payload && action.payload.city && action.payload.city.length > 0 ? action.payload.city : [],
                    totalInactiveCount: action.payload && action.payload.city && action.payload.city.length > 0 ? action.payload.count : 0
                },
            };
        default:
            return state;
    }
}

export default reducer;
