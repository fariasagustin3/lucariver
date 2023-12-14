import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import ProfilePicture from '@/assets/profile-pic-smile.webp';
import Landscape from '@/assets/landscape.webp';
import Logo from '@/assets/logo.png';
import { raleway, roboto } from '../fonts';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div className='w-screen h-full overflow-x-hidden'>
      <Navbar />
      <div className='sm:flex sm:flex-row sm:items-center sm:px-20'>

        <div className='sm:flex sm:flex-col sm:flex-1'>
          {/* photo */}
          <div className='flex justify-center items-center my-20'>
            <Image src={ProfilePicture} alt="profile picture" className='w-72 h-56' />
          </div>

          {/* about me */}
          <div className={`${roboto.className} flex flex-col justify-start px-5`}>
            <h1 className={`${raleway.className} text-lg font-light sm:text-2xl sm:font-semibold`}>Über micht</h1>
            <p className='font-light leading-7 sm:text-xl sm:font-light sm:text-[#323335]'>
              Seit 2017 begleite ich als Systemischer Therapeut Einzelpersonen,
              Paare und Familien. 2010 bin ich aus dem sonnigen Freiburg nach
              Berlin gekommen. Ich arbeite seit etwa zehn Jahren als
              Diplomsozialpädagoge mit unterschiedlichen Zielgruppen.
              Dabei berate ich Menschen in Krisensituationen und in entscheidenden
              Lebensphasen, Menschen mit und ohne Psychiatrieerfahrung,
              Menschen mit Sucht- und Abhängigkeitsproblemen und Angehörige.
            </p>
            <h1 className={`${raleway.className} text-lg font-light sm:text-2xl sm:font-semibold`}>Mein Ansatz</h1>
            <p className='font-light leading-7 sm:text-xl sm:font-light sm:text-[#323335]'>
              Mein Fokus ist auf das innere Befinden, zwischenmenschliche Beziehungen und deren Umfeld gerichtet beispielsweise bei Paaren, Familienmitgliedern, Freund*innen und Arbeitskolleg*innen.
              Lösungsorientierung bedeutet in meiner Praxis,  dass ich gemeinsam mit meinem Gegenüber schaue, was im Hier und Jetzt gebraucht wird und welche Schritte nötig sind um einem erfüllten und zufriedenen Leben näher zu kommen.
              Wichtig ist mir in meiner Arbeit, den gesellschaftlichen Kontext mit in den Blick zu nehmen. Dabei geht es mir auch um einen achtsamen Umgang mit Benachteiligung und Stigmatisierung.
              Im Sinne der Qualitätssicherung bilde ich mich regelmäßig fort.
            </p>
            <p className='font-light leading-7 mt-5 sm:text-xl sm:font-light sm:text-[#323335]'>
              Mit Paaren und Familien arbeite ich, wenn gewünscht, im Cotherapeutischen Team mit einer*einem Kolleg*in.
            </p>
          </div>
        </div>

        <div className='sm:flex sm:flex-col sm:flex-1'>

          {/* logo */}
          <div className='flex justify-center sm:items-start py-20 sm:-mt-48'>
            <Image src={Logo} alt="logo" className='w-60 h-40 sm:w-80 sm:h-full' />
          </div>

          {/* list items */}
          <div className={`${roboto.className} px-5`}>
            <h1 className={`${raleway.className} text-lg font-light sm:text-2xl sm:font-semibold`}>Berufserfahrung</h1>
            <li className='font-light leading-6 mt-5 ml-5 sm:text-xl sm:font-light sm:text-[#323335]'>
              seit 2018 selbständiger
              <a href="https://systemische-gesellschaft.de/weiterbildung/sg-zertifikat/therapie/" target='_blank'>
                Systemischer Berater & Therapeut (SG)
              </a>
            </li>
            <li className='font-light leading-6 mt-5 ml-5 sm:text-xl sm:font-light sm:text-[#323335]'>seit 2013 Sozialarbeiter & Berater in einer Psychosozialen Kontakt- und Beratungstelle in Berlin-Mitte</li>
            <li className='font-light leading-6 mt-5 ml-5 sm:text-xl sm:font-light sm:text-[#323335]'>2010 bis 2012 Sozialarbeiter im Betreuten Wohnen für Alkoholabhängige in Berlin-Kreuzberg</li>
            <h1 className={`${raleway.className} text-lg font-light sm:text-2xl sm:font-semibold`}>Ausbildung</h1>
            <li className='font-light leading-6 mt-5 ml-5 sm:text-xl sm:font-light sm:text-[#323335]'>
              2015 bis 2018 Weiterbildung Systemische Therapie am Berliner Institut für Familientherapie,
              Systemische Therapie, Supervision und Coaching, Beratung und Fortbildung
              <a href="https://bif-systemisch.de/" target='_blank'>
                (BIF e.V.)
              </a>
            </li>
            <li className='font-light leading-6 mt-5 ml-5 sm:text-xl sm:font-light sm:text-[#323335]'>2011 bis 2012 Weiterbildung Psychosoziale Beratung/Counseling an der
              <a href="https://www.ash-berlin.eu/weiterbildung/" target="_blank">
                Alice-Salomon-Hochschule Berlin
              </a>
            </li>
            <li className='font-light leading-6 mt-5 ml-5 sm:text-xl sm:font-light sm:text-[#323335]'>
              2005 bis 2010 Diplomstudium Soziale Arbeit an der Hochschule für Angewandte Wissenschaften in Kiel
              <a href="https://www.fh-kiel.de/startseite/" target="_blank">(FH Kiel)</a>
            </li>
          </div>
        </div>
      </div>

      {/* follow the way */}
      <div className='bg-[#A0A0A0] h-full pb-20 sm:pb-0 my-20 sm:flex'>
        <div className='h-[800px] sm:flex sm:flex-1'>
          <Image src={Landscape} alt="Landscape" className='w-full h-full object-cover object-center' />
        </div>
        <div className='px-5 py-5 sm:flex sm:flex-col sm:flex-1 sm:justify-center'>
          <h1 className={`${raleway.className} text-white text-xl text-left sm:w-1/2 sm:text-xl sm:font-semibold sm:ml-10`}>Sich auf den Weg machen</h1>
          <p className={`${roboto.className} text-white leading-7 font-light sm:w-3/4 sm:text-xl sm:ml-10`}>
            Gerne begleite ich Sie ein Stück auf Ihrem Weg zu Ihren Zielen. Gemeinsam finden wir die
            Orientierung wieder, wenn sie verloren gegangen ist. Dabei können wir innere und äußere
            Landschaften erkunden. Wir schlagen gemeinsam unbeachtete Wege ein und begehen neue Pfade.
            Ich bin achtsam für Ihren Rhytmus und nehme mir die Zeit, die Sie benötigen, um die
            entscheidenden Schritte zu gehen.
          </p>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Page;
