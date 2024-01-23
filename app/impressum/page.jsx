import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { roboto } from '../fonts';

const Page = () => {
  return (
    <div className='py-20 lg:py-0'>
      <Navbar />

      {/* content */}
      <div className={`${roboto.className} text-lg lg:text-2xl flex flex-col justify-start my-10 px-5 lg:py-20 lg:px-56 font-light text-[#323335]`}>
        <p className='text-[18px]'>{"Andreas Zimmermann"}</p>
        <p className='text-[18px]'>{"Systemische Beratung & Therapie"}</p>
        <p className='text-[18px]'>{"a-z@mailbox.org"}</p>
        <p className='text-[18px]'>{"0049 159 015 00 311"}</p>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
