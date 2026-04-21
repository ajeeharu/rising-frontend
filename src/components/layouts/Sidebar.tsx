import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <nav className="w-60 bg-[#212121] py-3  px-0  overflow-y-auto fixed h-screen z-[999]">
      <div className="pt-0  pr-0  pb-3  pl-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            'flex items-center gap-6 py-2  px-6  text-[#fff] text-sm font-normal hover:bg-[#3f3f3f]' + (isActive ? ' bg-[#3f3f3f] font-medium' : '')
          }
          end
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span>ホーム</span>
        </NavLink>
        <NavLink
          to="/create-video"
          className={({ isActive }) =>
            'flex items-center gap-6 py-2  px-6  text-[#fff] text-sm font-normal hover:bg-[#3f3f3f]' + (isActive ? ' bg-[#3f3f3f] font-medium' : '')
          }
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
          </svg>
          <span>動画をアップロード</span>
        </NavLink>
        <NavLink
          to="/my-videos"
          className={({ isActive }) =>
            'flex items-center gap-6 py-2  px-6  text-[#fff] text-sm font-normal hover:bg-[#3f3f3f]' + (isActive ? ' bg-[#3f3f3f] font-medium' : '')
          }
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
          </svg>
          <span>自分の動画一覧</span>
        </NavLink>
        <NavLink
          to="/edit-profile"
          className={({ isActive }) =>
            'flex items-center gap-6 py-2  px-6  text-[#fff] text-sm font-normal hover:bg-[#3f3f3f]' + (isActive ? ' bg-[#3f3f3f] font-medium' : '')
          }
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span>プロフィール編集</span>
        </NavLink>
      </div>
    </nav>
  );
}
