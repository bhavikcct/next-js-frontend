import axios from "axios";
import { BASE_URL } from "./baseurl";

export const api = axios.create({
  baseURL:  BASE_URL.NEXT_PUBLIC_API_URI, 
  withCredentials: true,
});
