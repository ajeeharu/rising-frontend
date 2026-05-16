export interface VideoType {
  sub: string | null; // CognitoのユーザーIDを保持（null許容）
  email: string | ""; // メールアドレスは空文字列を許容（初期値として）
  name: string | ""; // 名前も空文字列を許容
  avatar_url: string | ""; // アバターURLも空文字列を許容
  self_introduction: string | ""; // 自己紹介も空文字列を許容
  // プロフィールが完了しているかどうかの判定用
  isProfileComplete: boolean;
}
export interface S3UpLoadRequestType {
  file_name: string;
  file_type: string;
}
export interface S3UpLoadResponseType {
  s3_presigned: {
    url: string;
    fields?: Record<string, string>; // 署名付きURLに必要な追加フィールドがある場合
  };
  path: string; // S3内の保存パス
}

// 登録・更新時）
export type CreateVideoDto = Partial<VideoType>; // すべてのプロパティがオプショナルな型
export type UpdateVideoDto = Partial<CreateVideoDto>;
export type S3UploadRequestDto = Partial<S3UpLoadRequestType>; // S3アップロード