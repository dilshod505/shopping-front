import axios from "axios";

export const baseBackendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000/";

export const api = axios.create({
  baseURL: baseBackendUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
