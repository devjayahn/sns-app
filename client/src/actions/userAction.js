import { LOGIN_USER } from "./types";
import { request } from "../utils/axios";

const USER_URL = "api"

export function loginUser(dataToSubmit) {
    const data = request("post", USER_URL + "/login", dataToSubmit);
    return {
        type : LOGIN_USER,
        payload : data,
    };
}