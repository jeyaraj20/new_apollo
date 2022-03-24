import jwtDecode from "jwt-decode";

export function getCurrentUser() {
    try {
        let local = localStorage.getItem('persist:QuestionCloud');
        local = JSON.parse(local);
        if(local.auth){
            let auth = JSON.parse(local.auth);
            if( auth && auth.auth && auth.auth.token ){
                return jwtDecode(auth.auth.token);
            }else{
                return null;
            }
        }else{
            return null;
        }
    } catch (ex) {
        return null;
    }
}

export function getQuery() {
    let urlQuery = typeof window !== 'undefined' ? window.location.search.split("?")[1] : null;
    let query = {};
    if(urlQuery){
        if(urlQuery.includes('&')){
            let params = urlQuery.split('&');
            for( let i = 0; i < params.length; i++){
                query[params[i].split('=')[0]] = params[i].split('=')[1];
            }
        }else{
            query[urlQuery.split('=')[0]] = urlQuery.split('=')[1];
        }
    }
    return query;
}