export const Maintenance= () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      {/* メインカード */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
        
        {/* アイコン部分 */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-amber-100 rounded-full">
            <svg 
              className="w-12 h-12 text-amber-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
              />
            </svg>
          </div>
        </div>

        {/* テキストコンテンツ */}
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Under Construction
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          現在、より良い体験をお届けするためにサイトを更新中です。<br />
          公開まで今しばらくお待ちください。
        </p>

        {/* 進捗バー（演出） */}
        <div className="w-full bg-slate-100 rounded-full h-2.5 mb-8">
          <div className="bg-amber-500 h-2.5 rounded-full w-[75%] animate-pulse"></div>
        </div>

        {/* お問い合わせボタン */}
        <button 
          // onClick={() => window.location.href = 'mailto:support@example.com'}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
        >
          これからもよろしくお願いします。
        </button>
      </div>

      {/* フッター */}
      {/* <p className="mt-8 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Your Project Name. All rights reserved.
      </p> */}
    </div>
  );
};

