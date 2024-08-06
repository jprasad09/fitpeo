import React from 'react';
import { AiOutlineAim } from "react-icons/ai";
import { PiHamburgerBold } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

// Data for menu items
const menuItemsData = [
  {
    id: 1,
    icon: <AiOutlineAim />,
    iconColor: '#f46a31',
    bgColor: '#5e3236',
    title: 'Goals',
  },
  {
    id: 2,
    icon: <PiHamburgerBold />,
    iconColor: '#466aee',
    bgColor: '#283268',
    title: 'Popular Dishes',
  },
  {
    id: 3,
    icon: <BiDish />,
    iconColor: '#11a4e8',
    bgColor: '#204961',
    title: 'Menus',
  },
]

// Main Menu component
const Menu = () => {
  return (
    <section className='self-center h-full w-full md:w-[35%] bg-[--primary-bg-color] px-3 py-4 rounded flex flex-col gap-y-[23px]'>
      {menuItemsData.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </section>
  )
}

// Individual MenuItem component
const MenuItem = ({ icon, iconColor, bgColor, title }) => {
  return (
    <div className='flex items-center justify-between gap-x-2'>
      <div className='flex items-center gap-x-2 lg:gap-x-3'>
        <div 
          className='text-[25px] h-[50px] w-[50px] rounded-full flex items-center justify-center' 
          style={{ color: iconColor, backgroundColor: bgColor }}
        >
          {icon}
        </div>
        <span className='text-[15px] lg:text-[16px]'>{title}</span>
      </div>
      <div className='flex items-center justify-center h-6 w-6 rounded-full bg-[--tertiary-bg-color] cursor-pointer'>
        <IoIosArrowForward size={14} />
      </div>
    </div>
  )
}

export default Menu;