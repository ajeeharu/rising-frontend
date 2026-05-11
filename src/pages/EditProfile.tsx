import { User, Check } from 'lucide-react';
import { AVATARS, type AvatarId } from '../constants/avatars';
import { useState, useEffect } from 'react';
import { userService } from '../api/services/user';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export const EditProfile = () => {
  const { sub, email, name, avatar_url, self_introduction, setName,setAvatarUrl,setSelfIntroduction,setIsProfileComplete } = useAuth();

  // フォーム用ステート
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarId>(AVATARS[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // 初期データの流し込み
  useEffect(() => {
    setName(name || '');
    setSelfIntroduction(self_introduction || '');
    setAvatarUrl(avatar_url || '');
    // URLからIDを逆引きしてセット
    const currentAvatar = AVATARS.find(a => a.path === avatar_url);
    if (currentAvatar) setSelectedAvatar(currentAvatar.id);
  }, [name, self_introduction, avatar_url]);

  // 保存処理
  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      await userService.createUser({
        sub: sub!, // CognitoのユーザーIDをそのまま使用
        name: name,
        email: email,
        avatar_url: AVATARS.find(a => a.id === selectedAvatar)?.path || '',
        self_introduction: self_introduction
      });
      setAvatarUrl(AVATARS.find(a => a.id === selectedAvatar)?.path || '');
      setIsProfileComplete(true); // プロフィール完了フラグを立てる
      // alert('プロフィールを保存しました！');
      // 必要に応じてページ遷移やAuthデータの再取得(refreshUser)を行う
    } catch (error) {
      console.error('保存エラー:', error);
    } finally {
      setIsSubmitting(false);
      navigate('/'); // 保存後にトップページへ遷移
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] p-4 sm:p-8 font-sans">
      {/* メインコンテナ */}
      <div className="max-w-2xl mx-auto">

        {/* メインカード */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                プロフィールの編集
              </h1>
              <p className="text-slate-500 mt-2">
                Rising卓球教室とのやり取りで使用する情報の変更ができます。
              </p>
            </div>

            <div className="space-y-10">
              {/* アバターセクション */}
              <section className="flex flex-col items-center sm:flex-row sm:gap-8">

                <div className="mx-autobg-white rounded-xl shadow-md">
                  <h2 className="text-xl font-bold mb-4">アバターの選択</h2>

                  {/* 現在の選択プレビュー */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <img
                        src={AVATARS.find(a => a.id === selectedAvatar)?.path}
                        alt="Selected Avatar"
                        className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
                      />
                      <span className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full text-xs">
                        選択中
                      </span>
                    </div>
                  </div>

                  {/* 4x4 グリッド */}
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                    {AVATARS.map((avatar) => (
                      <button
                        key={avatar.id}
                        onClick={() => setSelectedAvatar(avatar.id)}
                        className={`relative group rounded-lg overflow-hidden border-2 transition-all
                          ${selectedAvatar === avatar.id
                            ? 'border-blue-500 ring-2 ring-blue-200'
                            : 'border-transparent hover:border-gray-300'}`}
                      >
                        <img
                          src={avatar.path}
                          alt={avatar.label}
                          className="w-full h-full object-cover aspect-square"
                        />
                        {/* ホバー時のラベル表示 */}
                        <div className="absolute inset-0 bg-gray-200 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-gray-800 text-xl">{avatar.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* 入力セクション */}
              <section className="space-y-6">
                <div>
                  <label className="block text-xl font-semibold text-slate-700 mb-2">
                    ユーザー名 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 placeholder:text-slate-400"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xl font-semibold text-slate-700 mb-2">
                    自己紹介
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 placeholder:text-slate-400 resize-none"
                    placeholder="あなたの卓球の経歴を教えてください"
                    value={self_introduction}
                    onChange={(e) => setSelfIntroduction(e.target.value)}
                  />
                </div>
              </section>

              {/* アクションボタン */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <button
                  onClick={handleSave}
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-200 active:scale-[0.98] flex items-center justify-center gap-2">
                  <Check size={20} />
                  {isSubmitting ? '保存中...' : '変更を保存'}
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="flex-1 bg-white hover:bg-slate-50 text-slate-600 font-semibold py-3.5 border border-slate-200 rounded-xl transition-all active:scale-[0.98]">
                  キャンセル
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};