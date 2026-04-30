import { getAnimals } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

 

const AnimalsPage = async ()  => {
   const animals = await getAnimals()
  
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 shadow w-11/12 mx-auto'>
      {

        animals.map(animal => {
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
    <p>{animal.description}</p>
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
  );
};

export default AnimalsPage;