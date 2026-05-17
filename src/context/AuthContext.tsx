import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
import { userService } from '../api/services/UserService';
import type { UserType } from '../api/types/UserType';

interface AuthContextType extends UserType {
    isLogIn: boolean;
    isProfileComplete: boolean;
    isLoading: boolean; // ローディング状態を追加
    refreshUser: () => Promise<void>;
    handleLogoutState: () => void; // ログアウト状態にする共通処理
    // setter類は省略（必要に応じて追加してください）
    setUserId: (id: string) => void;
    setEmail: (email: string) => void;
    setName: (name: string) => void;
    setAvatarUrl: (url: string) => void;
    setSelfIntroduction: (intro: string) => void;
    setIsLogIn: (isLogIn: boolean) => void;
    setIsProfileComplete: (isComplete: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [id, setUserId] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isLogIn, setIsLogIn] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [avatar_url, setAvatarUrl] = useState<string>('');
    const [self_introduction, setSelfIntroduction] = useState<string>('');
    const [isProfileComplete, setIsProfileComplete] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true); // 初期値はtrue

    const refreshUser = async () => {
        handleLogoutState(); // まずはステートをリセットしてから処理を開始
        setIsLoading(true);
        let currentUserID = id; // 現在のユーザーIDを保持（後で比較するため）
        // --- 1. Cognitoのチェック (認証) ---
        try {
            const currentUser = await getCurrentUser();
            currentUserID = currentUser.userId; // Cognitoから取得したユーザーIDを一時的に保持
            setUserId(currentUser.userId); // Cognitoから取得したユーザーID
            // --- 1.5 ユーザー属性（email等）の取得 ---
            const attributes = await fetchUserAttributes();
            setEmail(attributes.email as string);
            setIsLogIn(true);
        } catch (authErr) {
            // 未ログイン状態ならここで終了（正常な未ログインとして扱う）
            console.log("未ログイン状態です");
            setIsLoading(false);
            return;
        }
        // 2. バックエンドからデータ取得
        try {
            const userData = await userService.getUserById(currentUserID);
            // 3. 正常系：データがある場合
            setName(userData.name as string); 
            setAvatarUrl(userData.avatar_url as string);
            setSelfIntroduction(userData.self_introduction as string);
            setIsProfileComplete(true);

        } catch (err: any) {
            // 4. 異常系：404 (Not Found) や 認証エラーの場合
            // --- 404 エラー（データなし）の判定を行う ---
            if (err.response && err.response.status === 404) {
                console.log("ユーザーがDBに存在しません（404）。プロフィール未完成状態に設定します。");
            } else {
                console.error("Auth check failed in DB:", err);
                handleLogoutState();
            }
        } finally {
            setIsLoading(false);
        }
    };

    // ステートをリセットする処理を共通化
    const handleLogoutState = () => {
        setUserId('');
        setEmail('');
        setName('');
        setAvatarUrl('');
        setSelfIntroduction('');
        setIsProfileComplete(false);
        setIsLogIn(false);
    };

    useEffect(() => {
        refreshUser();
    }, []);

    return (
        <AuthContext.Provider value={{
            sub:id, email, isLogIn, name, avatar_url, self_introduction, isProfileComplete, isLoading, refreshUser, setUserId, setEmail, setName, setAvatarUrl, setSelfIntroduction, setIsLogIn, setIsProfileComplete, handleLogoutState
        }}>
            {!isLoading && children} {/* チェックが終わるまで子要素を表示しない等の制御が可能 */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};