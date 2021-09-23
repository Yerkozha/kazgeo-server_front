import axios from "axios";



export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers:     {
        'Content-type': 'application/json; charset=UTF-8'
    }
});

export const postAPI = {
    
    post() {
        return instance.get(`posts`).then(res => res.data);
    }
}