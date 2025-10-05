import axios from "axios";

const baseApiUrl ="http://localhost/rx-power-api/api/";
const baseUrl ="http://localhost/rx-power-api/";
export {baseUrl};

const api = axios.create({
    baseURL: baseApiUrl,
    headers: {
        "Content-Type": "application/json"
    }
});
export default api;