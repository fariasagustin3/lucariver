import React from 'react';
import { raleway } from '../fonts';

const CookieRichtlinie = () => {
  return (
    <div className=''>
      <h1 className={`${raleway.className} text-lg`}>Cookie-Richtlinie</h1>
      <p className='h-30'>
        Cookies werden zur Benutzerführung und Webanalyse verwendet und helfen dabei, 
        diese Website besser zu machen. Wenn du diese Seite weiter benutzt, gehen wir 
        davon aus, dass du mit unseren Datenschutzbestimmungen einverstanden bist:
      </p>
    </div>
  );
}

export default CookieRichtlinie;
