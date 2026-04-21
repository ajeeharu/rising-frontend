import { useNavigate, Link, NavLink } from "react-router-dom";
import { signOut, getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";

export const Header = () => {
  // ナビゲーションメニューの定義
  const navItems = [
    { name: "ホーム", path: "/" },
    { name: "サービス", path: "/services" },
    { name: "会社概要", path: "/about" },
    { name: "お問い合わせ", path: "/contact" },
  ];

  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  // ログイン状態を確認
  useEffect(() => {
    getCurrentUser()
      .then((res) => setUser(res))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
      navigate("/"); // ログアウト後にホームへ
    } catch (error) {
      console.error("ログアウト失敗", error);
    }
  };

  return (
    <header className="bg-secondary border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* ロゴエリア */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-500 transition-colors">
              Rising 卓球教室
            </Link>
          </div>

          {/* デスクトップ用メニュー */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 pb-1 border-b-2 ${
                    isActive 
                      ? "text-blue-600 border-blue-500" 
                      : "text-gray-500 border-transparent hover:text-blue-500 hover:border-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* アクションボタン（例：ログインなど） */}
          <div className="hidden md:flex items-center">
            {user ?(
            <button 
              onClick={handleLogout}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              ログアウト
            </button>
            ):(
            <button
              onClick={() => navigate("/login")} 
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              ログイン
            </button>
            )}
          </div>

          {/* モバイル用メニューボタン（三本線アイコンなど：ここでは簡略化） */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">メニューを開く</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};