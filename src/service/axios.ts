import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const data = error.response?.data as { mensagem?: string };
    console.error(data?.mensagem ?? error.message);
    return Promise.reject(error);
  },
);
