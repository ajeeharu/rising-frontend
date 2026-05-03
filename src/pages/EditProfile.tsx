import { Camera, User, Check } from 'lucide-react';

export const EditProfile = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] p-4 sm:p-8 font-sans">
      {/* メインコンテナ */}
      <div className="max-w-2xl mx-auto">

        {/* ヘッダー */}
        {/* <div className="flex items-center justify-between mb-8">
          <button className="flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors group">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>設定に戻る</span>
          </button>
        </div> */}

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
                <div className="relative">
                  <div className="w-32 h-32 rounded-full ring-4 ring-slate-50 overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2.5 rounded-full cursor-pointer hover:bg-blue-700 transition-all shadow-lg hover:scale-110">
                    <Camera size={18} />
                    <input type="file" className="hidden" />
                  </label>
                </div>
                <div className="mt-4 sm:mt-0 text-center sm:text-left">
                  <h3 className="font-semibold text-slate-800">プロフィール写真</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    JPG, PNG または GIF形式 (最大 2MB)
                  </p>
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
                      defaultValue="ユーザー名"
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
                  />
                </div>
              </section>

              {/* アクションボタン */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-200 active:scale-[0.98] flex items-center justify-center gap-2">
                  <Check size={20} />
                  変更を保存
                </button>
                <button className="flex-1 bg-white hover:bg-slate-50 text-slate-600 font-semibold py-3.5 border border-slate-200 rounded-xl transition-all active:scale-[0.98]">
                  キャンセル
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 下部リンク */}
        {/* <div className="mt-8 flex justify-center gap-6">
          <button className="text-sm font-medium text-slate-400 hover:text-red-500 transition-colors">
            アカウントの削除
          </button>
          <button className="text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors">
            プライバシーポリシー
          </button>
        </div> */}
      </div>
    </div>
  );
};