import { TypeAnimation } from 'react-type-animation'
import React from 'react'

export default function Banner() {
  return (
  <div id="home" className='section container mx-auto max-w-[1200px] px-3 items-center'
  >
    <div className='w-full'>
        <div className='block  text-center  font-secondary   font-black text-[25px]'>
          Hello,
          < div
          className='text-gradient text-secondary text-[35px]'>
         I'm Ahmad Fadli
            </div> 
          <div>
            <TypeAnimation
                sequence={[
                  'College Student|', 
                  3000,
                  'Beginner Frontend Developer|',
                  3000,
                  () => { 
                    console.log("done typing!")
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className=' text-gradient ml-3 text-secondary'
            />
          </div>
        </div>
        <div className='max-w-[750px] text-center mx-auto mt-5'>
         Explore a visual journey where each project tells a story of achievements, creative exploration, and deep web development skills. Every piece is a plug-in of my best efforts to deliver results that are both functional and aesthetically pleasing.
        </div>
    </div>
  </div>
  )
}


