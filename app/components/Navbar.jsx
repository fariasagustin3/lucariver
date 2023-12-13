import Link from 'next/link';
import React from 'react';
import { roboto } from '../fonts';

const Navbar = () => {
  return (
    <div className={`${roboto.className} w-screen h-20 py-5 sm:px-10 px-5 flex items-center justify-between gap-5 sm:justify-between bg-[#690C36] text-white text-lg`}>
      <div className='sm:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className='flex items-center gap-3 sm:gap-7 sm:font-light sm:text-base'>
        <Link href="/">
          <span className='hover:underline cursor-pointer'>Home</span>
        </Link>
        <Link href="/ueber-micht">
          <span className='hover:underline cursor-pointer'>Über micht</span>
        </Link>
        <Link href="#">
          <span className='hover:underline cursor-pointer'>Preise/Kontakt</span>
        </Link>
      </div>
      <div className='hidden sm:flex gap-5'>
        <span>Tel: 0159 015 00 311</span>
        <span>Mail: a-z@mailbox.org</span>
        <span>Sparrstr. 19 Berlin Wedding</span>
      </div>
    </div>
  );
}

export default Navbar;