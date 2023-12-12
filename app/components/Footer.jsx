import React from 'react';
import Logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center gap-20 pb-20'>
      <div className=''></div>
      <div className=''>
        <Image 
          src={Logo}
          alt=""
          className='w-40'
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-5'>
        <Link href="#">
          <span className='underline'>Impressum</span>
        </Link>
        <Link href="#">
          <span className='underline'>Datenschutz</span>
        </Link>
        <Link href="#">
          <span className='underline'>Cookie-Einstellungen</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
