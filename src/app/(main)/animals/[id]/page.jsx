
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
  <figure className='flex-1'>
      <Image
        src={expectedAnimal.image?.[0]}
        width={300}
        height={300}
        alt='qurbani'
        className='w-full h-full object-cover object-right rounded-xl'
        >
        </Image>
  </figure>
  <div className="card-body flex-1 space-y-4">
    <h2 className="card-title">
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
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <legend className="fieldset-legend">Book This Qurbani</legend>

  <label className="label">Name</label>
  <input type="text" className="input w-full" placeholder="Your Name" />

  <label className="label">Email</label>
  <input type="email" className="input w-full" placeholder="Email" />

    <label className="label">Address</label>
  <input type="text" className="input w-full" placeholder="Your Address" />

 

  <button className="btn btn-neutral mt-4">Book Now</button>
</fieldset>
    </div>
  </div>
</div>
    </>
    
  );
};

export default AnimalDetailsPage;