import axios from "axios";

const instance = axios.create({
    // baseURL : "http://localhost:6000/api/v1/",
    baseURL : "https://foodorderwebsite-backend.onrender.com/api/v1/",

})

export default instance;