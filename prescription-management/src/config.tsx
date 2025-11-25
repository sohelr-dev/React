import axios from "axios";

//server

const baseApiUrl="https://sohelit.com/rx-power-api/api/";
const baseUrl ="https://sohelit.com/rx-power-api/";

//local

// const baseApiUrl ="http://localhost/rx-power-api/api/";
// const baseUrl ="http://localhost/rx-power-api/";
export {baseUrl};

const api = axios.create({
    baseURL: baseApiUrl,
    headers: {
        "Content-Type": "application/json"
    }
});
export default api;