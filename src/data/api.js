import axios from "axios";

const api = axios.create({
    baseURL: "https://autaza-api-ouyea.onrender.com",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;