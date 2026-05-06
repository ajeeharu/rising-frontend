import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import { userService } from '../api/services/user';
import type { User } from '../api/types/user';

interface AuthContextType extends User {
    isLogIn: boolean;
    isProfileComplete: boolean;
    isLoading: boolean; // ローディング状態を追加
    refreshUser: () => Promise<void>;
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
    const [avatarUrl, setAvatarUrl] = useState<string>('');
    const [SelfIntroduction, setSelfIntroduction] = useState<string>('');
    const [isProfileComplete, setIsProfileComplete] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true); // 初期値はtrue

    const refreshUser = async () => {
        handleLogoutState(); // まずはステートをリセットしてから処理を開始
        setIsLoading(true);
        try {
            // 1. CognitoからID取得
            const currentUser = await getCurrentUser();
            setUserId(currentUser.userId);
            setIsLogIn(true);

            // 2. バックエンドからデータ取得
            const userData = await userService.getUserById(currentUser.userId);

            // 3. 正常系：データがある場合
            setName(userData.name);
            setEmail(userData.email);
            setAvatarUrl(userData.avatarUrl || '');
            setSelfIntroduction(userData.SelfIntroduction || '');
            setIsProfileComplete(true);

        } catch (err:any) {
            // 4. 異常系：404 (Not Found) や 認証エラーの場合
            // --- 404 エラー（データなし）の判定を行う ---
            if (err.response && err.response.status === 404) {
                console.log("ユーザーがDBに存在しません（404）。ログアウト状態にします。");
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
            userId: id, email, isLogIn, name, avatarUrl, SelfIntroduction, isProfileComplete, isLoading, refreshUser, setUserId, setEmail, setName, setAvatarUrl, setSelfIntroduction, setIsLogIn, setIsProfileComplete
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