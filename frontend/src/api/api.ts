import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_DOMAIN;

export const instance = axios.create({
  // withCredentials: true,
  baseURL: SERVER_URL,
});
