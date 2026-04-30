'use client'
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/qurbani.png';
import avatar from '@/assets/user.png'
import Image from 'next/image';
import { Button, Dropdown, Label, Spinner } from '@heroui/react';
import NavLink from './Navlink';
import {BarsUnaligned} from '@gravity-ui/icons';
import {Icon} from "@iconify/react";


const Navbar =  ({variant = "dark"}) =>  {

  const style = {
    light: {
      logo: 'text-white'
    },
    dark: {
      logo: 'text-[#c3923c]'
    }
  }
  
   const s = style[variant];
  // const { data: session, isPending } =  authClient.useSession();
  // const user = session?.user;
  // console.log(user, 'user')

  const isLoggedIn = false;
  return (
    <>
     <div className='flex justify-between items-center w-10/12 mx-auto mt-16 rounded-full p-2 glass sticky top-10 z-50 backdrop-blur-md'>
   <div className='flex gap-2 items-center'>
     


    <Image
    src={logo}
    width={300}
    height={300}
    alt='qurbani'
    className='w-10 h-10'
    >
    </Image>
    <h1 className={`font-black text-sm md:text-2xl ${s.logo} hidden md:block`}>QurbaniHat</h1>
   </div>
   <div>
     <ul className=' gap-4 hidden md:flex'>
    <li><NavLink href={'/'}>Home</NavLink></li>
    <li><NavLink href={'/animals'}>Animals</NavLink></li>
    
   </ul>
   </div>
  
 <div className='flex gap-0.5'>
  {isLoggedIn ? 
  <div className='flex gap-2 items-center'>
   <Button
    className='
      bg-[#c3923c] font-bold 
      text-[10px] px-2 py-1 
      sm:text-sm sm:px-3 sm:py-1.5 
      
    '
  >
    <Link href={'/login'}>Logout</Link>
  </Button>

  <Image
  src={avatar}
  width={100}
  height={100}
  alt='user'
  className='w-10 h-10 rounded-full'
  >

  </Image>
  </div>
 
  :
  <>
  

  <Button
    className='
      bg-[#c3923c] font-bold 
      text-[10px] px-2 py-1 
      sm:text-sm sm:px-3 sm:py-1.5 
      rounded-r-sm
    '
  >
    <Link href={'/Signup'}>Signup</Link>
   
  </Button>
   <Button
    className='
      bg-[#c3923c] font-bold 
      text-[10px] px-2 py-1 
      sm:text-sm sm:px-3 sm:py-1.5 
      rounded-sm
    '
  >
    <Link href={'/login'}>Login</Link>
   
  </Button>
   <Button
    className='
      bg-[#c3923c] font-bold 
      text-[10px] px-2 py-1 
      sm:text-sm sm:px-3 sm:py-1.5 
      rounded-l-sm
    '
  > 
    <Link href={'/login'}> <Icon icon="devicon:google" /></Link>
   
  </Button>
  </>
  }
  
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

 <div className='flex items-center justify-center w-10/12 mx-auto mt-2 rounded-full p-3 glass sticky top-28 z-50 md:hidden backdrop-blur-md'>
  <ul className='flex gap-4 items-center'>
    <li><NavLink href={'/'}>Home</NavLink></li>
    <li><NavLink href={'/animals'}>Animals</NavLink></li>
  </ul>
</div>
    </>
   
  );
};

export default Navbar;