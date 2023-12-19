import React from 'react';
import ToggleSwitch from './ToggleSwitch';

const Toggles = () => {
  return (
    <div>
      
      <ToggleSwitch />
      <p>
        {`Cloudflare ist ein Dienst, der die Sicherheit und Geschwindigkeit von Webseiten erhöht.
        Cloudflare bietet ein Content Delivery Network ("CDN"), um die Ladezeiten der Website zu
        verbessern. Die Nutzung eines CDN ermöglicht es dem Nutzer, Inhalte mit Hilfe regional
        oder international verteilter Server zum schnelleren Abruf bereitzustellen. Anbieter:
        Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107 USA Cookie-Namen und Speicherdauer:
        __cfruid (Speicherdauer: Session), __cf_bm (Speicherdauer: 30 Minuten), __cf_clearance
        (Speicherdauer: 30 Minuten)`}
      </p>
      <p>{"Cookie-Richtlinie"}</p>
      <p>{"Datenschutzerklärung"}</p>
    </div>
  );
}

export default Toggles;
