import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/logo.png';
import { raleway, roboto } from '../fonts';

const HeaderSection = () => {
  return (
    <section className=''>
      <div className='lg:hidden h-full w-screen px-5 py-10'>
        <div className='flex justify-center'>
          <Image
            src={Logo}
            alt=""
            className='h-40 w-56'
          />
        </div>
        <div className='mt-20'>
          <h1 className={`${raleway.className} text-[#323335] font-light text-[24px] lg:text-[36px]`}>{"Herzlich willkommen"}</h1>
          <div className='flex flex-col gap-5 text-lg'>
            <p className={`${roboto.className} text-[16px] lg:text-[18px] text-[#323335] font-light`}>
              {`Ich biete Paartherapie sowie Beratung für Einzelne und mehrere
              Personen in Orientierungsprozessen, Konfliktsituationen und Krisen.
              Meine Aufgabe sehe ich darin, Sie bei der Suche nach Lösungen zu
              begleiten. Dafür stelle ich Ihnen einen Rahmen zur Verfügung, in
              dem sich Ihr Möglichkeitsraum erweitern kann und Veränderung
              wahrscheinlich wird.`}
            </p>
            <p className={`${roboto.className} `}>
              {`Rufen Sie mich an oder schreiben Sie mir eine Mail für ein
              Erstgespräch zum kennenlernen. Ich freue mich auf unsere Zusammenarbeit.`}
            </p>
          </div>
        </div>
      </div>

      <div className='hidden lg:flex lg:items-center lg:justify-center lg:h-full lg:w-screen lg:px-20 lg:py-10'>
        <div className='flex flex-col flex-1 '>
          <h1 className={`${raleway.className} text-[#383335] font-light text-4xl`}>{"Herzlich willkommen"}</h1>
          <div className='flex flex-col gap-5 text-lg w-2/3'>
            <p className={`${roboto.className} font-light`}>
              {`Ich biete Paartherapie sowie Beratung für Einzelne und mehrere
              Personen in Orientierungsprozessen, Konfliktsituationen und Krisen.
              Meine Aufgabe sehe ich darin, Sie bei der Suche nach Lösungen zu
              begleiten. Dafür stelle ich Ihnen einen Rahmen zur Verfügung, in
              dem sich Ihr Möglichkeitsraum erweitern kann und Veränderung
              wahrscheinlich wird.`}
            </p>
            <p className={`${roboto.className} font-light`}>
              {`Rufen Sie mich an oder schreiben Sie mir eine Mail für ein
              Erstgespräch zum kennenlernen. Ich freue mich auf unsere Zusammenarbeit.`}
            </p>
          </div>
        </div>
        <div className='flex justify-center flex-1 items-center'>
          <Image
            src={Logo}
            alt=""
            className='h-60 w-80 '
          />
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
