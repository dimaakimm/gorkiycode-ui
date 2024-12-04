import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8095/",
  headers: {
    "Access-Control-Allow-Methods": "*",
  },
});
const token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxMjM0IiwiaWF0IjoxNzMyOTIyNzY0LCJleHAiOjE3MzMwOTU1NjR9.Bv6wRQTOO7HY-RHGuwp-zl8nKYqY8BnlVJz2YEIlulsoTpsemLeq6S70XVcqnZ4d";
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
