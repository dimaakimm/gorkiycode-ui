import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8095/",
  headers: {
    "Access-Control-Allow-Methods": "*",
  },
});
const token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxMjMiLCJpYXQiOjE3MzI4NzM3ODMsImV4cCI6MTczMzA0NjU4M30.hhHRH13IAwxd2bf23RNI5JSnd2Ogk7FpRfP1YtbExkffb8uRWGZwiQ6_Hv6J1xKZ";
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
