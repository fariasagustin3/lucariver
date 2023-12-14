import React from 'react';
import CookieRichtlinie from './CookieRichtlinie';
import { raleway, roboto } from '../fonts';
import Link from 'next/link';

const Modal = ({ open, setOpen }) => {
  return (
    <div className='sticky bottom-0 bg-white px-5 py-5'>
      <h1 className={`${raleway.className} text-lg`}>Cookie-Richtlinie</h1>
      <p className={`${roboto.className} text-lg`}>
        Cookies werden zur Benutzerführung und Webanalyse verwendet und helfen dabei, 
        diese Website besser zu machen. Wenn du diese Seite weiter benutzt, gehen wir 
        davon aus, dass du mit unseren Datenschutzbestimmungen einverstanden bist:
      </p>
      <div className='flex flex-row items-center gap-5 mt-5 underline'>
        <Link href="/impressum">
          <span>Impressum</span>
        </Link>
        <Link href="/datenschutz">
          <span>Datenschutz</span>
        </Link>
      </div>
      <div className='flex flex-col gap-3 mt-6'>
        <button onClick={() => setOpen(false)} className='w-full bg-black text-white py-5'>Alle akzeptieren</button>
        <button onClick={() => setOpen(false)} className='w-full bg-black text-white py-5'>Alle ablehnen</button>
        <button onClick={() => setOpen(false)} className='w-full bg-transparent border-[1px] border-gray text-black py-5'>Nur Auswahl akzeptieren</button>
      </div>
    </div>
  );
}

export default Modal;
