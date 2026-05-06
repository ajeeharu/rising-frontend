import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // パスは環境に合わせて調整してください

export const ProtectedRoute = () => {
  const { isLogIn,isProfileComplete } = useAuth();
  const navigate = useNavigate();

  if (!isLogIn) {
    // ログインしていない場合、インフォメーション画面を表示
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          {/* アイコン（任意） */}
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 mb-4">
            <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ログインが必要なページです。
          </h2>
          <p className="text-gray-600 mb-8">
            この先のページを表示するには、アカウントへのログインが必要です。
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-500 transition-colors"
            >
              ログインページへ
            </button>
            <button
              onClick={() => navigate(-1)} // 1つ前のページに戻る
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md font-semibold hover:bg-gray-200 transition-colors"
            >
              戻る
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (!isProfileComplete) {
    // プロフィールが未完了の場合、インフォメーション画面を表示
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          {/* アイコン（任意） */}
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 mb-4">
            <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            プロフィールが未完了です。
          </h2>
          <p className="text-gray-600 mb-8">
            この先のページを表示するには、プロフィールの入力が必要です。
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/edit-profile')}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-500 transition-colors"
            >
              プロフィールを編集する
            </button>
            <button
              onClick={() => navigate(-1)} // 1つ前のページに戻る
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md font-semibold hover:bg-gray-200 transition-colors"
            >
              戻る
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ログインしている場合は、子ルート（保護されたページ）を表示
  return <Outlet />;
};