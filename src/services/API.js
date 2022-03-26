import axios from "axios"

const API = axios.create({
    baseURL: "https://parallelum.com.br/fipe/api/v1"
});

export default API;