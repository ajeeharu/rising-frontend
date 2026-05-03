import { FileVideo, UploadCloud, X, CheckCircle2 } from 'lucide-react';

interface VideoFileUploadProps {
  selectedFile: File | null;
  onFileSelect: (file: File | null) => void;
}

export const VideoFileUpload = ({ selectedFile, onFileSelect }: VideoFileUploadProps) => {
  const hasFile = !!selectedFile;

  return (
    <div className="w-full">
      <div 
        className={`relative border-2 border-dashed rounded-2xl transition-all duration-300 
          ${hasFile 
            ? 'border-emerald-200 bg-emerald-50/50 p-6' 
            : 'border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/30 p-10 sm:p-14'
          }`}
      >
        {hasFile ? (
          /* ファイル選択後の表示 */
          <div className="flex items-center gap-4 bg-white border border-emerald-100 p-4 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <FileVideo size={24} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-slate-800 truncate">
                  {selectedFile?.name}
                </p>
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {(selectedFile.size / (1024 * 1024)).toFixed(1)} MB • アップロード準備完了
              </p>
            </div>

            <button 
              onClick={() => onFileSelect(null)} 
              className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
              title="ファイルを削除"
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          /* ファイル未選択時の表示 */
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
              <UploadCloud size={32} />
            </div>
            
            <div>
              <p className="text-base font-bold text-slate-700">
                動画ファイルをドラッグ＆ドロップ
              </p>
              <p className="text-sm text-slate-400 mt-1">
                または、コンピューターから直接選択してください
              </p>
            </div>

            <label className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-6 rounded-xl font-bold cursor-pointer transition-all shadow-md shadow-blue-100 active:scale-95 inline-block">
              ファイルを選択
              <input 
                type="file" 
                accept="video/*" 
                hidden 
                onChange={(e) => onFileSelect(e.target.files?.[0] || null)} 
              />
            </label>
            
            <p className="text-xs text-slate-400">
              MP4, MOV, AVI (最大 500MB)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};