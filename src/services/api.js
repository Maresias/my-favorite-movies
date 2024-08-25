import axios from "axios"

export const api = axios.create({
    baseURL: 'https://film-rating-api.onrender.com'
});