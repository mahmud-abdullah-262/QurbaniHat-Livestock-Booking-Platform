import AnimalsPage from '@/components/animal/AnimalsPage';
import Navbar from '@/components/shered/Navbar';
import React from 'react';

 

const AnimalPage = async () => {
 
  return (
    <>
    <Navbar variant="dark"></Navbar>
    <div className='mx-auto w-11/12'>
      <h1 className='text-3xl text-[#c3923c] font-bold my-10 text-center '>Get Your Favorite Qurbani</h1>

      <div>
        <AnimalsPage></AnimalsPage>
      </div>
    </div>
    </>
    
  );
};

export default AnimalPage;