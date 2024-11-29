import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8095/",
  headers: {
    "Access-Control-Allow-Methods": "*",
  },
});
const token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxMjMiLCJpYXQiOjE3MzI4Nzk3ODcsImV4cCI6MTczMzA1MjU4N30.nbdv9UGpoH3Pe8F2k9Bb4HEHdEqo1qYN3gxbWhrdnBo4XzTfFQcdcMS_YhXgcIcj";
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
