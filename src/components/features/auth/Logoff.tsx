import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, CheckCircle2, Loader2 } from 'lucide-react';
import { signOut } from 'aws-amplify/auth';
import { useAuth } from '../../../context/AuthContext';

export const Logoff = () => {
    const [isProcessing, setIsProcessing] = useState(true);
    const navigate = useNavigate();
    const { handleLogoutState } = useAuth();


    useEffect(() => {
        const performLogout = async () => {
            try {
                // ここで実際のログアウト処理を実行
                await signOut({ global: true });

                // localStorageなどのクリーンアップを確実に行う
                localStorage.clear();
                sessionStorage.clear();
                handleLogoutState(); // AuthContextのステートもリセットする共通処理を呼び出す

                // 演出のために少し待機
                setTimeout(() => {
                    setIsProcessing(false);
                    // 3秒後にログイン画面へ遷移
                    setTimeout(() => navigate('/login'), 3000);
                }, 1500);
            } catch (error) {
                console.error('Logout failed:', error);
                setIsProcessing(false);
            }
        };

        performLogout();
    }, [navigate]);

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
                <div className="mb-6 flex justify-center">
                    {isProcessing ? (
                        <div className="relative">
                            <div className="absolute inset-0 animate-ping bg-blue-100 rounded-full"></div>
                            <div className="relative bg-blue-50 p-4 rounded-full">
                                <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                            </div>
                        </div>
                    ) : (
                        <div className="bg-green-50 p-4 rounded-full">
                            <CheckCircle2 className="w-12 h-12 text-green-600" />
                        </div>
                    )}
                </div>

                <h1 className="text-2xl font-bold text-slate-800 mb-2">
                    {isProcessing ? 'ログアウト中...' : 'ログアウト完了'}
                </h1>

                <p className="text-slate-500 mb-8">
                    {isProcessing
                        ? 'セッションを安全に終了しています。'
                        : 'ご利用ありがとうございました。間もなくログイン画面に戻ります。'}
                </p>

                {!isProcessing && (
                    <button
                        onClick={() => navigate('/login')}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        <LogOut className="w-4 h-4" />
                        今すぐログイン画面へ
                    </button>
                )}

                <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400">
                    Rising Table Tennis System
                </div>
            </div>
        </div>
    );
};
