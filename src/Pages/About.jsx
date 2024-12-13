import React from 'react'
import landing from '../assets/landing.webp';


const About = () => {
  return (
    <div className='pt-[10vh'>
        <h1 className='text-[10px] leading-[62px]'>About Figma land</h1>
        <div className='text-[30px] leading-[30px] text-center'>
            <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
         </p>

        </div>
        <img   
  src={landing} 
  alt="/" 
  className='w-[50%] overflow-hidden lg:pb-5 lg:pr-2 mx-auto'
/>

        
      
    </div>
  )
}

export default About
