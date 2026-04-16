// src/routes/index.tsx
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { LoginForm } from "../components/features/auth/LogInForm";
import { Home } from "../pages/Home";
import { TermsOfService } from "../pages/TermsOfService";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'ap-northeast-1_fGtvowy25',
      userPoolClientId: '29fsokkcv74dil3kl926v01fcg',
      // ロリポップ環境でも動作するよう、標準の認証フローを指定
      loginWith: {
        email: true,
        // ここから下が Google ログインに必須の設定です
        oauth: {
          domain: 'ap-northeast-1fgtvowy25.auth.ap-northeast-1.amazoncognito.com', // Cognitoで設定したドメイン
          scopes: ['email', 'profile', 'openid'],
          redirectSignIn: ['https://rising-table-tennis.website'],
          redirectSignOut: ['https://rising-table-tennis.website'],
          responseType: 'code', // 'code' (推奨) または 'token'
        }
      }
    }
  }
});

export const AppRoutes = () => {
  return (
    <Routes>
      {/* 「メインのレイアウト」を使うグループ */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<LoginForm />} />
        {/* 他の通常のページ */}
      </Route>
    </Routes>
  )
};