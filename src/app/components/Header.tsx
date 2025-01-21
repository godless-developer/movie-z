export const Header = () => {
  return (
    <div className="flex w-[1280px] h-[59px] max-w-[1280px] justify-between items-center shrink-0 bg-black">
      <div>
        <img src="./Logo.png" alt="" />
      </div>
      <div>
        <button className="text-white w-[97px] h-[36px] p-[8px 16px justify-center items-center gap-2">
          Genre
        </button>
        <input type="text" />
      </div>
      <div>
        <button>
          <div className="w-[36px] h-[36px]">
            <img className="w-[36px] h-[36px]" src="./Modes.png" alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};
