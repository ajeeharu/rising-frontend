import { api } from "../axiosInstance";
import type { UserType, CreateUserDto, UpdateUserDto } from "../types/UserType";

export const userService = {
  /**
   * ユーザー一覧を取得
   */
  getUsers: async (): Promise<UserType[]> => {
    const { data } = await api.get<UserType[]>("/users");
    return data;
  },

  /**
   * 特定のユーザーをIDで取得
   */
  getUserById: async (id: string): Promise<UserType> => {
    const { data } = await api.get<UserType>(`/users/${id}`);
    return data;
  },

  /**
   * 新規ユーザー作成
   */
  createUser: async (userData: CreateUserDto): Promise<UserType> => {
    const { data } = await api.post<UserType>("/users", userData);
    return data;
  },

/**
   * ユーザー情報更新
   */
  updateUser: async (id: string, data: UpdateUserDto): Promise<UserType> => {
    // Laravelのプロパティ名（スネークケース）に合わせて送信
    const formattedData = {
        name: data.name,
        email: data.email,
        avatar_url: data.avatar_url,
        self_introduction: data.self_introduction
    };
    const { data: responseData } = await api.put<UserType>(`/users/${id}`, formattedData);
    return responseData;
  },

  /**
   * ユーザー削除
   */
  deleteUser: async (id: string): Promise<void> => {
    await api.delete(`/users/${id}`);
  },
};