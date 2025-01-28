import { Pagination } from "@/components/ui/pagination";

export default async function () {
  return (
    <div className="w-[1440px] h-[1569px] flex flex-col items-center mt-5">
      <div className="w-[1280px] h-[1257px] flex flex-col items-start gap-8">
        <p className="text-[#fafafa] text-[30px] normal font-semibold ">
          Search filter
        </p>
        <div className="flex items-start self-stretch gap-1">
          <div className="w-[387px] flex flex-col items-start gap-5 text-[#fafafa]">
            <div className="w-[213px] flex flex-col items-start gap-1">
              <p className="text-[24px] normal font-semibold">Genres</p>
              <p className="text-[16px] normal font-normal ">
                See lists of movies by genre
              </p>
            </div>
            <div className="w-[387px] flex items-start content-start gap-4 self-stretch flex-wrap"></div>
          </div>
          <div className="w-[1189px] h-[1px] flex flex-col px-4 gap-[10px] self-stretch rotate-90 bg-white"></div>
          <div className="w-[806px] flex flex-col items-start gap-8">
            <p className="flex flex-col items-start gap-8">title</p>
            <div className="w-[806px] flex flex-col items-start self-stretch gap-8"></div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
