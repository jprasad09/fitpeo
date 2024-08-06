import React from 'react';
import withLayout from '../utils/withLayout';
import {
  Overview,
  Profit,
  Activity,
  Menu,
  Orders,
  Feedback,
} from '../components/home';

const Home = () => {
  return (
    <section className='text-[--primary-text-color] p-2 lg:p-5 flex flex-col gap-y-2 sm:gap-y-5'>
      <h1 className='text-xl sm:text-3xl font-semibold'>Dashboard</h1>

      {/* Main content area with sections arranged in a responsive manner */}
      <section className='flex flex-col gap-y-2 lg:gap-y-5'>

        {/* Section for Overview and Profit components */}
        <section className='w-full flex flex-col-reverse xl:flex-row gap-x-2 gap-y-2 lg:gap-x-5 lg:gap-y-5'>
          <Overview />
          <Profit />
        </section>

        {/* Section for Activity and Menu components */}
        <section className='w-full flex flex-col md:flex-row gap-x-2 gap-y-2 lg:gap-x-5 lg:gap-y-5'>
          <Activity />
          <Menu />
        </section>

        {/* Section for Orders and Feedback components */}
        <section className='w-full flex flex-col md:flex-row gap-x-2 gap-y-2 lg:gap-x-5 lg:gap-y-5'>
          <Orders />
          <Feedback />
        </section>
      </section>
    </section>
  );
}

export default withLayout(Home);