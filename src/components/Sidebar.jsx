import React from 'react';
import { TbLayoutDashboardFilled, TbReportAnalytics } from "react-icons/tb";
import { HiHome } from "react-icons/hi";
import { RiBarChartBoxLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { AiOutlineLogout } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

// Define common styles for NavLink
const navLinkStyles = ({ isActive }) =>
  `flex items-center justify-center text-[18px] md:text-[30px] pl-[5px] md:pl-5 pr-[7px] md:pr-[23px] py-1 md:py-2 border-l-[1px] md:border-l-[3px] 
    hover:text-gray-300 ${isActive ? 'text-[--secondary-bg-color] border-[--secondary-bg-color]' : 'text-[--secondary-text-color] border-[--primary-bg-color]'
  }`;

const Sidebar = () => {
  return (
    <nav className='flex flex-col items-center justify-between gap-y-8 bg-[--primary-bg-color] min-h-screen sticky left-0 top-0 pt-2 pb-8 z-50'>
      <div className='flex flex-col items-center gap-y-8'>
        {/* Sidebar Icon */}
        <div className='text-[--secondary-bg-color] text-[25px] md:text-[40px]'>
          <TbLayoutDashboardFilled />
        </div>

        <div className='w-full flex flex-col gap-y-5'>
          {/* Navigation Links */}
          <NavLink to='/' className={navLinkStyles}>
            <HiHome title='Home' />
          </NavLink>
          <NavLink to='/analytics' className={navLinkStyles}>
            <RiBarChartBoxLine title='Analytics' />
          </NavLink>
          <NavLink to='/activity' className={navLinkStyles}>
            <TbReportAnalytics title='Activity' />
          </NavLink>
          <NavLink to='/wallet' className={navLinkStyles}>
            <IoWalletOutline title='Wallet' />
          </NavLink>
          <NavLink to='/orders' className={navLinkStyles}>
            <LiaShoppingBagSolid title='Orders' />
          </NavLink>
        </div>
      </div>

      {/* Logout Icon */}
      <div className='text-[--secondary-text-color] text-[18px] md:text-[30px] cursor-pointer hover:text-[--secondary-bg-color]'>
        <AiOutlineLogout title='Log out' />
      </div>
    </nav>
  );
};

export default Sidebar;