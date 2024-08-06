import React, { useState } from 'react';
import { IoClose, IoSearchOutline, IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import avatar from '../assets/profile-1.jpg';

const Topbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toggle search state
  const toggleSearch = () => setIsSearchOpen(prev => !prev);

  // Common icon styles
  const iconStyles = 'bg-[--tertiary-bg-color] h-6 w-6 md:h-9 md:w-9 rounded-full text-[15px] md:text-[22px] flex items-center justify-center text-[--primary-text-color]';

  return (
    <header className='flex items-center justify-end sm:justify-between px-2 md:px-5 py-2 md:py-[18px] bg-[--primary-bg-color] sticky top-0 z-50'>
      
      {/* Search bar for larger screens */}
      <div
        className={`flex items-center gap-x-3 px-2 py-[2.3px] sm:py-[6px] bg-[--tertiary-bg-color] text-[--primary-text-color] text-[12px] sm:text-[15px] rounded-md border border-gray-600 ${isSearchOpen ? 'flex' : 'hidden'} sm:flex`}
      >
        <IoSearchOutline size={18} />
        <input
          type='text'
          placeholder='Search'
          className='border-none outline-none bg-inherit sm:w-72'
        />
      </div>

      {/* Close search button for small screens */}
      <div
        className={`sm:hidden rounded-full text-[15px] text-[--primary-text-color] ${isSearchOpen ? 'block' : 'hidden'} mr-2`}
        onClick={() => setIsSearchOpen(false)}
      >
        <IoClose title='Close Search Bar' />
      </div>

      {/* Open search button for small screens */}
      <div
        className={`sm:hidden flex items-center justify-center rounded-full text-[15px] text-[--primary-text-color] ${isSearchOpen ? 'hidden' : 'flex'} mr-2 bg-[--tertiary-bg-color] h-6 w-6`}
        onClick={toggleSearch}
      >
        <IoSearchOutline title='Search' />
      </div>

      {/* Action icons and avatar */}
      <div className='flex items-center gap-x-2 md:gap-x-5'>
        <div className={`flex gap-x-2 md:gap-x-5 ${isSearchOpen ? 'hidden' : 'flex'} sm:flex`}>
          <div className={iconStyles}>
            <CiMail title='Messages' />
          </div>
          <div className={iconStyles}>
            <IoSettingsOutline title='Settings' />
          </div>
          <div className={`relative ${iconStyles}`}>
            <div className='absolute top-[6px] md:top-2 right-[6px] md:right-2 h-[6px] md:h-[10px] w-[6px] md:w-[10px] rounded-full bg-[--secondary-bg-color]'></div>
            <IoNotificationsOutline title='Notifications' />
          </div>
        </div>
        <img src={avatar} alt="Avatar" className='h-6 w-6 md:h-9 md:w-9 rounded-full object-cover' />
      </div>
    </header>
  );
};

export default Topbar;