import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { VideoFileUpload } from '../components/video/VideoFileUpload';
import { ThumbnailUpload } from '../components/video/ThumbnailUpload';
import { Upload, X, Type, AlignLeft } from 'lucide-react'; // アイコンを追加

export const CreateVideo = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const handleThumbnailSelect = (file: File | null) => {
    if (thumbnailUrl) {
      URL.revokeObjectURL(thumbnailUrl);
    }
    if (file) {
      setThumbnailUrl(URL.createObjectURL(file));
    } else {
      setThumbnailUrl(null);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] py-10 px-4">
      <div className="max-w-[800px] mx-auto">

        {/* 1. 左上の戻るボタン (全画面共通) */}
        <div className="my-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ホームに戻る
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          {/* タイトルエリア */}
          <div className="bg-slate-50/50 border-b border-slate-100 p-8 sm:px-12">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">動画のアップロード</h1>
            <p className="text-slate-500 mt-2 font-medium">視聴者に届けるコンテンツの準備をしましょう</p>
          </div>

          <div className="p-8 sm:p-12 space-y-10">

            {/* ステップ1: ファイル選択 (VideoFileUpload) */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</div>
                <h2 className="text-lg font-bold text-slate-800">動画ファイル</h2>
              </div>
              <VideoFileUpload
                selectedFile={videoFile}
                onFileSelect={(file: File | null) => setVideoFile(file)}
              />
            </section>

            <hr className="border-slate-100" />

            {/* ステップ2: 詳細情報 */}
            <section className="space-y-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
                <h2 className="text-lg font-bold text-slate-800">動画の詳細</h2>
              </div>

              {/* タイトル入力 */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Type size={16} className="text-slate-400" />
                  タイトル <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 placeholder:text-slate-400"
                  placeholder="魅力的なタイトルを付けましょう"
                />
              </div>

              {/* 説明入力（追加案） */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <AlignLeft size={16} className="text-slate-400" />
                  動画の説明
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 placeholder:text-slate-400 resize-none"
                  placeholder="動画の内容について詳しく説明してください"
                />
              </div>

              {/* サムネイル */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">サムネイル</label>
                <ThumbnailUpload
                  previewUrl={thumbnailUrl || undefined}
                  onFileSelect={handleThumbnailSelect}
                />
                <p className="mt-2 text-xs text-slate-400">魅力的な画像はクリック率を高めます</p>
              </div>
            </section>

            {/* アクションボタン */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-100 active:scale-[0.98] flex items-center justify-center gap-2">
                <Upload size={20} />
                動画をアップロードする
              </button>
              <button
                className="flex-1 bg-white hover:bg-slate-50 text-slate-500 font-semibold py-4 border border-slate-200 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                onClick={() => { setVideoFile(null); handleThumbnailSelect(null); }}
              >
                <X size={18} />
                クリア
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};