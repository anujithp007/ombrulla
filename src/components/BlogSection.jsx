import React from 'react'
import { FaSquareFull } from 'react-icons/fa6'

const BlogSection = () => {
  return (
    <div>

        <div>
        <div className='flex justify-center items-center pt-6 gap-4'>
    <span className="text-blue-800 text-[15px]">
            <FaSquareFull />
          </span>
          <h1 className='headfont sm:text-[16px]   text-[15px] font-semibold'>AI INSIGHT</h1>
          <span className="text-blue-800 text-[15px]">
            <FaSquareFull />
          </span>

    </div>
    <h1 className="text-5xl font-medium  font-sans text-center  pt-6 tracking-tight mb-[83px]">To Read</h1>
        </div>
<ul class="grid grid-cols-1  xl:grid-cols-3 gap-y-14 gap-x-6 items-start p-14">
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 text-[25px] font-semibold">
                <span class="mb-1 block  leading-6 text-indigo-500"></span>Transforming Maritime Inspections with AI Visual Inspection
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p className='text-[19px] leading-relaxed text-gray-500'>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind
                    CSS.</p>
            </div>
            <div className='flex items-center gap-4'>
            <a href="#">
            <img src="https://picsum.photos/seed/1/40/40" class="rounded-full max-h-10 max-w-10" />
          </a>

          <div clas="flex flex-col">
            <a href="#">
              <p class="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
            </a>
            <a class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
            <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
          </div>
            </div>
        </div>
        <img src="https://blog.ombrulla.com/wp-content/uploads/2024/04/AI-Visual-Inspection-in-Maritime-Industry.png" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </li>
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 text-[25px] font-semibold">
                <span class="mb-1 block text-sm leading-6 text-purple-500"></span>AI Visual Inspection &#038; its Use Cases
                icons, by the makers of Tailwind CSS.
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p className='text-[19px] leading-relaxed text-gray-500'>A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and
                    Vue libraries.</p>
            </div> <div className='flex items-center gap-4'>
            <a href="#">
            <img src="https://picsum.photos/seed/1/40/40" class="rounded-full max-h-10 max-w-10" />
          </a>

          <div clas="flex flex-col">
            <a href="#">
              <p class="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
            </a>
            <a class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
            <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
          </div>
            </div>
        </div>
        <img src="https://blog.ombrulla.com/wp-content/uploads/2024/04/Use-Case-of-AI-Visual-Inspection.png" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </li>
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 text-[24px] font-semibold">
                <span class="mb-1 block text-sm leading-6 text-cyan-500"></span>SHow to include AI Visual Inspection 
                patterns by the makers of Tailwind CSS.
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p className='text-[19px] leading-relaxed text-gray-500'>A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web
                    projects.</p>
            </div> <div className='flex items-center gap-4'>
            <a href="#">
            <img src="https://picsum.photos/seed/1/40/40" class="rounded-full max-h-10 max-w-10" />
          </a>

          <div clas="flex flex-col">
            <a href="#">
              <p class="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
            </a>
            <a class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
            <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
          </div>
            </div>
        </div>
        <img src="https://blog.ombrulla.com/wp-content/uploads/2024/03/ai-visual-inspection-in-quality-control.png" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </li>
</ul>
    </div>
  )
}

export default BlogSection