import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8095/",
  headers: {
    "Access-Control-Allow-Methods": "*",
  },
});
const token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxMjM0IiwiaWF0IjoxNzMyODgxMzI3LCJleHAiOjE3MzMwNTQxMjd9.s7aktMBe65uFbhMwuwhbyZEIDtPc8s_bQgRDDH3ZFXlky9i6tnDCHXkkr85DZohZ";
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
