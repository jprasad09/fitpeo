import React from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillBagCheckFill, BsFillBagXFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

// Data for overview items
const overviewItemsData = [
  {
    id: 1,
    icon: <FaShoppingBasket />,
    iconColor: '#4163fc',
    bgColor: '#283369',
    title: 'Total Orders',
    value: '75',
    percentage: 3,
    isPositive: true,
  },
  {
    id: 2,
    icon: <BsFillBagCheckFill />,
    iconColor: '#00c88c',
    bgColor: '#164c42',
    title: 'Total Delivered',
    value: '70',
    percentage: 3,
    isPositive: false,
  },
  {
    id: 3,
    icon: <BsFillBagXFill />,
    iconColor: '#f25e5e',
    bgColor: '#522f33',
    title: 'Total Cancelled',
    value: '05',
    percentage: 3,
    isPositive: true,
  },
  {
    id: 4,
    icon: <FaMoneyBillTrendUp />,
    iconColor: '#e642a1',
    bgColor: '#562949',
    title: 'Total Revenue',
    value: '$12k',
    percentage: 3,
    isPositive: false,
  },
];

// Main Overview component
const Overview = () => {
  return (
    <section className='h-full w-full xl:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
      {overviewItemsData.map(item => (
        <OverviewItem key={item.id} {...item} />
      ))}
    </section>
  )
}

// Component for each overview item
const OverviewItem = ({ icon, iconColor, bgColor, title, value, percentage, isPositive }) => {
  return (
    <div className='bg-[--primary-bg-color] p-4 rounded flex flex-col'>
      <div style={{ color: iconColor, backgroundColor: bgColor }} className='p-2 text-[30px] w-fit rounded-lg mb-2'>
        {icon}
      </div>
      <span className='text-[--primary-text-color] text-[15px]'>{title}</span>
      <div className='flex items-center justify-between mt-3'>
        <span className='text-[--primary-text-color] text-3xl font-semibold'>{value}</span>
        <div className={`flex items-center gap-1 ${isPositive ? 'text-[--success-color]' : 'text-[--failure-color]'}`}>
          {isPositive ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

export default Overview;