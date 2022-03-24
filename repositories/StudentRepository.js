import Repository, { apiUrl } from './Repository';
import axios from "axios";
class AuthRepository {
    constructor(callback) {
        this.callback = callback;
    }
    async getAllStudent(payload) {
        const reponse = await Repository.get(`${apiUrl}/student/status/Y?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getInactiveStudent(payload) {
        const reponse = await Repository.get(`${apiUrl}/student/status/N?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })

            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async saveStudent(formdata) {
        const reponse = await Repository.post(`${apiUrl}/student/`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async updateStudent(categoryId, formdata) {
        const reponse = await Repository.put(`${apiUrl}/student/id/${categoryId}`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async changeStatus(data) {
        const reponse = await Repository.put(`${apiUrl}/student/status`, data)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async deleteStudent(data) {
        const reponse = await Repository.put(`${apiUrl}/student/status`, data)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async getStudentsCount(payload) {
        const reponse = await Repository.get(`${apiUrl}/student/stud-count/${stud_status}?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getStudentById(payload) {
        const reponse = await Repository.get(`${apiUrl}/student/id/${stud_id}?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async downloadStudentReport(status, startDate, endDate) {
        let url = `${apiUrl}/student/download/${status}`;
        if (startDate && endDate) {
            url += `?startDate=${startDate}&endDate=${endDate}`
        } else if (startDate) {
            url += `?startDate=${startDate}`
        } else if (endDate) {
            url += `?endDate=${endDate}`
        }
        const reponse = axios({
            method: "GET",
            url: url,
            responseType: 'blob',
        }).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
        return reponse;
    }
}

export default new AuthRepository();

