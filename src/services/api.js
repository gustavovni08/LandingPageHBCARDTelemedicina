import axios from "axios";

const url = "http://localhost:3000"
//  const url = "https://api.hbcard.com.br" 

const api = axios.create({
    baseURL: url,
})

export default api