// import React from 'react';
import photo from '../src/images/p1.png'
import { FaStar, FaStarHalfAlt, FaRegStar, FaThumbsUp } from 'react-icons/fa';
import React, { useState } from 'react';

function Buy1() {
    const [rating, setRating] = useState(4);
    const handleClick = (index) => {
        setRating(index);
      };
      const generateStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(<FaStar key={i} className="text-yellow-500" onClick={() => handleClick(i)} />);
          } else if (i - 0.5 <= rating) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" onClick={() => handleClick(i)} />);
          } else {
            stars.push(<FaRegStar key={i} className="text-yellow-500" onClick={() => handleClick(i)} />);
          }
        }
        return stars;
      };
  return (
    <>
        <div className='md:max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white gap-4'>
           <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2'>
                    <img src={photo}></img>
                </div>
                <div className='md:w-1/2 mt-10 text-lg'>
                    <h1 className='text-3xl font-semibold'>DIOR Perfium</h1>
                    <div className="flex gap-2 mt-4">
                        {generateStars(rating)}
                        <FaThumbsUp style={{ marginRight: '8px'}}></FaThumbsUp>
                        
                    </div>
                    <div className='gird mt-10'>
                        <h1 className='text-lg font-semibold'>Standard Size</h1>
                        <button className='p-2 border-4 mt-6 hover:bg-slate-300'>60ml</button>
                        <button className='p-2 border-4 mt-6 ml-9 hover:bg-slate-300'>120ml</button>
                    </div>
                    <div className='grid'>
                        <button className='p-4 w-96 border-4 mt-6 hover:border-black font-semibold'>Sign for FREE shipping</button>
                    </div>
                    <div className='grid'>
                        <button className='p-4 w-96 border-4 mt-6 hover:border-black font-semibold'>Same Day Dilivery</button>
                    </div>
                    <div>
                        <h1 className='mt-8 bg-slate-200'><button>Sign in </button>

or 
create an account

to enjoy 
FREE standard shipping

.

Shipping & Returns</h1>
                    </div>
                </div>
           </div>
        </div>
    </>
  )
}

export default Buy1
