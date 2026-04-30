import React from 'react';
import animal from '@/assets/banner1.png'
const Banner = () => {
  return (
<div
  className="relative bg-cover bg-center min-h-200 w-11/12 mx-auto rounded-2xl -mt-24"
  style={{ backgroundImage: `url(${animal.src})` }}
>
  <h1>test</h1>
</div>  );
};

export default Banner;