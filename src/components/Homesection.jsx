import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import img1 from '../assets/w1.webp'


export const Homesection = () => {
  return (
    <div>
      <div class="grid bg-gradient-to-b from-[#D3DCFF] to-slate-50 grid-cols-1 md:grid-cols-2 gap-4">
        <div class=" sm:pl-16 pl-3 p-4">
          <h1 className="headfont leading-snug lg:text-[65px] sm:text-[55px] text-[40px] font-semibold">Manual <br /> Inspection is</h1>
          <span className="headfont lg:text-[65px] sm:text-[55px] text-[40px]   font-normal text-[#004EFF] ">Slow& Error-Prone</span>
          <p className="headfont text-[#6B7280] lg:text-[18px] md:text-[16px] text-[15px] leading-7">
            AI-powered visual inspection, leveraging computer vision, transforms
            manufacturing inspection procedures, boosting precision and
            cost-effectiveness while upholding product excel sm:text-[40px]lence. This AI
            inspection system detects defects with exceptional accuracy,
            optimizing the overall inspection process.
          </p>
          <div className="flex gap-7 pt-9">

          <button type="button" class="text-white bg-[#004EFF] hover:bg-white hover:text-black focus:outline-none  border  font-medium rounded-full sm:text-lg text-sm px-6 py-3 sm:px-9 sm:py-5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Schedule Call</button>
          <div className="flex items-center gap-4">
            <h1 className="text-blue-600 text-[50px] "><FaCirclePlay/></h1>
            <h1 className="text-[18px] font-semibold">Watch video</h1>
          </div>
          </div>
        </div>
        <div className="p-4">
    <img className="rounded-[11%] rounded-r-[89%] rounded-b-[70%] rounded-l-[30%] rounded-tl-[64%] rounded-tr-[62%] rounded-br-[38%] rounded-bl-[36%]" src={img1} alt="" />
</div>





      </div>
    </div>
  );
};
