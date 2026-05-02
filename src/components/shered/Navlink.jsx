"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className}) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  return <Link href={href} className={`bg-transparent rounded-full py-2 px-4 font-bold text-xs md:text-sm ${isActive ? 'border-gray-200 border' : ''}`}>{children}</Link>;
};

export default NavLink;