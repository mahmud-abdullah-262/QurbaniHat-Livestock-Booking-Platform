import React from 'react';
import animal from '@/assets/banner1.png'
import { Button } from '@heroui/react';
import Link from 'next/link';
const Banner = () => {
  return (
<div
  className="relative bg-cover bg-center min-h-156 w-11/12 mx-auto rounded-2xl -mt-40 md:-mt-24 flex flex-col justify-center overflow-hidden"
  style={{ backgroundImage: `url(${animal.src})` }}
>
  
  <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent rounded-2xl" />


  <div className="relative z-10 mt-20">
    <h1 className='font-bold text-2xl md:text-5xl text-white ml-4 md:ml-16'>
      Fulfill Your <br /> Sunnah With <br /> Confidence
    </h1>
    <p className='text-md text-white ml-4 md:ml-16 mt-4'>Your Qurbani, Our Commitment. <br /> Find healthy, certified animals <br /> for your blessed sacrifice this Eid ul-Adha.</p>

    <Button
    className='
     glass ml-4 md:ml-16 mt-4
      
    '
  >
    <Link href={'/animals'}>Browse Animals</Link>
  </Button>
  </div>
  

</div>  
);
};

export default Banner;