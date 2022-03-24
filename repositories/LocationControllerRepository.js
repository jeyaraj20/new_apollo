import Repository, { apiUrl } from './Repository';

class AuthRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getAllState(payload) {
        const reponse = await Repository.get(`${apiUrl}/location/state/Y?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async getState(payload) {
        const reponse = await Repository.get(`${apiUrl}/location/state/Y`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getInactiveState(payload) {
        const reponse = await Repository.get(`${apiUrl}/location/state/N?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
   
    async saveState(formdata) {
        const reponse = await Repository.post(`${apiUrl}/location/state/`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async editState(categoryId, formdata) {
        const reponse = await Repository.put(`${apiUrl}/location/State/${categoryId}`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async inactiveCategory(data) {
        const reponse = await Repository.put(`${apiUrl}/location/statestatus`, data)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

  //City
    async getAllCity(payload) {
        const reponse = await Repository.get(`${apiUrl}/location/city/Y?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async getInactiveCity(payload) {
        const reponse = await Repository.get(`${apiUrl}/location/city/N?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async saveCity(formdata) {
        const reponse = await Repository.post(`${apiUrl}/location/city/`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async editCity(categoryId, formdata) {
        const reponse = await Repository.put(`${apiUrl}/location/city/${categoryId}`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async inactiveCity(data) {
        const reponse = await Repository.put(`${apiUrl}/location/citystatus`, data)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new AuthRepository();

