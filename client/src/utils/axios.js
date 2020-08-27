import axios from "axios";

const DOMAIN = "http://localhost:5000";
axios.defaults.withCredentials = true;

export const request = (method, url, data, config) => {
    return axios({        
        method,
        url:  url,
        data,
        config,
    })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};