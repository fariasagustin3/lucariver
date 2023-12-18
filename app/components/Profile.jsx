import React from 'react';
import { roboto } from '../fonts';
import { raleway } from '../fonts';
import Image from 'next/image';
import ProfilePic from '@/assets/profile-pic.webp'

const Profile = () => {
  return (
    <section className='bg-[#A0A0A0] w-screen h-full py-10'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <Image 
          src={ProfilePic}
          alt=''
          className='w-56 h-40'
        />
        <div className='flex flex-col sm:gap-3'>
          <p className={`${raleway.className} text-xl sm:text-4xl font-semibold text-white text-center`}>Andreas Zimmermann</p>
          <p className={`${raleway.className} text-xl sm:text-4xl font-normal text-white text-center`}>Systemische Beratung & Therapie</p>
          <p className={`${raleway.className} text-xl sm:text-4xl font-normal text-white text-center`}>13353 Berlin Wedding</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
