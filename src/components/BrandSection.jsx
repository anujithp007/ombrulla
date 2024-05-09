import React from 'react'
import { FaSquareFull } from 'react-icons/fa6'

const BrandSection = () => {
  return (
    <>
    <div>
    <div className='flex items-center justify-center gap-4'>
    <span className="text-blue-800 text-[15px]">
            <FaSquareFull />
          </span>
          <h1 className='headfont sm:text-[19px] text-[15px] font-semibold'>AI Visual Inspection</h1>
          <span className="text-blue-800 text-[15px]">
            <FaSquareFull />
          </span>
    </div>
    <h1 className="text-5xl font-medium pt-7 text-center font-sans tracking-tight mb-[83px]">Trusted by Thousands of Businesses</h1>
    </div>
      <div class="mt-6 grid grid-cols-1 bg-gray-200 gap-1.5 md:grid-cols-3 lg:mt-8  rounded-2xl overflow-hidden">
        <div class="col-span-1 flex justify-center  py-8 px-8 hover:bg-white bg-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition ease-in-out delay-100">
     <img className='w-[8rem] h-[8rem]' src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" alt="" />
        </div>
        <div class="col-span-1 flex justify-center  py-8 px-8 hover:bg-white bg-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition ease-in-out delay-100">
     <img className='w-[8rem] h-[8rem]' src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp" alt="" />
        </div>
        <div class="col-span-1 flex justify-center  py-8 px-8 hover:bg-white bg-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition ease-in-out delay-100">
     <img className='w-[8rem] h-[8rem]' src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp" alt="" />
        </div>
        <div class="col-span-1 flex justify-center  py-8 px-8 hover:bg-white bg-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition ease-in-out delay-100">
     <img className='w-[8rem] h-[8rem]' src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp" alt="" />
        </div>
        <div class="col-span-1 flex justify-center  py-8 px-8 hover:bg-white bg-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition ease-in-out delay-100">
     <img className='w-[8rem] h-[8rem]' src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" alt="" />
        </div>
        <div class="col-span-1 flex justify-center  py-8 px-8 hover:bg-white bg-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition ease-in-out delay-100">
     <img className='w-[8rem] h-[8rem]' src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp" alt="" />
        </div>
      </div>
    </>
  )
}

export default BrandSection