// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { signIn, getCurrentUser } from 'aws-amplify/auth';
import loginImage from "../../../assets/images/login.jpg";
import { signInWithRedirect } from 'aws-amplify/auth';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  // ログイン処理
  const handleSignIn = async ( e:any ) => {
    e.preventDefault(); // フォームの標準リロードを防止
    setError('');
    setIsLoading(true);

    try {
      const { isSignedIn } = await signIn({ username: email, password });
      if (isSignedIn) {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        // 必要に応じて、ここでリダイレクト処理などを記述
      }
    } catch (err: any) {
      console.error('ログイン失敗:', err);
      // エラーメッセージを日本語に変換
      if (err.name === 'NotAuthorizedException') {
        setError('メールアドレスまたはパスワードが正しくありません。');
      } else if (err.name === 'UserNotFoundException') {
        setError('ユーザーが見つかりません。');
      } else {
        setError('ログインに失敗しました。時間をおいて再度お試しください。');
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault
    console.log("🔥 ボタンがクリックされました"); // これが出るか確認
    try {
      console.log("Googleログインを開始します...");
      await signInWithRedirect({ provider: 'Google' });
      console.log("リダイレクト処理を呼び出しました"); // ここまで到達するか？
    } catch (error) {
      console.error("詳細なエラー内容:", error);
    }
  }

  // ログイン済みの表示
  if (user) {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ようこそ！
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {user.username} としてログインしています。
          </p>
        </div>
      </div>
    );
  }

  // ログインフォームの表示
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* イメージ画像 */}
          <img
            className="mx-auto h-80 w-auto"
            src={loginImage}
            alt="login image"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            サインイン
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSignIn}>
            {/* エラーメッセージ表示エリア */}
            {error && (
              <div className="rounded-md bg-red-50 p-4 ring-1 ring-inset ring-red-200">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      エラーが発生しました
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>{error}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Googleでサインイン */}
            <div>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
              {/* Googleのロゴ画像など */}
              Googleでサインイン
              </button>
            </div>
            {/* メールアドレス入力 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                メールアドレス
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* パスワード入力 */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  パスワード
                </label>
                {/* パスワード忘れリンク（未実装） */}
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    パスワードを忘れましたか？
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* ログインボタン */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400"
              >
                {isLoading ? 'サインイン中...' : 'サインイン'}
              </button>
            </div>
          </form>

          {/* 新規登録へのリンク */}
          <p className="mt-10 text-center text-sm text-gray-500">
            メンバーではありませんか？{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              いますぐ登録（無料）
            </a>
          </p>
        </div>
      </div>
    </>
  );
};