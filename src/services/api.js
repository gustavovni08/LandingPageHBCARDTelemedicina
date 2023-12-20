import axios from "axios";

const api = axios.create({
    baseURL: "https://191.101.78.53:3001"
})

export default api