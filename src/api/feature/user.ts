import { api } from "../axiosInstance";

// 型定義
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    thumbnailURL: string;
    createdAt: string;
}

export interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
}

// API実行関数
export const userApi = {
    // ユーザー取得
    getUsers: async (): Promise<User[]> => {
        const response = await api.get<User[]>("/users");
        return response.data;
    },

    // ユーザー作成
    createUser: async (data: CreateUserRequest): Promise<User> => {
        const response = await api.post<User>("/users", data);
        return response.data;
    },
};