import React from "react";
import { FaSquareFull } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <a
        href="#"
        class="block lg:max-w-[85rem] md:max-w-[55rem] sm:max-w-[38rem] max-w-[22rem]  m-auto mt-6 p-6 bg-1 bg-[#E1E8F5] border border-gray-200 rounded-[1rem] shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex-col gap-6 justify-center max-w-[46rem] m-auto items-center">

        <div className="flex items-center pt-10 gap-7">
          <span className="text-blue-800 text-[10px]">
            <FaSquareFull />
          </span>
          <h1 className="headfont sm:text-[15px] text-[13px] font-bold">
            Leader in AI visual inspection
          </h1>
        </div>

        <h1 className="sm:text-[67px] text-[42px] pt-9 font-medium">
          Crafting Tomorrow's World with{" "}
          <span className="text-[#004EFF] font-normal">AI Excellence</span>
        </h1>
        <p className="text-[#6B7280] sm:text-[18px] text-[14px] pt-7 leading-7">
          Leveraging AI, Ombrulla empowers clients with data-driven insights and
          automation, extracting valuable information from various sources like
          photos, videos, and data lakes. Our AI visual inspection system
          enables businesses to enhance their bottom line through precise defect
          detection and actionable insights.
        </p>
        <div className="flex pt-5 items-center gap-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height=""
              viewBox="0 -960 960 960"
              width=""
              fill="#2854C5"
              className="hover:text -white sm:h-[4rem] h-[2rem]"
              >
              <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </span>
          <h1 className="font-medium sm:text-[17px] text-[15px]">Watch corperate video</h1>
                </div>
        </div>
      </a>
    </div>
  );
};

export default About;
