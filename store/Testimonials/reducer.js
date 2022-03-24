import { actionTypes } from './action';

export const initState = {
    allTestimonials: [],
    totalActiveCount: 0,
    inactiveTestimonials: [],
    totalInactiveCount: 0,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_TESTIMONIALS_SUCCESS:
            return {
                ...state,
                ...{
                    allTestimonials: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.category : [],
                    totalActiveCount: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.count : 0
                },
            };
        case actionTypes.GET_INACTIVE_TESTIMONIALS_SUCCESS:
            return {
                ...state,
                ...{
                    inactiveTestimonials: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.category : [],
                    totalInactiveCount: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.count : 0
                },
            };
        default:
            return state;
    }
}

export default reducer;
