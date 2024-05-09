import React from "react";
import { FaSquareFull } from "react-icons/fa6";
import img1 from '../assets/a5.webp'
import img2 from '../assets/a6.webp'

const ProductSection = () => {
  return (
    <div className="grid grid-cols-12 justify-items-center px-5 py-10 gap-4">
      <div className="col-span-12 md:col-span-6 flex flex-col justify-center max-w-[350px] items-center gap-y-10">
        <div className="flex items-center gap-4">
          <span className="text-blue-800 text-[15px]">
            <FaSquareFull />
          </span>
          <h1 className="headfont sm:text-[17px] w-[40%] text-[15px] sm:pr-[25rem] font-semibold">
            Products
          </h1>
        </div>
        <h1 className="font-sans text-center font-semibold text-[36px] md:text-[53px]">
          Tracking Tools
        </h1>
        <div className="max-w-[28rem]">
          <p className="text-[19px] text-start text-[#6B7280]">
            AI and IoT-enabled tracking tools enhance workplace safety by
            providing real-time monitoring of workers' movements and vital
            signs. Simultaneously, they contribute to environmental
            sustainability by optimizing energy usage, improving waste
            management, and promoting resource efficiency.
          </p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-3">
        <a
          href="#"
          className="bg-[#EFF1F5] flex flex-col justify-center items-center gap-14 max-w-[25rem] p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h1 className="font-sans font-semibold text-[20px] md:text-[24px] tracking-wider">RTLS - Workplace Safety</h1>
          <p className="text-[#6B7280] text-[16px] md:text-[19px]">
            IoT and AI integration improves workplace safety by continuously
            monitoring vital signs and locations in real-time for proactive
            hazard detection.
          </p>
          <img className="w-[8rem] md:w-[10rem]" src={img1} alt="" />
          <div className="flex text-[16px] md:text-[18px] gap-4">
            Book For Demo{" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
            </span>
          </div>
        </a>
      </div>

      <div className="col-span-12 md:col-span-3">
        <a
          href="#"
          className="bg-[#EFF1F5] flex flex-col justify-center items-center gap-14 max-w-[25rem] p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h1 className="font-sans font-semibold text-[20px] md:text-[24px] tracking-wider">Environmental Sustainability</h1>
          <p className="text-[#6B7280] text-[16px] md:text-[19px]">
            AI and IoT enhance environmental sustainability by optimizing
            energy use, improving waste management, and promoting resource
            efficiency.
          </p>
          <img className="w-[8rem] md:w-[10rem]" src={img2} alt="" />
          <div className="flex text-[16px] md:text-[18px] gap-4">
            Book For Demo{" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductSection;
