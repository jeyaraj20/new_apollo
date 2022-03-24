import axios from 'axios';
export const baseurl = "https://myadmin.questioncloud.in/adminapi";
// export const baseurl = "http://localhost:4003";
export const apiUrl = baseurl + "/api";

let customHeaders = {
    Accept: 'application/json'
};

let local = typeof window !== 'undefined' ? localStorage : null;
if (local && local.usertoken) {
    customHeaders['x-auth-token'] = local.usertoken;
}

export default axios.create({
    headers: customHeaders,
});