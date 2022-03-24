import { actionTypes } from './action';

export const initState = {
    allStudent: [],
    totalActiveCount: 0,
    inactiveStudent: [],
    totalInactiveCount: 0,
    
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_STUDENT_SUCCESS:
            return {
                ...state,
                ...{
                    allStudent: action.payload && action.payload.Student && action.payload.Student.length > 0 ? action.payload.Student : [],
                    totalActiveCount: action.payload && action.payload.Student && action.payload.Student.length > 0 ? action.payload.count : 0
                },
            };
        case actionTypes.GET_INACTIVE_STUDENT_SUCCESS:
            return {
                ...state,
                ...{
                    inactiveStudent: action.payload && action.payload.Student && action.payload.Student.length > 0 ? action.payload.Student : [],
                    totalInactiveCount: action.payload && action.payload.Student && action.payload.Student.length > 0 ? action.payload.count : 0
                },
            };
        default:
            return state;
    }
}

export default reducer;
