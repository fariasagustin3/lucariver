import React from 'react';
import Navbar from '../components/Navbar';
import { raleway, roboto } from '../fonts';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div className=''>

      {/* navbar */}
      <Navbar />

      {/* contact */}
      <div className='flex flex-col justify-center px-5 mt-20 sm:flex-row sm:gap-10 sm:px-20'>
        <div className='flex gap-2 flex-col items-start sm:flex-1'>
          <h1 className={`${raleway.className} font-normal text-2xl`}>Kontakt</h1>
          <p className={`${roboto.className} text-lg font-semibold`}>Andreas Zimmermann</p>
          <p>Systemische Beratung & Therapie</p>
          <p className={`${roboto.className} font-semibold`}>Tel <span className='font-light sm:text-xl'>0159 015 00 311</span></p>
          <p className={`${roboto.className} font-semibold`}>Mail <span className='font-light sm:text-xl'>a-z@mailbox.org</span></p>
          <p className={`${roboto.className} font-semibold`}>Praxisraum <span className='font-light sm:text-xl'>Sparrstr. 19 in 13353 Berlin Wedding (Nähe  S+U Wedding und U Leopoldplatz)</span></p>
        </div>

        <div className='flex gap-2 flex-col items-start my-10 sm:flex-1 sm:my-0'>
          <h1 className={`${raleway.className} font-normal text-2xl`}>Preise</h1>
          <p className={`${roboto.className} font-semibold`}>Erstgespräch</p>
          <p className={`${roboto.className} font-light sm:text-xl`}>90 Minuten 120€</p>
          <p className={`${roboto.className} font-semibold`}>Einzelberatung</p>
          <p className={`${roboto.className} font-light sm:text-xl`}>60 Minuten: 120€</p>
          <p className={`${roboto.className} font-semibold`}>Paar- & Familientherapie</p>
          <p className={`${roboto.className} font-light sm:text-xl`}>90 Minuten: 200€</p>

          <h1 className={`${raleway.className} font-normal text-2xl`}>Vorteile für Selbstzahler*innen</h1>
          <p className={`${roboto.className} font-light sm:text-xl`}>Meine Angebote werden nicht von der Krankenkasse übernommen, sondern privat finanziert.</p>
          <p className={`${roboto.className} font-light sm:text-xl`}>Die Vorteile sind dabei für Sie:</p>
          <li className={`${roboto.className} font-light sm:text-xl ml-5`}>Sie haben keine langen Wartezeiten und können zeitnah mit Therapie oder Beratung beginnen.</li>
          <li className={`${roboto.className} font-light sm:text-xl ml-5`}>Die Anzahl und die Häufigkeit der Sitzungen können Sie individuell mit mir vereinbaren.</li>
          <li className={`${roboto.className} font-light sm:text-xl ml-5`}>Sie können je nach Bedarf alleine, zu zweit oder mit weiteren Bezugspersonen auch in wechselnden Zusammensetzungen kommen.</li>
          <li className={`${roboto.className} font-light sm:text-xl ml-5`}>
            Es werden keine Daten an die Krankenkassen oder an andere Stellen weitergegeben. 
            Das bedeutet eine hohe Diskretion für Sie (leider können Ihnen dagegen nach einer
            kassenfinanzierten Psychotherapie beispielsweise Nachteile entstehen wenn Sie eine 
            Berufsunfähigkeits-, Krankentagegeld-, eine (Risiko-)Lebensversicherung abschließen 
            wollen oder eine Verbeamtung anstreben).
          </li>
        </div>
      </div>

      {/* footer */}
      <Footer />

    </div>
  );
}

export default Page;