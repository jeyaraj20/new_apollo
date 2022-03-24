export const actionTypes = {
    GET_ALL_STUDENT_REQUEST: 'GET_ALL_STUDENT_REQUEST',
    GET_ALL_STUDENT_SUCCESS: 'GET_ALL_STUDENT_SUCCESS',
    GET_INACTIVE_STUDENT_REQUEST: 'GET_INACTIVE_STUDENT_REQUEST',
    GET_INACTIVE_STUDENT_SUCCESS: 'GET_INACTIVE_STUDENT_SUCCESS'
};

export function getAllStudent(payload) {
    return { type: actionTypes.GET_ALL_STUDENT_REQUEST, payload };
}

export function getAllStudentSuccess(payload) {
    return { type: actionTypes.GET_ALL_STUDENT_SUCCESS, payload };
}

export function getInactiveStudent(payload) {
    return { type: actionTypes.GET_INACTIVE_STUDENT_REQUEST, payload };
}

export function getInactiveStudentSuccess(payload) {
    return { type: actionTypes.GET_INACTIVE_STUDENT_SUCCESS, payload };
}
