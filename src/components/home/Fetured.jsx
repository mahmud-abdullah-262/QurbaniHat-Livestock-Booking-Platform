

import { getAnimals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

import FeaturedBtn from './FeaturedBtn';

const Featured = async () => {
  const animals = await getAnimals();
  const topFour = [...animals].sort((a, b) => b.price - a.price).slice(0, 4);
 
  console.log(topFour, 'topFour')

  return (
    <>
     <h1 className='text-3xl text-[#c3923c] font-bold mt-6 mb-2 text-center '>Featured Qurbani</h1>

<div className='relative w-11/12 mx-auto '>
   <div className="carousel my-10 h-96">

    {topFour.map(animal => {
      return (
         <div key={animal.id} id={animal.id} className="carousel-item w-full flex gap-4">
    <div className='flex-1'>
     <div className="card-body">
    <h2 className="card-title">
      {animal.name}
      <div className="badge badge-secondary">{animal.breed}</div>
    </h2>
    <p>{animal.description}</p>
    <div className="card-actions flex flex-col gap-2">
      <div className="badge badge-outline badge-wide">Price: {animal.price} bdt</div>
      <div className="badge badge-outline">Weight: {animal.weight} KG</div>
      <button className='btn bg-[#c3923c] rounded-full px-10 text-white font-bold hover:bg-[#9d752f]'><Link href={`/animals/${animal.id}`}>See Details</Link></button>
    </div>
  </div>
    </div>
    <Image
    src={animal.image?.[0]}
    width={500}
    height={500}
    alt={animal.name}
    className='w-[50%] object-center object-cover'
    ></Image>
  </div> 

      )
    })}

 
 
</div>
<FeaturedBtn topFour={topFour}></FeaturedBtn>
</div>
   
    </>
  );
};

export default Featured;