import { useState } from 'react';
import { FileVideo, X, UploadCloud, Loader2 } from 'lucide-react';
import { uploadVideo } from '../../api/services/VideoService';

interface VideoFileUploadProps {
  selectedFile: File | null;
  onFileSelect: (file: File | null) => void;
}

export const VideoFileUpload = ({ selectedFile, onFileSelect }: VideoFileUploadProps) => {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const hasFile = !!selectedFile;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    onFileSelect(file);
    setIsUploading(true);
    setProgress(0);

    try {
      // アップロード開始。進捗を受け取って setProgress に入れる
      const path = await uploadVideo(file, (percent) => {
        setProgress(percent);
      });
      console.log('保存パス:', path);
    } catch (error) {
      alert('アップロードに失敗しました');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full">
      <div className={`relative border-2 border-dashed rounded-2xl transition-all duration-300 
          ${hasFile ? 'border-emerald-200 bg-emerald-50/50 p-6' : 'p-10'}`}>

        {hasFile ? (
          <div className="space-y-4"> {/* 上下に並べるため space-y-4 */}
            <div className="flex items-center gap-4 bg-white border border-emerald-100 p-4 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                {isUploading ? <Loader2 className="animate-spin" size={24} /> : <FileVideo size={24} />}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-800 truncate">{selectedFile?.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {isUploading ? `アップロード中... ${progress}%` : 'アップロード完了'}
                </p>
              </div>

              {!isUploading && (
                <button onClick={() => onFileSelect(null)} className="p-2 text-slate-400 hover:text-red-500">
                  <X size={20} />
                </button>
              )}
            </div>

            {/* プログレスバー本体 */}
            {isUploading && (
              <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}
          </div>
        ) : (
          /* ファイル未選択時の表示はそのまま */
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
              <input type="file" accept="video/*" hidden onChange={handleFileChange} />
            </label>

            <p className="text-xs text-slate-400">
              MP4, MOV, AVI (最大 500MB)
            </p>
          </div>
        )}
      </div>
    </div >
  );
};