import { getTopBreed } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import {MapPin} from '@gravity-ui/icons';

const TopBreeds = async () => {
  const topBreeds = await getTopBreed()
  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-3xl text-[#c3923c] font-bold my-10 text-center '>Top Breeds</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 shadow'>
        {topBreeds.map(breed => <div key={breed.id} className="card w-11/12 mx-auto lg:card-side bg-base-100 shadow-sm relative items-start">
  <figure className='lg:w-[60%] '>
    <Image 
    src={breed.image}
    width={300}
    height={300}
    alt={breed.name}
    className='w-full h-full object-cover object-center'
    />
  </figure>
  <div className="card-body flex flex-col gap-1 self-start items-start">
    <h2 className="card-title font-bold text-[#c3923c]">{breed.name}</h2>
    <div className="badge badge-warning absolute top-6 left-6">{breed.category}</div>
    <p className='flex gap-1 items-center'><MapPin></MapPin> {breed.region}</p>
    <ul>
      {breed.facts.map((f, ind) =>    <li key={ind}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-xs'>{f}</span>
      </li>)}
    </ul>
  </div>
</div>)}
      </div>
      
    </div>
  );
};

export default TopBreeds;