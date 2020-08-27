import { LOGIN_USER } from "./types";
import { post } from "axios";

const USER_URL = "/api"
const config = {
    headers : {
        'content-type': 'application/x-www-form-urlencoded'        
    }
}

export function loginRequest(user_id, password) {
    const dataToSubmit = { user_id, password };
    const url = 'http://localhost:5000/api/login';
    const data = post(url, dataToSubmit, config);
    return {
        type : LOGIN_USER,
        payload : data,
    };
}