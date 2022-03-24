import Repository, { apiUrl } from './Repository';

class AuthRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getAllHomeCategory(payload) {
        const reponse = await Repository.get(`${apiUrl}/homecategory/?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getInactiveHomeCategory(payload) {
        const reponse = await Repository.get(`${apiUrl}/homecategory/inactive?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async saveHomeCategory(formdata) {
        const reponse = await Repository.post(`${apiUrl}/homecategory/`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async editHomeCategory(categoryId, formdata) {
        const reponse = await Repository.put(`${apiUrl}/homecategory/catId/${categoryId}`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async inactiveCategory(data) {
        const reponse = await Repository.put(`${apiUrl}/homecategory/inactive`, data)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async deleteCategory(data) {
        const reponse = await Repository.delete(`${apiUrl}/homecategory/`, {
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        }).then(response => {
            return response.data;
        }).catch(error => ({ error: JSON.stringify(error) }));;
        return reponse;
    }

    async changePosition(data) {
        const reponse = await Repository.put(`${apiUrl}/homecategory/position`, data)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

}

export default new AuthRepository();

