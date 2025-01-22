export const TitlesSeeMore = ({ name }) => {
  return (
    <div className="w-[1277px] h-[36px] mt-5 mb-5 flex justify-between items-start">
      <p className=" cursor-pointer text-[24px]">{name}</p>
      <button>
        <p>See more </p>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
