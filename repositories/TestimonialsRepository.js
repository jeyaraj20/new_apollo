import Repository, { apiUrl } from './Repository';

class AuthRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getAllTestimonials(payload) {
        const reponse = await Repository.get(`${apiUrl}/Testimonials/?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getInactiveTestimonials(payload) {
        const reponse = await Repository.get(`${apiUrl}/Testimonials/inactive?_start=${payload._start}&_limit=${payload._limit}`)
            .then(response => {
                return response.data;
            })

            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async saveTestimonials(formdata) {
        const reponse = await Repository.post(`${apiUrl}/Testimonials/`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async editTestimonials(categoryId, formdata) {
        const reponse = await Repository.put(`${apiUrl}/Testimonials/catId/${categoryId}`, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async inactiveCategory(data) {
        const reponse = await Repository.put(`${apiUrl}/Testimonials/inactive`, data)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async deleteCategory(data) {
        const reponse = await Repository.delete(`${apiUrl}/Testimonials/`, {
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
        const reponse = await Repository.put(`${apiUrl}/Testimonials/position`, data)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async imageUpload(formData) {
        const reponse = await Repository.post(`${apiUrl}/image/testimonials`, formData)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


}

export default new AuthRepository();

