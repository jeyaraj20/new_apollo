export const actionTypes = {
    GET_ALL_TESTIMONIALS_REQUEST: 'GET_ALL_TESTIMONIALS_REQUEST',
    GET_ALL_TESTIMONIALS_SUCCESS: 'GET_ALL_TESTIMONIALS_SUCCESS',
    GET_INACTIVE_TESTIMONIALS_REQUEST: 'GET_INACTIVE_TESTIMONIALS_REQUEST',
    GET_INACTIVE_TESTIMONIALS_SUCCESS: 'GET_INACTIVE_TESTIMONIALS_SUCCESS'
};

export function getAllTestimonials(payload) {
    return { type: actionTypes.GET_ALL_TESTIMONIALS_REQUEST, payload };
}

export function getAllTestimonialsSuccess(payload) {
    return { type: actionTypes.GET_ALL_TESTIMONIALS_SUCCESS, payload };
}

export function getInactiveTestimonials(payload) {
    return { type: actionTypes.GET_INACTIVE_TESTIMONIALS_REQUEST, payload };
}

export function getInactiveTestimonialsSuccess(payload) {
    return { type: actionTypes.GET_INACTIVE_TESTIMONIALS_SUCCESS, payload };
}
