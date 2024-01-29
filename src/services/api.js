import axios from "axios";

const api = axios.create({
    baseURL: "https://hbcard.com.br/api",
})

export default api