import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/RisingLogo.png';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // メニュー項目の共通スタイル
  const menuLinkStyle = "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:bg-gray-100 text-info font-medium text-sm whitespace-nowrap";
  const activeLinkStyle = "flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 text-info font-bold text-sm whitespace-nowrap shadow-sm";

  return (
    <>
      {/* ヘッダー本体 */}
      <header className="fixed top-0 left-0 right-0 z-[1000] h-[100px] bg-base shadow-lg flex items-center px-8">

        {/* --- 左側：ロゴ＆アプリ名エリア --- 
            Google審査対策として、テキストで正式名称を併記
        */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <NavLink to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="Rising Logo"
              className="w-[80px] h-[80px] object-contain drop-shadow-md transition-transform group-hover:scale-105"
            />
            <div className="flex flex-row items-center">
              <span className="text-info text-xl font-black leading-tight tracking-tighter">
                Rising
              </span>
              <span className="ml-2 text-accent text-xl font-bold leading-none">
                卓球教室
              </span>
            </div>
          </NavLink>
        </div>

        {/* --- 中央：グローバルメニュー（白色の楕円） --- */}
        <div className="flex-1 flex justify-center">
          <nav className="bg-white rounded-full px-2 py-1.5 flex items-center gap-1 shadow-md border border-white">

            {/* ホーム */}
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? activeLinkStyle : menuLinkStyle}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span>ホーム</span>
            </NavLink>

            <NavLink
              to="/upload"
              className={({ isActive }) => isActive ? activeLinkStyle : menuLinkStyle}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
              </svg>
              <span>動画をアップロード</span>
            </NavLink>
            <NavLink
              to="/my-videos"
              className={({ isActive }) => isActive ? activeLinkStyle : menuLinkStyle}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span>自分の動画一覧</span>
            </NavLink>
            <NavLink
              to="/edit-profile"
              className={({ isActive }) => isActive ? activeLinkStyle : menuLinkStyle}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span>プロフィール編集</span>
            </NavLink>

            {/* ログイン・ログアウトボタン */}
            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="ml-4 px-5 py-2 bg-gray-800 text-white rounded-full text-sm font-bold hover:bg-black transition-colors shadow-sm"
              >
                ログオフ
              </button>
            ) : (
              <NavLink
                to="/login"
                className="ml-4 px-6 py-2 bg-accent text-white rounded-full text-sm font-bold border-2 border-accent hover:bg-white hover:text-accent transition-all duration-300 shadow-sm"
              >
                ログイン
              </NavLink>
            )}
          </nav>
        </div>

        {/* --- 右側：右端の余白バランス用（モバイルで見えなくなるのを防ぐ） --- */}
        <div className="flex-shrink-0 w-[40px] md:w-[150px]"></div>
      </header>

      {/* スペーサー */}
      <div className="h-[100px]" />
    </>
  );
}