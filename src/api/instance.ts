import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8095/",
  headers: {
    "Access-Control-Allow-Methods": "*",
  },
});
const token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzdHJpbmciLCJpYXQiOjE3MzI4OTE2OTUsImV4cCI6MTczMzA2NDQ5NX0.8ElJAz5tx5IjH-Gry3uh7R9pcJPTg9siENXoRqzn9P4-eWrfYC69_DhqE3d5QQNw";
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
