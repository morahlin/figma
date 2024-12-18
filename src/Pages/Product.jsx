import React from 'react'
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car3 from '../assets/car3.jpg';
import car4 from '../assets/car4.jpg';
import car5 from '../assets/car5.jpg';
import car6 from '../assets/car6.jpg';
import car7 from '../assets/car7.jpg';
import car8 from '../assets/car8.jpg';
import car9 from '../assets/car9.jpg';
import car11 from '../assets/car11.jpg';
import car12 from '../assets/car12.jpg';
import car13 from '../assets/car1.jpg';
import { motion, useAnimation } from 'framer-motion';




const Product = () => {
  const animation = useAnimation();
  return (
    <div className='pt-[10vh]'>
      <div className='flex gap-20 items-center justify-center flex-wrap p-10 md:p-1'>
      <motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 5, transition: { duration: 3} }}>

        
      <div>
        <h1 className='text-[25px]'>Toyota Camry
        </h1>
        <img src={car1} alt='/' width={300} />
        <p>  &#8358;100,000,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg bg-red-600 text bg-center justify-center items-center'>buy now</button>
      </div>
      </motion.div>

      <motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 7, transition: { duration: 4 } }}>

  <div>
    <h1 className='text-[25px]'>Volkswagen Golf </h1>
    <img src={car3} alt='/' width={300} />
    <p> &#8358;100,000,000</p>
    <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg bg-red-600 text bg-center justify-center items-center'>buy now</button>
  </div>
</motion.div>
<motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 4 } }}>

      <div>
        <h1 className='text-[25px]'>Ford F-150
        </h1>
        <img src={car4} alt='/' width={300} />
        <p>  &#8358;500,000,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg bg-red-600 text bg-center justify-center items-center'>buy now</button>
      </div>
      </motion.div>
      <motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 3 } }}>


      <div>
        <h1 className='text-[25px]'>Volkswagen Golf
        </h1>
        <img src={car3} alt='/' width={300} />
        <p>  &#8358;100,000,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg bg-red-600 text bg-center justify-center items-center'>buy now</button>
      </div>
      </motion.div>
      <motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 4} }}>

      <div>
        <h1 className='text-[25px]'>BMW 4 Series
        </h1>
        <img src={car5} alt='/' width={300} />
        <p>  &#8358;100,000,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg bg-red-600 text bg-center justify-center items-center'>buy now</button>
      </div>
      </motion.div>
      <motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 4 } }}>

      <div>
        <h1 className='text-[25px]'>Mazda MX-5 Miata
        </h1>
        <img src={car6} alt='/' width={300} />
        <p> &#8358; 100,000,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg bg-red-600 text bg-center justify-center items-center'>buy now</button>
      </div>
      </motion.div>


      <motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 3 } }}>

      <div>
        <h1 className='text-[25px]'>GMC Sierra
        </h1>
        <img src={car7} alt='/' width={300} />
        <p> &#8358;900,000,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg bg-red-600 text bg-center justify-center items-center'>buy now</button>
      </div>
      </motion.div>
      
      <motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 4 } }}>

      <div>
        <h1 className='text-[25px]'>Jaguar E-Type
        </h1>
        <img src={car8} alt='/' width={300} />
        <p> &#8358;700,000,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg bg-red-600 text bg-center justify-center items-center'>buy now</button>
      </div>

      </motion.div>
      <motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 4 } }}>

      <div>
        <h1 className='text-[25px]'>Porsche 356
        </h1>
        <img src={car9} alt='/' width={300} />
        <p> &#8358;600,000,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg bg- bg-red-600 text bg-center justify-center items-center'>buy now</button>
      </div>
      </motion.div>
      <motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 3 } }}>
      <div>
        <h1 className='text-[25px]'>Jaguar E-Type
        </h1>
        <img src={car13} alt='/' width={300} />
        <p>  &#8358;600,000,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg bg- bg-red-600 text bg-center justify-center items-center'>buy now</button>
      </div>
      </motion.div>

      <motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 4 } }}>
      <div>
        <h1 className="text-[25px]">Jaguar E-Type
        </h1>
        <img src={car11} alt="/" width={300} />
        <p>&#8358;600,000,000</p>
        <button className="w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center">
          Buy Now
        </button>
      </div>
      </motion.div>

      <motion.div initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 4 } }}>
      <div>
        <h1 className='text-[25px]'>Ram 1500
        </h1>
        <img src={car12} alt='/' width={300} />
        <p> &#8358;600,000,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg bg- bg-red-600 text bg-center justify-center items-center'>buy now</button>
      </div>
      </motion.div>
  
      </div> 
  


      
      
    </div>
  )
}

export default Product
