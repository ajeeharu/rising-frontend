import { api } from "../axiosInstance";
import type { User, CreateUserDto, UpdateUserDto } from "../types/user";

export const userService = {
  /**
   * ユーザー一覧を取得
   */
  getUsers: async (): Promise<User[]> => {
    const { data } = await api.get<User[]>("/users");
    return data;
  },

  /**
   * 特定のユーザーをIDで取得
   */
  getUserById: async (id: string): Promise<User> => {
    const { data } = await api.get<User>(`/users/${id}`);
    return data;
  },

  /**
   * 新規ユーザー作成
   */
  createUser: async (userData: CreateUserDto): Promise<User> => {
    const { data } = await api.post<User>("/users", userData);
    return data;
  },

/**
   * ユーザー情報更新
   */
  updateUser: async (id: string, data: UpdateUserDto): Promise<User> => {
    // Laravelのプロパティ名（スネークケース）に合わせて送信
    const formattedData = {
        name: data.name,
        email: data.email,
        avatar_url: data.avatarUrl,
        self_introduction: data.SelfIntroduction
    };
    const { data: responseData } = await api.put<User>(`/users/${id}`, formattedData);
    return responseData;
  },

  /**
   * ユーザー削除
   */
  deleteUser: async (id: string): Promise<void> => {
    await api.delete(`/users/${id}`);
  },
};