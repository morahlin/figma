import React from 'react';

const Contact = () => {
    return (
        <div className=' overflow-hidden p-[35px] pt-[150px] md:pt-[200px] w-full flex flex-col gap-10  items-center justify-center'>
            <h1 className="text-[52px] leading-[62px] text-center justify-center justify-items-center"> Contact Page </h1>
            <form>
                <div className='text-center leading-[62px] text-black'>
                    <label className=' block text-[32px] leading-[62px] text-bold font-bold' htmlFor="name"> Name: </label>
                    <input className='text-black h-1000px' type="text" id="name" name="name" required />
                </div>
                <div className='text-center leading-[62px] text-black'>
                    <label className='block text-[32px] leading-[62px] text-bold font-bold ' htmlFor="email"> Email: </label>
                    <input className='text-white h-1000px' type="email" id="email" name="email" required />
                </div>
                <div className='text-center leading-[62px] text-black'>
                    <label className='block text-[32px] leading-[62px] text-bold font-bold' htmlFor="message"> Message: </label>
                    <input className='text-white h-1000px w-[100%] margin' type="message" id="message" name="message" required></input>
                </div>
                <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-primary text-center justify-center items-center' type="submit"> Submit </button>
            </form>
        </div>
    );
};

export default Contact;