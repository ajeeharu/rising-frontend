export const VideoCard = () => {
  return (
    <div className="cursor-pointer mb-5">
      <div className="relative w-full rounded-xl overflow-hidden mb-3">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt="Video thumbnail"
        />
      </div>
      <div className="flex gap-3">
        <div className="shrink-0">
          <img
            className="w-9 h-9 rounded-full"
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt="Channel"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[#fff]">テストビデオ</h3>
          <p className="text-sm text-[#aaa] mt-0  mr-0  mb-0  ml-0">テストユーザー</p>
        </div>
      </div>
    </div>
  );
};
