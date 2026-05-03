import { Image as ImageIcon, X, CheckCircle2 } from 'lucide-react';

export const ThumbnailUpload = ({ previewUrl, onFileSelect }: { previewUrl?: string, onFileSelect: (file: File | null) => void }) => {
  const hasFile = !!previewUrl;

  return (
    <div className="w-full">
      <div
        className={`
          relative border-2 border-dashed rounded-2xl transition-all duration-300 overflow-hidden
          ${hasFile 
            ? 'border-emerald-200 bg-emerald-50/30 p-2' 
            : 'border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/50 py-12 px-6'
          }
        `}
      >
        {hasFile ? (
          /* 選択後のプレビュー表示 */
          <div className="relative group">
            <div className="relative w-full pt-[56.25%] bg-slate-100 rounded-xl overflow-hidden shadow-sm border border-emerald-100">
              <img
                src={previewUrl}
                alt="Thumbnail preview"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xs font-bold bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">プレビュー</p>
              </div>
            </div>
            
            {/* 削除ボタン */}
            <button
              className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-slate-600 hover:text-red-500 hover:bg-white shadow-lg transition-all active:scale-90 border border-slate-100"
              onClick={(e) => {
                e.stopPropagation();
                onFileSelect(null);
              }}
              title="画像を削除"
            >
              <X size={20} />
            </button>

            {/* 完了バッジ */}
            <div className="absolute -bottom-2 -left-2 bg-emerald-500 text-white p-1.5 rounded-full shadow-lg border-2 border-white">
              <CheckCircle2 size={16} />
            </div>
          </div>
        ) : (
          /* 未選択時の表示 */
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-1">
              <ImageIcon size={28} />
            </div>
            
            <div className="text-center">
              <p className="text-sm font-bold text-slate-700">
                サムネイル画像をドラッグ＆ドロップ
              </p>
              <p className="text-xs text-slate-400 mt-1">推奨比率 16:9 (1280x720px)</p>
            </div>

            <label className="bg-white border border-slate-200 text-slate-700 py-2 px-5 rounded-lg text-sm font-bold cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95">
              ファイルを選択
              <input 
                type="file" 
                accept="image/*" 
                hidden 
                onChange={(e) => onFileSelect(e.target.files?.[0] || null)}
              />
            </label>
            
            <p className="text-[11px] text-slate-400 font-medium">形式: JPG, PNG (最大 2MB)</p>
          </div>
        )}
      </div>
    </div>
  );
};