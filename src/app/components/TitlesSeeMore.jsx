import Link from "next/link";

export const TitlesSeeMore = ({ name }) => {
  return (
    <div className="w-[1260px]">
      <div className="w-full h-[36px] mt-5 mb-5 flex justify-between items-start">
        <p className=" cursor-pointer text-[24px]">{name}</p>
        <button>
          <Link href={"/upcoming"}>See more</Link>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
