import React from 'react';
import CircularProgressBar from '../CircularProgressBar';
import { BiSolidUpArrow } from "react-icons/bi";

const Profit = () => {
  return (
    <section className='h-full w-full md:w-[49.5%] xl:w-[35%] bg-[--primary-bg-color] px-3 py-4 rounded flex justify-between'>
      {/* Profit Details */}
      <div className='flex flex-col'>
        <span className='text-[--primary-text-color] text-[15px]'>Net Profit</span>
        <span className='text-[--primary-text-color] text-2xl xl:text-[35px] font-semibold mt-7 mb-[15px]'>$ 6759.25</span>
        <div className='text-[--success-color] flex items-center gap-x-1'>
          <BiSolidUpArrow />
          <span>3%</span>
        </div>
      </div>

      {/* Progress Circle */}
      <div className='relative max-w-[100px] sm:max-w-fit flex flex-col gap-y-[5px]'>
        <CircularProgressBar sqSize={100} percentage={70} strokeWidth={15} />
        <div className='absolute top-[25px] left-[25px] sm:left-[71px] flex flex-col items-center max-w-[50px]'>
          <span className='text-[--primary-text-color] text-lg font-semibold'>70%</span>
          <span className='text-[9px] text-center leading-[10px] font-extralight'>Goal Completed</span>
        </div>
        <span className='text-[10px] text-center font-extralight'>*The values here has been rounded off.</span>
      </div>
    </section>
  )
}

export default Profit;