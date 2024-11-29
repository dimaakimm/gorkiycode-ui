import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8095/",
  headers: {
    "Access-Control-Allow-Methods": "*",
  },
});
const token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJleGFtcGxlX25pY2tuYW1lMiIsImlhdCI6MTczMjg2ODM2NywiZXhwIjoxNzMzMDQxMTY3fQ.9DQLmor36MzOb77KUIrfMF_NME-sUOggPrXwL_GWsizGj53Awjj8XFvGHPn0mZ8c";
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
