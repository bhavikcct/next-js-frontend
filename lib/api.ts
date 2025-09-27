import axios from "axios";

export const api = axios.create({
  // baseURL:  "http://localhost:3030", 
  baseURL: process.env.NEXT_PUBLIC_API_URI,
  withCredentials: true,
});
