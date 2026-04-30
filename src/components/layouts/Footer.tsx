import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
        
        {/* 全体のコンテナ */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-y-10 gap-x-8">
          
          {/* 1. ブランドエリア：スマホでは常に全幅 */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition">
              Rising 卓球教室
            </Link>
            <p className="mt-4 text-gray-100 text-sm max-w-sm leading-relaxed">
              福井県を拠点として、卓球の楽しさと技術を広めるための教室です。
              初心者から上級者まで対応したレッスンを提供しています。
            </p>
          </div>

          {/* 2. リンクエリア：スマホで強制的に2列横並びにするためのラッパー */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-2 w-full">
            
            {/* コンテンツ */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm font-bold text-gray-200 tracking-wider uppercase mb-4">
                コンテンツ
              </h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-base text-white hover:text-accent transition">ホーム</Link></li>
                <li><Link to="/services" className="text-base text-white hover:text-accent transition">サービス</Link></li>
              </ul>
            </div>

            {/* サポート */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm font-bold text-gray-200 tracking-wider uppercase mb-4">
                サポート
              </h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-base text-white hover:text-accent transition">会社概要</Link></li>
                <li><Link to="/contact" className="text-base text-white hover:text-accent transition">お問い合わせ</Link></li>
              </ul>
            </div>
            
          </div>
        </div>

        {/* コピーライトエリア（変更なし） */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center md:flex-row md:justify-between gap-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 order-1 md:order-2">
            <Link to="/privacy" className="text-gray-100 hover:text-accent transition text-sm">プライバシーポリシー</Link>
            <Link to="/terms" className="text-gray-100 hover:text-accent transition text-sm">利用規約</Link>
          </div>
          <p className="text-sm text-gray-300 order-2 md:order-1">
            &copy; {currentYear} Rising 卓球教室 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};