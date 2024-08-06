import React from 'react';
import avatar1 from '../../assets/profile-2.jpg';
import avatar2 from '../../assets/profile-3.jpg';
import avatar3 from '../../assets/profile-4.jpg';
import avatar4 from '../../assets/profile-5.jpg';
import avatar5 from '../../assets/profile-6.jpg';
import avatar6 from '../../assets/profile-7.jpg';

// Data for orders
const ordersData = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Wade Warren',
    orderNo: '15478256',
    amount: '$124.00',
    status: 'Delivered'
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Jane Cooper',
    orderNo: '48965786',
    amount: '$365.02',
    status: 'Delivered'
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Guy Hawkins',
    orderNo: '78958215',
    amount: '$45.88',
    status: 'Cancelled'
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Kristin Watson',
    orderNo: '20965732',
    amount: '$65.00',
    status: 'Pending'
  },
  {
    id: 5,
    avatar: avatar5,
    name: 'Cody Fisher',
    orderNo: '95715620',
    amount: '$545.00',
    status: 'Delivered'
  },
  {
    id: 6,
    avatar: avatar6,
    name: 'Savannah Nguyen',
    orderNo: '78514568',
    amount: '$128.20',
    status: 'Delivered'
  },
]

// Main Orders component
const Orders = () => {
  return (
    <section className='w-full md:w-[65%] relative bg-[--primary-bg-color] pt-4 rounded'>
      <h2 className='sticky top-0 text-lg lg:text-2xl px-3 font-medium mb-4'>Recent Orders</h2>

      <div className='md:h-[380px] px-3 pb-4 overflow-y-scroll'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-start text-[11px] sm:text-[14px] font-medium pb-[7px]'>Customer</th>
              <th className='text-start text-[11px] sm:text-[14px] font-medium pb-[7px] px-1'>Order No.</th>
              <th className='text-start text-[11px] sm:text-[14px] font-medium pb-[7px] px-1'>Amount</th>
              <th className='text-start text-[11px] sm:text-[14px] font-medium pb-[7px]'>Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData?.map(({ id, avatar, name, orderNo, amount, status }, idx) => (
              <tr key={id} className='border-t-[1.5px] border-gray-700'>
                <td className={`${idx !== (ordersData?.length - 1) && 'pb-3'} pt-3 flex items-center gap-x-2`}>
                  <img src={avatar} alt="Avatar" className='hidden sm:block h-8 w-8 rounded-full object-cover' />
                  <span className='text-[11px] sm:text-[14px] font-light'>{name}</span>
                </td>
                <td className={`${idx !== (ordersData?.length - 1) && 'pb-3'} pt-3 px-1 text-[11px] sm:text-[14px] font-light`}>{orderNo}</td>
                <td className={`${idx !== (ordersData?.length - 1) && 'pb-3'} pt-3 px-1 text-[11px] sm:text-[14px] font-light`}>{amount}</td>
                <td className={`${idx !== (ordersData?.length - 1) && 'pb-3'} pt-3 text-[11px] sm:text-[13px] font-light`}>
                  <span className={`px-1 sm:px-2 sm:py-[2px] rounded-full ${status === 'Delivered' ? 'text-[#00c88c] bg-[#164c42]' : status === 'Cancelled' ? 'text-[#fd3434] bg-[#522f33]' : 'text-[#f59e0b] bg-[#4a3a2b]'}`}>{status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Orders;