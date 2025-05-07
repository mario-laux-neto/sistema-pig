// filepath: src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3082/api", // URL base da API
});

export default api;
