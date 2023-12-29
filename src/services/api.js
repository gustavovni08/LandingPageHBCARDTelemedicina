import axios from "axios";

const api = axios.create({
    baseURL: "http://191.101.78.53:3001"
})

export default api