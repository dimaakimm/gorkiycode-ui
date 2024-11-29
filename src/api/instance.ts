import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8095/",
  headers: {
    "Access-Control-Allow-Methods": "*",
  },
});
const token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxMjM0IiwiaWF0IjoxNzMyODkyMjMyLCJleHAiOjE3MzMwNjUwMzJ9.P4O6XU2I7xouWvCkmx0sG7Cy_ULuP3eDLcNpjIoRD1Yrm9Kh54i892EctdsNHF_y";
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
