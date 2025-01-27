import { PopoverDemo } from "@/components/popoverb";
import { ModeToggle } from "@/components/theme-toggle";
import { InputDemo } from "@/components/ui/inputS";
import InputS from "./Input";

export const Header = () => {
  return (
    <div className="flex w-[1280px] justify-between items-center flex-shrink-0 h-[59px]">
      <div className="flex gap-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M5.83366 2.16675V18.8334M14.167 2.16675V18.8334M1.66699 10.5001H18.3337M1.66699 6.33341H5.83366M1.66699 14.6667H5.83366M14.167 14.6667H18.3337M14.167 6.33341H18.3337M3.48366 2.16675H16.517C17.5203 2.16675 18.3337 2.9801 18.3337 3.98341V17.0167C18.3337 18.0201 17.5203 18.8334 16.517 18.8334H3.48366C2.48034 18.8334 1.66699 18.0201 1.66699 17.0167V3.98341C1.66699 2.9801 2.48034 2.16675 3.48366 2.16675Z"
            stroke="#4338CA"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className=" text-[16px] italic font-bold tracking-wide text-[#4338CA]">
          Movie Z
        </p>
      </div>
      <div
        className="flex justify-center 
     gap-[10px] items-center"
      >
        <PopoverDemo />
        <div className="flex justify-center items-center border-[0.1px] rounded-lg border-gray-600">
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
          {/* <InputDemo /> */}
          <InputS />
        </div>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};
