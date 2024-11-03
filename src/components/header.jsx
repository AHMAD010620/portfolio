import React from 'react';
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Header() {
  return (
    <div className='container mx-w-[1200px] px-3 relative lg:absolute left-0 right-0'>
      <div className='flex justify-between py-5 items-center'>
        <div 
          className='text-gradient font-secondary'
          data-aos="fade-down-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="5"
        >
          <a href='/'>
            <h1 className='text-[35px] leading-none font-bold'>
              <div></div>
              Portfolio.
            </h1>
          </a>
        </div>
        <div 
          className='flex items-center space-x-3'
          data-aos="fade-down-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="5"
        >
          <a href='https://www.facebook.com/profile.php?id=100082730827456' aria-label='Facebook' target="_blank" rel="noopener noreferrer">
            <BsFacebook className='text-secondary text-xl' />
          </a>
          <a href='https://www.instagram.com/a.fadlii___' aria-label='Instagram' target="_blank" rel="noopener noreferrer">
            <BsInstagram className='text-secondary text-xl' />
          </a>
        </div>
      </div>
    </div>
  );
}
