import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { roboto } from '../fonts';

const Page = () => {
  return (
    <div className='py-20 lg:py-0'>
      <Navbar />

      {/* content */}
      <div className={`${roboto.className} text-lg lg:text-2xl flex flex-col justify-start my-10 gap-7 px-5 lg:py-20 lg:px-32 font-light text-[#79797B]`}>
        <p>{"Andreas Zimmermann"}</p>
        <p>{"Systemische Beratung & Therapie"}</p>
        <p>{"a-z@mailbox.org"}</p>
        <p>{"0049 159 015 00 311"}</p>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
