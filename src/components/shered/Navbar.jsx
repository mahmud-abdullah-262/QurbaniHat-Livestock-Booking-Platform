'use client'
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/qurbani.png'
import Image from 'next/image';
import { Button, Dropdown, Label, Spinner } from '@heroui/react';
import NavLink from './Navlink';
import {BarsUnaligned} from '@gravity-ui/icons';
const Navbar =  () =>  {

  
  // const { data: session, isPending } =  authClient.useSession();
  // const user = session?.user;
  // console.log(user, 'user')
  return (
    <>
     <div className='flex justify-between items-center w-11/12 mx-auto mt-16 rounded-full p-4 glass sticky top-10 z-50'>
   <div className='flex gap-2 items-center'>
     


    <Image
    src={logo}
    width={300}
    height={300}
    alt='qurbani'
    className='w-10 h-10'
    >
    </Image>
    <h1 className='font-black text-sm md:text-2xl text-[#c3923c]'>QurbaniHat</h1>
   </div>
   <div>
     <ul className=' gap-4 hidden md:flex'>
    <li><NavLink href={'/'}>Home</NavLink></li>
    <li><NavLink href={'/animals'}>Animals</NavLink></li>
    
   </ul>
   </div>
  
 <div className='flex gap-0.5'>
  <Button
    className='
      bg-[#c3923c] font-bold 
      text-[10px] px-2 py-1 
      sm:text-sm sm:px-3 sm:py-1.5 
      rounded-r-sm
    '
  >
    Login
  </Button>

  <Button
    className='
      bg-[#c3923c] font-bold 
      text-[10px] px-2 py-1 
      sm:text-sm sm:px-3 sm:py-1.5 
      rounded-l-sm
    '
  >
    Signup
  </Button>
</div>
{/* {isPending ? 
  (<div className="flex items-center gap-4">
      <Spinner />
    </div>)
: user ? (<div className='flex gap-4 items-center'>
   <Image
  src={user?.image || userAvatar}
  width={300}
  height={300}
  alt="user avatar"
  className="w-10 h-10 rounded-full object-cover"
/>
    <p>Welcome {user?.name}!</p>
    
    <Button onClick={async() => await authClient.signOut()}><Link href={'/login'}>logout</Link></Button>
    
   </div>)

:<Button><Link href={'/login'}>Login</Link></Button>} */}
   
    </div>

 <div className='flex items-center justify-center w-11/12 mx-auto mt-2 rounded-full p-4 glass sticky top-0 z-50 md:hidden'>
  <ul className='flex gap-4 items-center'>
    <li><NavLink href={'/'}>Home</NavLink></li>
    <li><NavLink href={'/animals'}>Animals</NavLink></li>
  </ul>
</div>
    </>
   
  );
};

export default Navbar;