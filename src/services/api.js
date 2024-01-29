import axios from "axios";

// const url = "http://localhost:3000"
const url = "https://hbcard.com.br/api" 

const api = axios.create({
    baseURL: url,
})

export default api