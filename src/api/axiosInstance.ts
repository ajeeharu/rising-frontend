import axios, { type AxiosInstance, type AxiosError } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // 10秒でタイムアウト
  headers: {
    "Content-Type": "application/json",
  },
});

// リクエストインターセプター：送信前に処理を挟む
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 例：localStorageから取得
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// レスポンスインターセプター：受け取り後に処理を挟む
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // 認証切れの処理（ログアウトさせてリダイレクト等）
    }
    return Promise.reject(error);
  }
);