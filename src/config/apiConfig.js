import axios from "axios";

// export const API_BASE_URL = "http://localhost:8080";
export const API_BASE_URL = "https://ecommerce-spring1-production.up.railway.app";

const jwt = localStorage.getItem("hyphen_JWT");

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
    }
});
