import Repository, { apiUrl } from './Repository';

class AuthRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getAlldashboardCategory(payload) {
        console.log("1234",payload)
        const reponse = await Repository.get(`${apiUrl}/dashboardCategory/?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getInactivedashboardCategory(payload) {
        const reponse = await Repository.get(`${apiUrl}/dashboardCategory/inactive?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
        
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async savedashboardCategory(formdata) {
        console.log("12345689")
        const reponse = await Repository.post(`${apiUrl}/dashboardCategory/`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async editdashboardCategory(categoryId, formdata) {
        console.log("12345689")
        const reponse = await Repository.put(`${apiUrl}/dashboardCategory/catId/${categoryId}`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async inactiveCategory(data) {
        const reponse = await Repository.put(`${apiUrl}/dashboardCategory/inactive`, data)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async deleteCategory(data) {
        const reponse = await Repository.delete(`${apiUrl}/dashboardCategory/`, {
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
        const reponse = await Repository.put(`${apiUrl}/dashboardCategory/position`, data)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async imageUpload(formData) {
        const reponse = await Repository.post(`${apiUrl}/image/dashboard`, formData)
        .then(response => {
            return response.data;
        })
        .catch(error => ({ error: JSON.stringify(error) }));
    return reponse;
    }
    

}

export default new AuthRepository();

