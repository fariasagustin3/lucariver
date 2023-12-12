import Link from 'next/link';
import React from 'react';
import { roboto } from '../fonts';

const Navbar = () => {
  return (
    <div className='w-screen h-20 py-5 px-5 flex items-center bg-[#690C36]'>
      <ul className={`${roboto.className} flex flex-row items-center justify-center w-screen gap-7 text-lg text-white hover:underline`}>
        <Link href="#">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </li>
        </Link>
        <Link href="#">
          <li>Home</li>
        </Link>
        <Link href="#">
          <li>Über micht</li>
        </Link>
        <Link href="#">
          <li>Preise/Kontakt</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
