import axios from "axios";

const api = axios.create({
  baseURL: "http://10.6.49.90:3333"
});

export default api;
