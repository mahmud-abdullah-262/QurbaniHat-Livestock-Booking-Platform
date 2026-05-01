import AnimalsPage from '@/components/animal/AnimalsPage';
import Navbar from '@/components/shered/Navbar';
import { getAnimals } from '@/lib/data';
import React from 'react';

 

const AnimalPage = async () => {
  const animals = await getAnimals()
   
   const LowToHigh = [...animals].sort((a, b) => a.price - b.price);
   const highToLow = [...animals].sort((a, b) => b.price - a.price);
  return (
    <>
    <Navbar variant="dark"></Navbar>
    <div className='mx-auto w-11/12'>
      <h1 className='text-3xl text-[#c3923c] font-bold my-10 text-center '>Get Your Favorite Qurbani</h1>

      <div>
        <AnimalsPage animals={animals} LowToHigh={LowToHigh} highToLow={highToLow} ></AnimalsPage>
      </div>
    </div>
    </>
    
  );
};

export default AnimalPage;