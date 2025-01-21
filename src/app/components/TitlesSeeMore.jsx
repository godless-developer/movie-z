export const TitlesSeeMore = ({ name }) => {
  return (
    <div className="w-[1277px] h-[36px] mt-5 mb-5 flex justify-between items-start">
      <p className="text-[#fafafa] cursor-pointer text-[24px]">{name}</p>
      <button className="text-white">
        {/* <p>See more </p> */}
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
