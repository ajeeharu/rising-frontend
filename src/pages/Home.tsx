

export const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary p-4">
            {/* 1. グラデーションとテキスト装飾のテスト */}
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-8 animate-pulse">
                制作中
            </h1>

            {/* 2. カードデザインとホバー効果のテスト */}
            <div className="group relative p-10 bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl transition-all hover:scale-105 hover:border-cyan-500/50">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-50 transition"></div>

                <div className="relative flex flex-col items-center gap-4">
                    <p className="text-slate-300 text-lg font-medium">
                        福井県　Rising　卓球教室へようこそ！
                    </p>

                    {/* 3. ボタンとリング（枠線）のテスト */}
                    <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full shadow-lg shadow-cyan-900/20 transition-all active:scale-95 ring-2 ring-cyan-400/30">
                        Check Connection
                    </button>
                </div>
            </div>

            {/* 4. v4新機能（CSS変数の直接利用）の簡易テスト */}
            <p className="mt-10 text-slate-500 text-sm">
                If you see a <span className="text-cyan-400 font-mono">cyan gradient</span>, it's working perfectly.
            </p>
        </div>
    );
}

