import Repository, { apiUrl } from './Repository';

class AuthRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async adminLogin(payload) {
        var data = {
            "admin_name": payload.user,
            "admin_pass": payload.password,
            "type": payload.type,
            "logintype": payload.logintype
        };
        let url = '';
        if (payload.type === "S") {
            url = `${apiUrl}/login`;
        } else {
            url = `${apiUrl}/login/adminfaculty`;
        }
        const reponse = await Repository.post(url, data)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new AuthRepository();

