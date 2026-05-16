export interface UserType {
  sub: string | null; // CognitoのユーザーIDを保持（null許容）
  email: string | ""; // メールアドレスは空文字列を許容（初期値として）
  name: string | ""; // 名前も空文字列を許容
  avatar_url: string | ""; // アバターURLも空文字列を許容
  self_introduction: string | ""; // 自己紹介も空文字列を許容
  // プロフィールが完了しているかどうかの判定用
  isProfileComplete: boolean;
}

// 登録・更新時）
export type CreateUserDto = Partial<UserType>; // すべてのプロパティがオプショナルな型
export type UpdateUserDto = Partial<CreateUserDto>;