import React from 'react';
import Logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row lg:justify-between lg:px-20 lg:pt-20 lg:gap-0 justify-start items-start px-10 gap-20 pb-20'>
      <div className='flex flex-1'></div>
      <div className=''>
        <Image 
          src={Logo}
          alt=""
          className='w-40 flex flex-1'
        />
      </div>
      <div className='flex flex-col justify-start items-start gap-5 flex-1 lg:items-end text-[#79797B]'>
        <Link href="/impressum">
          <span className='underline'>{"Impressum"}</span>
        </Link>
        <Link href="/datenschutz">
          <span className='underline'>{"Datenschutz"}</span>
        </Link>
        <Link href="/cookie-einstellungen">
          <span className='underline'>{"Cookie-Einstellungen"}</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
