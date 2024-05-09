import React from "react";
import img1 from "../assets/petran.webp";
import img2 from "../assets/a4.webp";

const PetranSection = () => {
  return (
    <div>
      <div className='petranbg sm:p-0 p-9  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"'>
        <div className="sm:p-[6rem] p-1">
          <img className="w-[7rem]" src={img1} alt="" />
          <h1 className="text-[17px] text-white font-normal"><span className="font-bold">PE</span>rformance - <span className="font-bold">TR</span>acking - <span className="font-bold">AN</span>alytics</h1>
          <h1 className="headfont text-[40px] text-white font-semibold pt-6">AIoT Enabled Asset Performance Management Software</h1>
          <p className="text-white  text-[17px]">
            PETRAN offers an Asset Management software (APM) that harnesses the
            power of artificial intelligence and the Internet of Things (IoT) to
            empower data-driven decision-making and enable predictive
            maintenance and operational equipment effectiveness
          </p>
          <div className="flex gap-4 pt-7 items-center">
            <button
              type="button"
              class="text-white bg-transparent hover:bg-white hover:text-black focus:outline-none mt-[15px]  border  font-medium rounded-full sm:text-lg text-sm px-3 py-2 sm:px-6 sm:py-4 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Schedule Call
            </button>
            <div className="flex pt-5 items-center gap-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height=""
                  viewBox="0 -960 960 960"
                  width=""
                  fill="#fff"
                  className="hover:text-white sm:h-[4rem] h-[2rem]"
                >
                  <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </span>
              <h1 className="font-medium text-white sm:text-[17px] text-[15px]">
                Watch video
              </h1>
            </div>
          </div>
        </div>
        <div className="p-4">
            <img className="w-full md:max-w-[69%] mx-auto mt-[6rem] rounded-[1.75rem]" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PetranSection;
