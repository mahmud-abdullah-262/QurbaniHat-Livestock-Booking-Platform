'use client'
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const FeaturedBtn = ({topFour}) => {
  const [active, setActive] = useState(0)
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = topFour.findIndex(a => String(a.id) === String(id));
            if (index !== -1) setActive(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    topFour.forEach((animal) => {
      const el = document.getElementById(String(animal.id));
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [topFour]);

  return (
    <div className="flex justify-center gap-2 py-2 absolute bottom-10 right-10">
      
      
      <div className="flex justify-center md:hidden mb-2">
        <Link href={`/animals/${topFour[active].id}`}>
          <button className='btn bg-[#c3923c] rounded-full px-10 text-white font-bold hover:bg-[#9d752f]'>
            See Details
          </button>
        </Link>
      </div>

     
      {topFour.map((animal, index) => (
        <a
          key={animal.id}
          href={`#${animal.id}`}
          onClick={() => setActive(index)}
          className={`btn btn-xs lg:btn-md rounded-full ${index === active ? 'bg-white text-[#c3923c]' : 'bg-[#c3923c] text-white'}`}
        >
          {index + 1}
        </a>
      ))}

    </div>
  );
};

export default FeaturedBtn;