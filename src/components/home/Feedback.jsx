import React from 'react';
import { FaStar } from "react-icons/fa6";
import avatar1 from '../../assets/profile-8.jpg';
import avatar2 from '../../assets/profile-9.jpg';
import avatar3 from '../../assets/profile-10.jpg';
import avatar4 from '../../assets/profile-6.jpg';
import avatar5 from '../../assets/profile-7.jpg';

// Data for feedback items
const feedbackItemsData = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Jenny Wilson',
    rating: 4,
    review: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Dianne Russell',
    rating: 5,
    review: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Devon Lane',
    rating: 4,
    review: 'Normally wings are wings. but theirs are lean meaty, tender, and juicy.',
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Cody Fisher',
    rating: 3,
    review: 'The chocolate lava cake was divine—rich, gooey, and perfectly sweet. Service was friendly and efficient.',
  },
  {
    id: 5,
    avatar: avatar5,
    name: 'Savannah Nguyen',
    rating: 1,
    review: 'The pasta was overcooked and lacked flavor, and the service was slower than expected.',
  },
]

// Feedback component displaying a list of customer feedback
const Feedback = () => {
  return (
    <section className='w-full md:w-[35%] relative bg-[--primary-bg-color] pt-4 rounded'>
      <h2 className='sticky top-0 text-lg lg:text-2xl px-3 font-medium mb-4'>Customer's Feedback</h2>

      <div className='flex flex-col px-3 pb-4 md:h-[380px] overflow-y-auto'>
        {feedbackItemsData.map((item, index) => (
          <FeedbackItem 
            key={item.id} 
            avatar={item.avatar} 
            name={item.name} 
            rating={item.rating} 
            review={item.review} 
            isLastItem={index === feedbackItemsData.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

// FeedbackItem component displaying individual feedback details
const FeedbackItem = ({ avatar, name, rating, review, isLastItem }) => {
  return (
    <div className={`flex flex-col gap-y-2 ${!isLastItem && 'border-b-[1.5px] border-gray-700 pb-3 mb-3'}`}>
      <div className='flex items-center gap-x-2'>
        <img src={avatar} alt={`${name}'s Avatar`} className='h-8 w-8 rounded-full object-cover' />
        <span className='font-semibold text-sm sm:text-base'>{name}</span>
      </div>
      <div className='flex gap-x-[2px]'>
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar key={i} size={20} color={i <= rating ? '#fddc2e' : 'inherit'} />
        ))}
      </div>
      <p className='text-[13px] text-gray-400'>{review}</p>
    </div>
  )
}

export default Feedback;