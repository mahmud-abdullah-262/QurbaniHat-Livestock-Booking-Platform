
import BookingForm from '@/components/animal/BookingForm';
import Navbar from '@/components/shered/Navbar';
import { getAnimals } from '@/lib/data';
import Image from 'next/image';

import React from 'react';

const AnimalDetailsPage = async ({params}) => {
  
  const {id} = await params;
  console.log(id, 'pathname');

  const animals = await getAnimals();
  const expectedAnimal = animals.find(animal => animal.id === id);
  console.log(expectedAnimal, 'expected Animal')
 
  return (
    <>
    <Navbar variant="dark"></Navbar>
    <div key={expectedAnimal.id} className="card bg-base-100 shadow-sm flex flex-col  lg:flex-row gap-4 w-11/12 mx-auto mt-10">
  <figure className='w-full h-full lg:w-100 lg:h-100'>
  <div className="carousel w-full">
    {expectedAnimal.image.map((i, ind) => (
      <div key={ind} id={`slide-${ind}`} className="carousel-item relative w-full">
        <Image
          src={i}
          width={300}
          height={300}
          alt='image'
          className="w-full object-cover rounded-2xl"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href={`#slide-${ind === 0 ? expectedAnimal.image.length - 1 : ind - 1}`} className="btn btn-circle text-white glass  btn-xs md:btn-sm">❮</a>
          <a href={`#slide-${ind === expectedAnimal.image.length - 1 ? 0 : ind + 1}`} className="btn btn-circle btn-xs md:btn-sm text-white glass">❯</a>
        </div>
      </div>
    ))}
  </div>
</figure>
  <div className="card-body flex-1 space-y-4">
    <h2 className="card-title font-bold text-3xl text-[#c3923c]">
      {expectedAnimal.name}
      <div className="badge badge-secondary">{expectedAnimal.breed}</div>
    </h2>
    <p>{expectedAnimal.description}</p>
    <div className="card-actions flex gap-2">
      <div className="btn btn-error h-7">Price: {expectedAnimal.price} bdt</div>
      <div className="badge badge-outline">Weight: {expectedAnimal.weight} KG</div>
      <div className="badge badge-outline">Type: {expectedAnimal.type}</div>
      <div className="badge badge-outline">Age: {expectedAnimal.age} Year</div>
      <div className="badge badge-outline">Location: {expectedAnimal.location}</div>
      <div className="badge badge-outline">Category: {expectedAnimal.category}</div>
      
    </div>

    <div>
      <BookingForm expectedAnimal={expectedAnimal}></BookingForm>
    
    </div>
  </div>
</div>
    </>
    
  );
};

export default AnimalDetailsPage;