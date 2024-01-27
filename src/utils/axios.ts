import axios from "axios";

declare module 'axios' {
  export interface AxiosRequestConfig {
    isPublic?: boolean;
  }
}

const http = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((axiosConfig) => {
  if (!axiosConfig.isPublic) {
    const token = localStorage.getItem("access_token");
    if (!token) {
      throw new axios.Cancel("token not found");
    }
    axiosConfig.headers.Authorization = `Bearer ${token}`;
  }
  return axiosConfig;
});

export default http;