import axios from 'axios';

const request = axios.create({
    baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app",
    // baseURL:"http://localhost:3000",
    timeout:5000,
})

// request.interceptors

export default request;