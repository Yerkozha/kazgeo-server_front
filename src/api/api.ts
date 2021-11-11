import axios from "axios";
import { message } from "antd";

export const instance = axios.create({
    baseURL: 'https://api.kazgeo.codetau.com/api/',
    headers:     {
        'X-Requested-With': 'XMLHttpRequest'
    }
});


const localToken = localStorage.getItem("api_token");
// debugger
const token = !!localToken && localToken !== "undefined" ? localToken : null;
export const config = {
    headers: {
        'Authorization':`Bearer ${token}`
    }
}
export const configFormData = {
    headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
    }
};
export const configAuth = {
    headers: {
        "Content-Type": "application/json"
    }
};
export type APIResponseType<D = {}|[]> = {
    data: D
}

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },  (error)=> {
    if (error.response.status === 401) {
        message.error("Ошибка авторизации, Повторно войдите в систему", 5);
        setTimeout(() => {
            window.location.replace("/login");
        }, 2000)

    } else if (error.response.status === 405) {
        message.warning("Нет данных, по вашему запросу", 5);
    } else {
        if (error.response.data.error !== 'invalid_grant') {
            message.error(error.response.data.message);
        }
    }
    return Promise.reject(error);
  });