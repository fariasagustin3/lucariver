import React from 'react';
import { raleway, roboto } from '../fonts';

const TestimonialSection = () => {
  return (
    <section className='px-5'>
        <h1 className={`${raleway.className} font-light`}>Stimmen nach Therapie und Beratung</h1>
      <div className='sm:flex sm:flex-row sm:gap-10'>
        <div className='flex flex-col sm:w-1/2 h-full gap-10'>
          <div className={`${roboto.className} text-lg font-light`}>
            <p>
              "Herr Zimmermann hat es durch seine wertschätzende und empathische Art geschafft,
              das Verständnis zwischen mir und meinem Partner auf eine neue Ebene zu lenken.
              Er konnte Knoten lösen, die im verborgenen Lagen und auch in emotionalen Momenten
              hilfreiche Impulse setzen und Situationen halten. Ich danke ihm von Herzen für
              die wertvollen Sitzungen und gehe gestärkt in einen neuen Lebensabschnitt."
            </p>
            <p>Fabienne Sponheimer 21.11.2022</p>
          </div>
          <div className={`${roboto.className} text-lg font-light`}>
            <p>
              "Herr Zimmermann hat uns wunderbar und intensiv über viele Monate im Rahmen einer
              Paartherapie begleitet. Ich hatte von Anfang an das Gefühl einen sicheren und unparteiischen
              Raum gefunden zu haben, in dem ich mich öffnen kann und in dem ich ebenso berücksichtigt
              werde als auch vorankomme. Unsere Probleme und unsere Beziehungsdynamik, wurden punktgenau
              und fachlich kompetent herausgearbeitet. Gleichzeitig hatte ich immer das Gefühl,
              dass wir und unser Erfolg Herrn Zimmermann ehrlich am Herzen liegen. Ich werde ihn
              jederzeit und uneingeschränkt weiterempfehlen."
            </p>
            <p>Lars am 18.11.2022</p>
          </div>
          <div className={`${roboto.className} text-lg font-light`}>
            <p>
              "Die Gespräche mit Herrn Zimmermann haben mir sehr geholfen, Züge meiner Persönlichkeit
              und meines Charakters besser zu verstehen und annehmen zu können. Dank der Gespräche mit
              Herrn Zimmermann ist mir klarer geworden, warum ich mich in bestimmten Lebenssituationen
              (v.a. in Bezug auf die Suche nach und Leben in einer Partnerschaft) so fühle, wie ich
              mich fühle - und was mir helfen kann, mit diesen Emotionen umzugehen."
            </p>
            <p>Jakob am 10.10.2021</p>
          </div>
          <div className={`${roboto.className} text-lg sm:hidden font-light`}>
            <p>
              "Gleich bei der ersten Therapiesitzung haben wir uns sofort wohlgefühlt. Herr Zimmermann
              besitzt eine große Empathie. Bei den oftmals doch sehr emotionalen Gesprächen, agierte
              Herr Zimmermann zielführend und zukunftsorientiert. Es ist ihm gelungen, eine Gesprächsatmosphäre
              herzustellen, die es uns ermöglicht hat, wieder aufeinander zuzugehen. Wir sehen zuversichtlich
              in die Zukunft, danken Herrn Zimmermann herzlich und können ihn sehr empfehlen."
            </p>
            <p>B.R. am 10.03.2022</p>
          </div>
        </div>
        <div className={`${roboto.className} text-lg hidden sm:flex sm:flex-col sm:w-1/2`}>
          <p>
            "Gleich bei der ersten Therapiesitzung haben wir uns sofort wohlgefühlt. Herr Zimmermann
            besitzt eine große Empathie. Bei den oftmals doch sehr emotionalen Gesprächen, agierte
            Herr Zimmermann zielführend und zukunftsorientiert. Es ist ihm gelungen, eine Gesprächsatmosphäre
            herzustellen, die es uns ermöglicht hat, wieder aufeinander zuzugehen. Wir sehen zuversichtlich
            in die Zukunft, danken Herrn Zimmermann herzlich und können ihn sehr empfehlen."
          </p>
          <p>B.R. am 10.03.2022</p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
