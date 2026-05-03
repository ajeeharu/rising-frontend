import { Check, MoreHorizontal, Eye, Calendar, Trash2, Search, Filter, Plus } from 'lucide-react';

export const MyVideos = () => {
  return (
    <main className="min-h-screen bg-[#f8fafc] py-10 px-6 md:px-4 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* チャンネルヘッダー */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 shrink-0 rounded-3xl overflow-hidden shadow-xl shadow-blue-100 border-4 border-white">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  alt="チャンネル"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-600 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center text-white">
                <Check size={14} strokeWidth={3} />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                コンテンツ管理
              </h1>
              <p className="text-slate-500 mt-1 font-medium">テストユーザーのチャンネル</p>
            </div>
          </div>

          {/* アップロードボタンなどのアクション */}
          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95">
            <Plus size={20} />
            <span>動画をアップロード</span>
          </button>
        </div>

        {/* フィルタ・検索バー */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="チャンネル内の動画を検索"
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 text-slate-600 font-semibold hover:bg-slate-50 rounded-xl transition-colors">
            <Filter size={18} />
            <span>フィルタ</span>
          </button>
        </div>

        {/* 動画テーブルコンテナ */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200">
                  <th className="text-left p-5 text-xl font-bold text-slate-500 uppercase tracking-wider w-[45%]">動画</th>
                  <th className="text-left p-5 text-xl font-bold text-slate-500 uppercase tracking-wider w-[15%] text-center">公開設定</th>
                  <th className="text-left p-5 text-xl font-bold text-slate-500 uppercase tracking-wider w-[20%]">
                    <button className="flex items-center gap-1 hover:text-blue-600 transition-colors font-bold">
                      アップロード日
                      <div className="flex flex-col leading-[0] scale-75">
                        <span>▲</span>
                        <span className="text-blue-600">▼</span>
                      </div>
                    </button>
                  </th>
                  <th className="p-5 text-xl font-bold text-slate-500 uppercase tracking-wider w-[10%] text-center">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[1, 2, 3].map((item) => (
                  <tr key={item} className="hover:bg-blue-50/30 transition-colors group">
                    {/* 動画メイン情報 */}
                    <td className="p-5">
                      <div className="flex gap-5">
                        <div className="w-40 h-[90px] shrink-0 bg-slate-100 rounded-xl overflow-hidden relative shadow-sm">
                          <img
                            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                            alt="動画サムネイル"
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded font-bold backdrop-blur-sm">
                            10:05
                          </div>
                        </div>
                        <div className="flex flex-col justify-center max-w-[280px]">
                          <h3 className="text-sm font-bold text-slate-800 mb-1.5 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            【2026年最新】Tailwind CSSでおしゃれなUIを作る方法
                          </h3>
                          <p className="text-xs text-slate-400 line-clamp-1">
                            初心者でも簡単にできる、プロ級のデザインテクニックを解説します...
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* 公開設定 */}
                    <td className="p-5 text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 shadow-sm">
                        <Eye size={14} strokeWidth={2.5} />
                        <span className="text-xs font-bold">公開中</span>
                      </div>
                    </td>

                    {/* 日付 */}
                    <td className="p-5">
                      <div className="flex items-center gap-3 text-slate-600">
                        <Calendar size={16} className="text-slate-300" />
                        <div>
                          <p className="text-sm font-semibold">2026年5月3日</p>
                          <p className="text-[11px] text-slate-400">公開済み</p>
                        </div>
                      </div>
                    </td>

                    {/* 操作 */}
                    <td className="p-5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <MoreHorizontal size={20} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* ページネーション（追加案） */}
          <div className="p-5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              全 <span className="font-bold text-slate-700">24</span> 本の動画を表示中
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-bold text-slate-400 cursor-not-allowed">前へ</button>
              <button className="px-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">次へ</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};