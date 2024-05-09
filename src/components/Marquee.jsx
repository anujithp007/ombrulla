import React, { useRef, useEffect } from 'react';
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/4.webp';
import img5 from '../assets/5.webp';
import img6 from '../assets/6.webp';
import img7 from '../assets/7.webp';
import img8 from '../assets/3.webp';
import { FaSquareFull } from 'react-icons/fa6';

const Marquee = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-smoky');
        } else {
          entry.target.classList.remove('animate-smoky');
        }
      });
    });

    imagesRef.current.forEach(image => {
      observer.observe(image);
    });

    return () => {
      imagesRef.current.forEach(image => {
        observer.unobserve(image);
      });
    };
  }, []);

  return (
    <>
      <div>
        <div className='flex items-center justify-center gap-4'>
          <span className="text-blue-800 text-[15px]">
            <FaSquareFull />
          </span>
          <h1 className='headfont sm:text-[14px] text-[12px] font-semibold'>OUR CUSTOMERS</h1>
          <span className="text-blue-800 text-[15px]">
            <FaSquareFull />
          </span>
        </div>
        <h1 className='text-[60px] font-sans text-center font-semibold'>They Trust Us</h1>
      </div>
      <div className='flex space-x-16 m-auto max-w-[70rem] overflow-hidden pt-9' >
        <div className='flex space-x-16 animate-loop-scroll'>
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img1} alt="Logo 1" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img2} alt="Logo 2" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img3} alt="Logo 3" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img5} alt="Logo 5" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img6} alt="Logo 6" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img7} alt="Logo 7" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img8} alt="Logo 8" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img1} alt="Logo 1" />
        </div>
        <div className='flex space-x-16 animate-loop-scroll' aria-hidden='true'>
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img1} alt="Logo 1" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img2} alt="Logo 2" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img3} alt="Logo 3" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img5} alt="Logo 5" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img6} alt="Logo 6" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img7} alt="Logo 7" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img8} alt="Logo 8" />
          <img ref={el => imagesRef.current.push(el)} className="max-w-none w-[9rem] h-[9rem]" src={img1} alt="Logo 1" />
        </div>
      </div>
    </>
  );
};

export default Marquee;
