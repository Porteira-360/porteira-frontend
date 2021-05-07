import axios from "axios"

const api = axios.create({
  method: "POST",
  baseURL: "http://localhost:3333/api/v1",
  headers: { 'Content-Type': 'application/json' }
});

export default api;