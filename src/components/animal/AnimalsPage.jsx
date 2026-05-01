'use client'

import { getAnimals } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

 

const AnimalsPage = ({animals, LowToHigh, highToLow})  => {
  
  const [filteredAnimal, setFilteredAnimal] = useState(animals)
  const [sortLabel, setSortLabel] = useState('All')
  const closeDropdown = () => {
  document.getElementById("popover-1").hidePopover();
};
  return (
    <>
    <div className='mx-auto w-11/12 flex justify-center my-10'>
<button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  Sort: {sortLabel} 
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  
  <li><a
  onClick={() => {setFilteredAnimal(animals); setSortLabel('All'); closeDropdown()}}
  >all</a></li>
  <li><a
  onClick={() => {setFilteredAnimal(LowToHigh); setSortLabel('Low to High'); closeDropdown()}}
  >Low to High</a></li>
  <li><a
 onClick={() => {setFilteredAnimal(highToLow); setSortLabel('High to Low'); closeDropdown()}}
  >High to Low</a></li>
</ul>
    </div>
  

    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 shadow w-11/12 mx-auto'>
      {

        filteredAnimal.map(animal => {
          console.log(animal);
          return(
              <div key={animal.id} className="card bg-base-100 shadow-sm">
  <figure>
      <Image
        src={animal.image?.[0]}
        width={300}
        height={300}
        alt='qurbani'
        className='w-full h-full rounded-xl'
        >
        </Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {animal.name}
      <div className="badge badge-secondary">{animal.breed}</div>
    </h2>
    <p className='line-clamp-6'>{animal.description}</p>
    <div className="card-actions flex flex-col gap-2">
      <div className="badge badge-outline badge-wide">Price: {animal.price} bdt</div>
      <div className="badge badge-outline">Weight: {animal.weight} KG</div>
      <button className='btn btn-active'><Link href={`/animals/${animal.id}`}>See Details</Link></button>
    </div>
  </div>
</div>
          )

        }  )
      }

     
    </div>
    </>
    
  );
};

export default AnimalsPage;