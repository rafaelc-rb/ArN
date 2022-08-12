import axios from 'axios'

export const baseURL = 'http://192.168.1.26:3030';
export const api = axios.create({
    baseURL: baseURL,
    timeout: 2000,
})