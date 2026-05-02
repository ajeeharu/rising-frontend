import { useAuthenticator } from '@aws-amplify/ui-react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const location = useLocation();

  // 認証チェック中（初期ロード時など）
  if (authStatus === 'configuring') return <div>Loading...</div>;

  if (authStatus !== 'authenticated') {
    // 未ログインならログインページへ。
    // replace: 履歴を残さない, state: ログイン後に元のページに戻れるように情報を渡す
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ログイン済みなら、子ルートを表示
  return <Outlet />;
};
export default ProtectedRoute;