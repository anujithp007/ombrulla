import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaSquareFull } from 'react-icons/fa6';



const Swiper = () => {
      var settings = {
        dots: true, 
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className='bg-[#172554]   m-auto  '>
             <div className='flex justify-center items-center pt-6 gap-4'>
    <span className="text-blue-800 text-[15px]">
            <FaSquareFull />
          </span>
          <h1 className='headfont sm:text-[16px]  text-white text-[15px] font-semibold'>OUR TESTIMONIAL</h1>

    </div>
    <h1 className="text-5xl font-medium  text-center font-sans text-white pt-6 tracking-tight mb-[20px]">What Customers Say About Us</h1>

        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3>
              <section class="bg-white m-[5rem] rounded-lg  dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class=" sm:text-xl text-[13px] font-medium text-gray-400 dark:text-white"> Ombrulla's AI people tracking solution has impressively
                    enhanced our ability to seamlessly monitor and manage foot
                    traffic. The system's accuracy and real-time insights not
                    only streamline operations but also elevate overall security
                    measures</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-28 h-28 rounded-full" src="https://www.ombrulla.com/_astro/green-palmes.41a0af47_Z1Mo497.webp" alt="profile picture"/>
              <div class="">
                  <div class="pr-3 text-[20px] font-medium text-gray-900 dark:text-white">Manoj Menon,</div>
                  <div class="pl-3 text-[15px] font-light text-gray-500 dark:text-gray-400">Green Palm</div>
              </div>
          </figcaption>
      </figure>
  </div>
</section>
              </h3>
            </div>
            <div>
              <h3>
              <section class="bg-white m-[5rem] rounded-lg dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class=" sm:text-xl text-[13px] font-medium text-gray-400 dark:text-white">  We would like to express our gratitude for the collaboration
                    on the development of our Business Intelligence & Analytics
                    solutions. Ombrulla and its analytics team performed
                    admirably and we are pleased with the solution provided to
                    us.nkjijjjjjjjjjjjjjjjjjjjjjjjjj</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-28 h-28 rounded-full" src="https://www.ombrulla.com/_astro/best-western.d33d3fe0_Z2qgqbJ.webp" alt="profile picture"/>
              <div class="">
                  <div class="pr-3 text-[20px] font-medium text-gray-900 dark:text-white"> David Thomas,</div>
                  <div class="pl-3 text-[15px] font-light text-gray-500 dark:text-gray-400">Managing Director, AZEL IT Solutions</div>
              </div>
          </figcaption>
      </figure>
  </div>
</section>
              </h3>
            </div>
            <div>
              <h3>
              <section class="bg-white m-[5rem] rounded-lg dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class=" sm:text-xl text-[13px] font-medium text-gray-400 dark:text-white">  Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-28 h-28 rounded-full" src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp" alt="profile picture"/>
              <div class="">
                  <div class="pr-3 text-[20px] font-medium text-gray-900 dark:text-white">Jospeh,,</div>
                  <div class="pl-3 text-[15px] font-light text-gray-500 dark:text-gray-400">Planet Fitness</div>
              </div>
          </figcaption>
      </figure>
  </div>
</section>
              </h3>
            </div>
            <div>
              <h3>
              <section class="bg-white m-[5rem] rounded-lg dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class=" sm:text-xl text-[13px] font-medium text-gray-400 dark:text-white">Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-28 h-28 rounded-full" src="https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp" alt="profile picture"/>
              <div class="">
                  <div class="pr-3 text-[20px] font-medium text-gray-900 dark:text-white"> Tony Michel,</div>
                  <div class="pl-3 text-[15px] font-light text-gray-500 dark:text-gray-400">Shipcom wireless</div>
              </div>
          </figcaption>
      </figure>
  </div>
</section>
              </h3>
            </div>
            <div>
              <h3>
              <section class="bg-white m-[5rem] rounded-lg dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class=" sm:text-xl text-[13px] font-medium text-gray-400 dark:text-white"> Ombrulla's AI people tracking solution has impressively
                    enhanced our ability to seamlessly monitor and manage foot
                    traffic. The system's accuracy and real-time insights not
                    only streamline operations but also elevate overall security
                    measures</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-28 h-28 rounded-full" src="https://www.ombrulla.com/_astro/green-palmes.41a0af47_Z1Mo497.webp" alt="profile picture"/>
              <div class="">
                  <div class="pr-3 text-[20px] font-medium text-gray-900 dark:text-white">Manoj Menon,</div>
                  <div class="pl-3 text-[15px] font-light text-gray-500 dark:text-gray-400">Green Palm</div>
              </div>
          </figcaption>
      </figure>
  </div>
</section>
              </h3>
            </div>
            <div>
              <h3>
              <section class="bg-white m-[5rem] rounded-lg dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class=" sm:text-xl text-[13px] font-medium text-gray-400 dark:text-white"> Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-28 h-28 rounded-full" src="https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp" alt="profile picture"/>
              <div class="">
                  <div class="pr-3 text-[20px] font-medium text-gray-900 dark:text-white">James Joseph,</div>
                  <div class="pl-3 text-[15px] font-light text-gray-500 dark:text-gray-400">Terranz Dubai, UAE</div>
              </div>
          </figcaption>
      </figure>
  </div>
</section>
              </h3>
            </div>
            
          </Slider>
        </div>
        </div>
      );
    }

export default Swiper