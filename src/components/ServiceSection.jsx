import React from 'react'
import { FaSquareFull } from 'react-icons/fa6'
import img1 from '../assets/a2.webp'
import img2 from '../assets/a3.webp'

export const ServiceSection = () => {
  return (
    <div>
        <div class="grid sm:pr-0 pr-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
  <div class="p-4 pl-14  w-full">
    <div className='flex items-center gap-4'>
    <span className="text-blue-800 text-[15px]">
            <FaSquareFull />
          </span>
          <h1 className='headfont sm:text-[19px] text-[15px] font-semibold'>AI Visual Inspection</h1>

    </div>
    <h1 className='headfont sm:text-[45px] text-[33px] pt-6 font-normal'>Enhancing quality through AI-based visual inspection</h1>
    <div>
        <p className='text-[#82858D] sm:text-[19px] text-[15px] leading-6'>Ombrulla transforms quality control across manufacturing and various sectors through its AI-driven defect detection system, replacing traditional visual inspection. This AI visual inspection not only eradicates human errors and delays but also elevates precision, culminating in a streamlined and accurate quality control process.</p>
        <ul className='list-disc text-[#82858D] sm:text-[19px] text-[15px] ml-16 pt-5 '>
            <li>AI visual inspection ensures consistent performance with unmatched accuracy</li>
            <li>It boosts throughput and cuts down on labour expenses</li>
            <li>By minimizing recalls and rework, AI inspection enhances brand reputation</li>
            <li>Real-time data and analytics enable scalability in AI-based visual inspection</li>
        </ul>
    </div>
    <div className='flex gap-4 pt-7'>
    <button type="button" class="text-white bg-[#004EFF] hover:bg-white hover:text-black focus:outline-none  border  font-medium rounded-full sm:text-lg text-sm px-6 py-3 sm:px-9 sm:py-5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Schedule Call</button>
    <div className='flex items-center'> 
        <h1 className='text-[19px] font-medium'>Read More</h1>
        <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg></span>
    </div>
    </div>
  </div>
  <div class="">
  <img className='hidden md:block md:max-w-[69%] mx-auto mt-[6rem] rounded-[1.75rem]' src={img1} alt="" />

  </div>
</div>

{/* 2nd section */}

<div className='pt-5'>
<div class="grid grid-cols-1 sm:pr-0 pr-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
  <div class="p-4 ">
    <img src={img2} className='hidden md:block md:max-w-[69%] mx-auto mt-[6rem] rounded-[1.75rem]' alt="" />
  </div>
  <div class="p-4 sm:pr-11 pl-14  w-full">
    <div className='flex items-center gap-4'>
    <span className="text-blue-800 text-[15px]">
            <FaSquareFull />
          </span>
          <h1 className='headfont sm:text-[17px] text-[15px] font-semibold'>AI INFRASTRUCTURE INSPECTION</h1>

    </div>
    <h1 className='headfont sm:text-[45px] text-[33px] pt-6 font-normal'>Enhances Efficiency, Safety, and Cost-Effectiveness</h1>
    <div>
        <p className='text-[#82858D] sm:text-[19px] text-[15px] leading-6'>Ombrulla's AI Infrastructure Inspection utilizes AI drone inspections for real-time insights, transforming the way we inspect critical infrastructure. This AI inspection technology enhances efficiency, safety, and cost-effectiveness, all while ensuring longevity and reducing risks. By leveraging AI in Infrastructure, Ombrulla empowers better infrastructure management with increased reliability and responsiveness.</p>
        <ul className='list-disc text-[#82858D] sm:text-[19px] text-[15px] ml-16 pt-5 '>
            <li>Precision: AI infrastructure solutions ensure accurate defect detection, minimizing oversight</li>
            <li>Efficiency: Automating inspections with AI drone technology saves time and resources</li>
            <li>Predictive Maintenance: AI-driven analysis predicts maintenance needs, preventing costly breakdowns.</li>
            <li>Real-time data and analytics enable scalability in AI-based visual inspection</li>
        </ul>
    </div>
    <div className='flex gap-4 pt-7'>
    <button type="button" class="text-white bg-[#004EFF] hover:bg-white hover:text-black focus:outline-none  border  font-medium rounded-full sm:text-lg text-sm px-6 py-3 sm:px-9 sm:py-5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Schedule Call</button>
    <div className='flex items-center'> 
        <h1 className='text-[19px] font-medium'>Read More</h1>
        <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg></span>
    </div>
    </div>
  </div>
</div>
 
</div>

    </div>
  )
}
