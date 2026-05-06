export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl: string;
  SelfIntroduction: string;
  // プロフィールが完了しているかどうかの判定用
  isProfileComplete: boolean;
}

// 登録・更新時に使う型（IDなどは自動付与される想定）
export type CreateUserDto = Omit<User, 'id' | 'isProfileComplete'>;
export type UpdateUserDto = Partial<CreateUserDto>;