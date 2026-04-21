import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/rising-logo.jpg';

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-0  px-4  h-14 bg-[#0f0f0f] fixed top-0 left-0 right-0 z-[1000]">
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 text-[#f1f1f1] cursor-pointer rounded-full hidden justify-center hover:bg-white/[0.1]">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V4H3z" />
          </svg>
        </button>
        <div className="flex items-center gap-1">
          <img
            src={logo}
            alt="Rising Logo"
            className="w-32 h-8 object-contain"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 max-w-[45.75rem] justify-center">
        <div className="flex-1 flex max-w-[33.75rem] relative items-center rounded-3xl bg-white/[0.08]">
          <input type="text" placeholder="検索" className="flex-1 h-10 bg-transparent rounded-3xl py-0  px-4  text-[#f1f1f1] text-base placeholder-[#aaa] placeholder-opacity-80 focus:border-[#3ea6ff] bg-black/[0.7]"/>
          <button className="w-16 h-10 bg-white/[0.08] rounded-none text-[#f1f1f1] cursor-pointer flex items-center justify-center hover:bg-white/[0.15]">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <NavLink to="/create-video" className="flex items-center gap-2 text-[#f1f1f1] cursor-pointer py-2  px-3  rounded-2xl hover:bg-white/[0.1]">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="#f1f1f1" d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
          </svg>
          <span>作成</span>
        </NavLink>
        <div className="profile-relative">
          <button className="w-10 h-10 text-[#f1f1f1] cursor-pointer rounded-full flex items-center justify-center-button hover:bg-white/[0.1]">
            <img
              className='w-8 h-8 rounded-full'
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt="Profile"
            />
          </button>
          <div className="absolute top-full right-0 w-72 bg-[#f9f9f9] rounded-xl overflow-hidden z-[1001] mt-2">
            <div className="flex items-center py-3  px-4">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="text-base font-medium text-[#0f0f0f] mb-1">テストユーザー</div>
              </div>
              <button className="cursor-pointer ml-auto p-0">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </button>
            </div>
            <div className="profile-tooltip-divider h-0 bg-[#e5e5e5]"></div>
            <div className="py-2 px-0">
              <div className="flex items-center gap-3 py-2  px-4  cursor-pointer text-[#0f0f0f] text-sm relative hover:bg-[#f2f2f2]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className='text-[#606060]'
                >
                  <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5z" />
                </svg>
                <span>ログアウト</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
