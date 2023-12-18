"use client"
import React, { useState } from 'react';
import CookieRichtlinie from './CookieRichtlinie';
import { raleway, roboto } from '../fonts';
import Link from 'next/link';
import ToggleSwitch from './ToggleSwitch';

const Modal = ({ open, setOpen }) => {
  return (
    <div className='sticky bottom-0 bg-white px-5 py-5 sm:bottom-[30px] sm:top-0 sm:right-0 sm:left-[100%] sm:mr-6 sm:m-auto sm:w-1/4 rounded-md'>
      <h1 className={`${raleway.className} text-lg `}>Cookie-Richtlinie</h1>
      <p className={`${roboto.className} text-sm text-[#8D8E8F] font-light leading-5`}>
        Cookies werden zur Benutzerführung und Webanalyse verwendet und helfen dabei,
        diese Website besser zu machen. Wenn du diese Seite weiter benutzt, gehen wir
        davon aus, dass du mit unseren Datenschutzbestimmungen einverstanden bist:
      </p>
      <div className='flex flex-row items-center gap-5 mt-5 underline decoration-[#8D8E8F]'>
        <Link href="/impressum" className=''>
          <span className='text-[#8D8E8F] text-xs'>Impressum</span>
        </Link>
        <Link href="/datenschutz">
          <span className='text-[#8D8E8F] text-xs'>Datenschutz</span>
        </Link>
      </div>
      <div className='flex flex-col items-start gap-5 mt-5'> 
        <ToggleSwitch label="Unbedingt erforderlich" selected={true} link="cloudflare" />
        <ToggleSwitch label="Performance" selected={false} link="google-analytics" />
      </div>
      <div className='flex flex-col gap-3 mt-6'>
        <button onClick={() => setOpen(false)} className='text-sm w-full bg-black text-white py-3 sm:py-5'>Alle akzeptieren</button>
        <button onClick={() => setOpen(false)} className='text-sm w-full bg-black text-white py-3 sm:py-5'>Alle ablehnen</button>
        <button onClick={() => setOpen(false)} className='text-sm w-full bg-transparent border-[1px] border-black text-black py-3 sm:py-5'>Nur Auswahl akzeptieren</button>
      </div>
    </div>
  );
}

export default Modal;
