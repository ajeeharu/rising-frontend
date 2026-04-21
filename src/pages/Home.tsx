import { VideoCard } from './VideoCard';

export const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(360px,_1fr))] gap-[20px_16px] pb-6 lg:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] xl:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
      <div className="flex justify-center items-center gap-2 mt-10 pt-6  pr-0  pb-8  pl-0">
        <button className="flex items-center gap-[0.38rem] bg-[#3f3f3f] text-[#fff] py-2  px-4  rounded-lg text-sm font-medium cursor-pointer prev-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
          前へ
        </button>
        <button className="flex items-center gap-[0.38rem] bg-[#3f3f3f] text-[#fff] py-2  px-4  rounded-lg text-sm font-medium cursor-pointer next-btn">
          次へ
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}