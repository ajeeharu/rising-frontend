export interface User {
  userId: string | null; // CognitoのユーザーIDを保持（null許容）
  email: string | ""; // メールアドレスは空文字列を許容（初期値として）
  name: string | ""; // 名前も空文字列を許容
  avatarUrl: string | ""; // アバターURLも空文字列を許容
  SelfIntroduction: string | ""; // 自己紹介も空文字列を許容
  // プロフィールが完了しているかどうかの判定用
  isProfileComplete: boolean;
}

// 登録・更新時に使う型（IDなどは自動付与される想定）
export type CreateUserDto = Omit<User, 'userId' | 'isProfileComplete'>;
export type UpdateUserDto = Partial<CreateUserDto>;