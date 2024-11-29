import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8095/",
  headers: {
    "Access-Control-Allow-Methods": "*",
  },
});
const token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxMjM0IiwiaWF0IjoxNzMyODY5OTc1LCJleHAiOjE3MzI5NTYzNzV9.vuCJTyhB2xl8bA92J8zCVcW08L7qqbdwCHwRYGPGjmWSuwF4prqXSbPWO-qmAnkG";
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
