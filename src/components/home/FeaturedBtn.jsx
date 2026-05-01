'use client'
import React, { useState } from 'react';

const FeaturedBtn = ({topFour}) => {
  const [active, setActive] = useState(0)
  return (
    <div className="flex justify-center gap-2 py-2 absolute bottom-10 right-10">
  {topFour.map((animal, index) => 
    <a 
    key={animal.id} 
    href={`#${animal.id}`} 
    onClick={() => setActive(index)}
    className={`btn btn-md rounded-full  ${index == active ? 'bg-white text-[#c3923c]' : 'bg-[#c3923c] text-white'}`}>
      {index + 1}
    </a>)}
 
</div>
  );
};

export default FeaturedBtn;