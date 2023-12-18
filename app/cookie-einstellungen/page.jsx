import Link from 'next/link';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { raleway, roboto } from '../fonts';
import ToggleSwitch from '../components/ToggleSwitch';

const Page = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='flex flex-col px-10 sm:px-80 mt-14 pt-20 sm:py-32'>
        <div>
          <h1 className={`${raleway.className} text-lg sm:text-3xl font-light`}>Cookie-Richtlinie</h1>
          <p className={`${roboto.className} text-base sm:text-lg font-light`}>
            Cookies werden zur Benutzerführung und Webanalyse verwendet und helfen dabei,
            diese Website besser zu machen. Wenn du diese Seite weiter benutzt, gehen wir
            davon aus, dass du mit unseren Datenschutzbestimmungen einverstanden bist:
            Cookie Richtlinie
          </p>
        </div>

        <div className='my-5 flex flex-col w-full gap-5 sm:flex-row sm:justify-center'>
          <button className='bg-black border-none text-white py-5 sm:px-10 sm:flex-1'>Alle akzeptieren</button>
          <button className='bg-transparent border-[1px] border-gray text-black font-semibold py-5 sm:px-10 sm:flex-1'>Alle ablehnen</button>
        </div>

        <div className='flex flex-row items-start gap-5 underline my-5'>
          <Link href="/impressum">
            <span>Impressum</span>
          </Link>
          <Link href="/datenschutz">
            <span>Datenschutz</span>
          </Link>
        </div>

        <div className='flex flex-col items my-5 gap-5'>
          <div className='flex flex-row items-center gap-5'>
            <ToggleSwitch label="Unbedingt erforderlich" showArrow={false} />
          </div>
          <div className='flex flex-row items-center gap-5'>
            <ToggleSwitch label="Performance" showArrow={false} selected />
          </div>
        </div>

        <div className='mb-10'>
          <h1 className={`${raleway.className} text-lg sm:text-3xl font-light`}>Unbedingt erforderlich</h1>
          <p className={`${roboto.className} text-base sm:text-lg font-light`}>
            Unbedingt erforderliche Cookies ermöglichen grundlegende Funktionen und sind für die
            einwandfreie Funktion der Website erforderlich. Daher kann man sie nicht deaktivieren.
            Diese Art von Cookies wird ausschließlich von dem Betreiber der Website verwendet
            (First-Party-Cookie) und sämtliche Informationen, die in den Cookies gespeichert
            sind, werden nur an diese Website gesendet.
          </p>
        </div>

        <div className='bg-[#F9F9F9] px-5'>
          <div className='flex flex-row items-center gap-3 my-5' id="cloudflare">
            <ToggleSwitch label="Cloudflare" showArrow={false} selected />
          </div>
          <p className={`${roboto.className} text-base sm:text-lg font-extralight text-[#828384] ml-5 my-5 px-5`}>
            Cloudflare ist ein Dienst, der die Sicherheit und Geschwindigkeit von Webseiten erhöht.
            Cloudflare bietet ein Content Delivery Network ("CDN"), um die Ladezeiten der Website
            zu verbessern. Die Nutzung eines CDN ermöglicht es dem Nutzer, Inhalte mit Hilfe regional
            oder international verteilter Server zum schnelleren Abruf bereitzustellen. Anbieter:
            Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107 USA Cookie-Namen und Speicherdauer:
            __cfruid (Speicherdauer: Session), __cf_bm (Speicherdauer: 30 Minuten), __cf_clearance
            (Speicherdauer: 30 Minuten)
          </p>
          <div className='flex flex-row items-center my-5 gap-5 underline sm:flex-col sm:items-start sm:ml-10'>
            <Link href="https://www.cloudflare.com/de-de/cookie-policy/" target='_blank'>
              <span>Cookie-Richtlinie</span>
            </Link>
            <Link href="https://policies.google.com/privacy" target='_blank'>
              <span>Datenschutzerklärung</span>
            </Link>
          </div>
        </div>

        <div>
          <h1 className={`${raleway.className} text-lg sm:text-3xl font-light my-10`}>Funktionell</h1>
          <p className={`${roboto.className} text-base sm:text-lg font-light my-10`}>
            Funktionelle Cookies ermöglichen dieser Website, bestimmte Funktionen zur Verfügung zu
            stellen und Informationen zu speichern, die vom Nutzer eingegeben wurden – beispielsweise
            bereits registrierte Namen oder die Sprachauswahl. Damit werden verbesserte und
            personalisierte Funktionen gewährleistet.
          </p>
        </div>

        <div>
          <h1 className={`${raleway.className} text-lg sm:text-3xl font-light my-10`}>Marketing / Third Party</h1>
          <p className={`${roboto.className} text-base sm:text-lg font-light my-10`}>
            Marketing- / Third Party-Cookies stammen unter anderem von externen Werbeunternehmen
            und werden verwendet, um Informationen über die vom Nutzer besuchten Websites zu
            sammeln, um z. B. zielgruppenorientierte Werbung für den Benutzer zu erstellen.
          </p>
        </div>

        <div>
          <h1 className={`${raleway.className} text-lg sm:text-3xl font-light my-10`}>Performance</h1>
          <p className={`${roboto.className} text-base sm:text-lg font-light my-10`}>
            Die Performance-Cookies sammeln Informationen darüber, wie diese Website genutzt wird.
            Der Betreiber der Website nutzt diese Cookies um die Attraktivität, den Inhalt und die
            Funktionalität der Website zu verbessern.
          </p>
        </div>

        <div className='bg-[#F9F9F9] px-5'>
          <div className='flex flex-row items-center gap-3 my-5' id="google-analytics">
            <ToggleSwitch label="Google Analytics" showArrow={false} selected />
          </div>
          <p className={`${roboto.className} text-base sm:text-lg font-extralight text-[#828384] ml-5 my-5 px-5`}>
            Diese Cookies sammeln anonymisierte Informationen zu Analysezwecken – z. B. wie Besucher die
            Website nutzen und mit ihr interagieren. Anbieter: Google LLC, 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA oder Google Ireland Limited, Gordon House, Barrow Street,
            Dublin 4, Irland, wenn Sie in der EU ansässig sind. Cookie-Namen:_ga, _gat und_gid)
            Cookie-Lebensdauer: 2 Jahre
          </p>
          <div className='flex flex-row items-center gap-5 py-5 sm:flex-col sm:items-start underline sm:ml-10'>
            <Link href="https://policies.google.com/technologies/cookies">
              <span>Cookie-Richtlinie</span>
            </Link>
            <Link href="https://policies.google.com/privacy">
              <span>Datenschutzerklärung</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
