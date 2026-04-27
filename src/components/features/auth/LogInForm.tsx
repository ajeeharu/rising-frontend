import React, { useState } from 'react';
import { signIn, getCurrentUser, signUp, confirmSignUp } from 'aws-amplify/auth';
import loginImage from "../../../assets/images/login.jpg";
import { signInWithRedirect } from 'aws-amplify/auth';

// 画面表示の状態を管理する型
type AuthStep = 'signIn' | 'signUp' | 'confirmSignUp';

export const LoginForm: React.FC = () => {
  const [step, setStep] = useState<AuthStep>('signIn');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState(''); // 確認コード用
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  // エラーハンドリングの共通関数
  const handleAuthError = (err: any) => {
    console.error('認証エラー:', err);
    if (err.name === 'NotAuthorizedException') {
      setError('メールアドレスまたはパスワードが正しくありません。');
    } else if (err.name === 'UserNotFoundException') {
      setError('ユーザーが見つかりません。');
    } else if (err.name === 'UsernameExistsException') {
      setError('このメールアドレスは既に登録されています。');
    } else if (err.name === 'CodeMismatchException') {
      setError('確認コードが正しくありません。');
    } else {
      setError('エラーが発生しました。時間をおいて再度お試しください。');
    }
  };

  // 1. ログイン処理
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const { isSignedIn, nextStep } = await signIn({ username: email, password });

      // メール未確認の場合は確認画面へ飛ばす
      if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
        setStep('confirmSignUp');
        return;
      }

      if (isSignedIn) {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      }
    } catch (err: any) {
      handleAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // 2. 新規登録処理
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // パスワードポリシーのチェック
    // ^(?=.*[a-z]) : 小文字を1つ以上含む
    // (?=.*[A-Z])  : 大文字を1つ以上含む
    // (?=.*\d)     : 数字を1つ以上含む
    // .{8,}         : 8文字以上
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
      setError('パスワードは8文字以上で、大文字・小文字・数字をそれぞれ1文字以上含めてください。');
      return;
    }
    setIsLoading(true);
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: { email }
        }
      });
      // 登録成功したら確認コード入力画面へ
      setStep('confirmSignUp');
    } catch (err: any) {
      handleAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // 3. 確認コード送信処理
  const handleConfirmSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const { isSignUpComplete } = await confirmSignUp({
        username: email,
        confirmationCode
      });
      if (isSignUpComplete) {
        alert('登録が完了しました！ログインしてください。');
        setStep('signIn');
      }
    } catch (err: any) {
      handleAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithRedirect({ provider: 'Google' });
    } catch (error) {
      console.error("Googleログインエラー:", error);
    }
  };

  // --- 共通UIパーツ：エラー表示 ---
  const ErrorAlert = () => error ? (
    <div className="rounded-md bg-red-50 p-4 ring-1 ring-inset ring-red-200 mb-6">
      <p className="text-sm font-medium text-red-800">{error}</p>
    </div>
  ) : null;

  // --- ログイン済みの表示 ---
  if (user) {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h2 className="text-2xl font-bold text-gray-900">おかえりなさい！</h2>
          <p className="mt-2 text-gray-600">{user.username} さん</p>
        </div>
      </div>
    );
  }

  // --- メイン表示 ---
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-64 w-auto object-cover rounded-xl" src={loginImage} alt="Auth" />
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
          {step === 'signIn' && 'サインイン'}
          {step === 'signUp' && 'アカウント作成'}
          {step === 'confirmSignUp' && 'メールアドレスの確認'}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <ErrorAlert />

        {/* --- 1. ログインフォーム --- */}
        {step === 'signIn' && (
          <>
            <form className="space-y-6" onSubmit={handleSignIn}>
              <InputField label="メールアドレス" type="email" value={email} onChange={setEmail} />
              <InputField label="パスワード" type="password" value={password} onChange={setPassword} showForgot />
              <SubmitButton isLoading={isLoading} label="サインイン" />
            </form>
            <Divider label="または" />
            <GoogleButton onClick={handleGoogleSignIn} />
            <p className="mt-10 text-center text-sm text-gray-500">
              メンバーではありませんか？{' '}
              <button onClick={() => setStep('signUp')} className="font-semibold text-indigo-600 hover:text-indigo-500">
                いますぐ登録（無料）
              </button>
            </p>
          </>
        )}

        {/* --- 2. 新規登録フォーム --- */}
        {step === 'signUp' && (
          <>
            <form className="space-y-6" onSubmit={handleSignUp}>
              <InputField label="メールアドレス" type="email" value={email} onChange={setEmail} />
              <div>
                <InputField label="パスワード" type="password" value={password} onChange={setPassword} />

                {/* パスワードポリシーの表示エリア */}
                <div className="mt-2 p-3 bg-gray-100 rounded-md">
                  <p className="text-xs font-semibold text-gray-700 mb-2">パスワードの要件:</p>
                  <ul className="space-y-1">
                    <PolicyItem label="8文字以上" isValid={password.length >= 8} />
                    <PolicyItem label="大文字を含む" isValid={/[A-Z]/.test(password)} />
                    <PolicyItem label="小文字を含む" isValid={/[a-z]/.test(password)} />
                    <PolicyItem label="数字を含む" isValid={/\d/.test(password)} />
                  </ul>
                </div>
              </div>              <SubmitButton isLoading={isLoading} label="アカウントを作成する" />
            </form>
            <button onClick={() => setStep('signIn')} className="mt-4 w-full text-center text-sm font-semibold text-gray-600">
              ログインに戻る
            </button>
          </>
        )}

        {/* --- 3. 確認コード入力フォーム --- */}
        {step === 'confirmSignUp' && (
          <form className="space-y-6" onSubmit={handleConfirmSignUp}>
            <p className="text-sm text-gray-600 mb-4">{email} に送信された確認コードを入力してください。</p>
            <InputField label="確認コード" type="text" value={confirmationCode} onChange={setConfirmationCode} placeholder="123456" />
            <SubmitButton isLoading={isLoading} label="認証する" />
          </form>
        )}
      </div>
    </div>
  );
};

// --- サブコンポーネント ---

const InputField = ({ label, type, value, onChange, placeholder, showForgot }: any) => (
  <div>
    <div className="flex items-center justify-between">
      <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
      {showForgot && (
        <div className="text-sm">
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">パスワードを忘れましたか？</a>
        </div>
      )}
    </div>
    <div className="mt-2">
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      />
    </div>
  </div>
);

const SubmitButton = ({ isLoading, label }: any) => (
  <button
    type="submit"
    disabled={isLoading}
    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:bg-gray-400"
  >
    {isLoading ? '処理中...' : label}
  </button>
);

const GoogleButton = ({ onClick }: any) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
  >
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
    Googleでサインイン
  </button>
);

const Divider = ({ label }: any) => (
  <div className="relative my-6">
    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
    <div className="relative flex justify-center text-sm"><span className="bg-gray-50 px-2 text-gray-500">{label}</span></div>
  </div>
);

// 1つのポリシー項目を表示するコンポーネント
const PolicyItem = ({ label, isValid }: { label: string; isValid: boolean }) => (
  <li className={`flex items-center gap-2 text-xs ${isValid ? 'text-green-600' : 'text-gray-500'}`}>
    {isValid ? (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <span className="w-3 h-3 rounded-full border border-gray-400" />
    )}
    {label}
  </li>
);