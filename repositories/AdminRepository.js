import Repository, { apiUrl } from './Repository';

class AuthRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getAdminMenuAll() {
        const reponse = await Repository.get(`${apiUrl}/adminmenu/all`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getAdminUserMenu() {
        const reponse = await Repository.get(`${apiUrl}/adminmenu/`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getAllOperators() {
        const reponse = await Repository.get(`${apiUrl}/operator/getoperator/Y`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async changePassword(data) {
        console.log(user,'data')
      //  if (user.user.type === "S")
            const reponse = await Repository.put(`${apiUrl}/adminmenu/changepasswordsuperadmin`, data)
        // else
        //     const reponse = await Repository.put(`${apiUrl}/adminmenu/changepasswordadminoperator`, data)
        .then(response => {
                    return response.data;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new AuthRepository();

