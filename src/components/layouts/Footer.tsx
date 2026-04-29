import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* ブランド・紹介エリア */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition">
              Rising 卓球教室
            </Link>
            <p className="mt-4 text-gray-100 text-sm max-w-xs">
              福井県を拠点として、卓球の楽しさと技術を広めるための教室です。初心者から上級者まで、幅広いレベルに対応したレッスンを提供しています。
            </p>
          </div>

          {/* リンク集 1 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
              コンテンツ
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-white hover:text-gray-300 transition">
                  ホーム
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-base text-white hover:text-gray-300 transition">
                  サービス
                </Link>
              </li>
            </ul>
          </div>

          {/* リンク集 2 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
              サポート
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base text-white hover:text-gray-300 transition">
                  会社概要
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-white hover:text-gray-300 transition">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライトエリア */}
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-100">
            &copy; {currentYear} Rising 卓球教室 All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-100 hover:text-gray-300 cursor-pointer text-sm"><Link to="/privacy">プライバシーポリシー</Link></span>
            <span className="text-gray-100 hover:text-gray-300 cursor-pointer text-sm"><Link to="/terms">利用規約</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
};