export const Header = () => {
  return (
    <div className="flex w-[1280px] h-[59px] max-w-[1280px] justify-between items-center shrink-0 bg-black">
      <div className="cursor-pointer">
        <img src="./Logo.png" alt="" />
      </div>
      <div className="flex justify-center items-center">
        <button className="text-white w-[97px] h-[36px] p-[8px 16px justify-center items-center gap-2 ">
          <p>Genre</p>
        </button>
        <div className="flex justify-center items-center border-[2px] rounded-lg border-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="25"
            viewBox="0 0 16 17"
            fill="none"
          >
            <g opacity="0.5">
              <path
                d="M13.7105 14.2105L13.357 13.8568C13.3439 13.8699 13.3227 13.8699 13.3096 13.8568L10.283 10.83L9.9665 10.5136L9.61704 10.7932C8.88136 11.3817 7.94909 11.7333 6.9333 11.7333C4.55848 11.7333 2.6333 9.80812 2.6333 7.4333C2.6333 5.05848 4.55848 3.1333 6.9333 3.1333C9.30812 3.1333 11.2333 5.05848 11.2333 7.4333C11.2333 8.44909 10.8817 9.38136 10.2932 10.117L10.0136 10.4665L10.33 10.783L13.3568 13.8096C13.3699 13.8227 13.3699 13.8439 13.3568 13.857L13.7105 14.2105ZM13.7105 14.2105C13.9187 14.0022 13.9187 13.6644 13.7105 13.4561L12.9561 14.2105C13.1644 14.4187 13.5022 14.4187 13.7105 14.2105ZM6.9333 11.6666C9.27131 11.6666 11.1666 9.77131 11.1666 7.4333C11.1666 5.09529 9.27131 3.19997 6.9333 3.19997C4.59529 3.19997 2.69997 5.09529 2.69997 7.4333C2.69997 9.77131 4.59529 11.6666 6.9333 11.6666Z"
                fill="#FAFAFA"
                stroke="#FAFAFA"
              />
            </g>
          </svg>
          <input
            type="text"
            className="text-white border-none rounded-xl w-[355px] h-[36px] pr-4 bg-transparent outline-none"
            placeholder="Search..."
          />
        </div>
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
