"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ToggleSwitch = ({ label, selected, link, showArrow, isSelected }) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    selected === true ? setIsOn(true) : setIsOn(false);
    if(isSelected === false) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }, [isSelected])

  return (
    <div className='flex flex-row items-center gap-3'>
      <div className='flex flex-row items-center gap-3 w-60'>
        <button
          className={`${isOn ? "bg-[#959697]" : "bg-gray-300"
            } relative inline-flex items-center h-6 rounded-full w-11`}
          onClick={handleClick}
          disabled={selected === true}
        >
          <span
            className={`${isOn ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </button>
        <label className='text-[#8D8E8F] text-md'>{label}</label>
      </div>

      {showArrow && (
        <Link href={`/cookie-einstellungen/#${link}`} className='border-l-2 border-gray-500 pl-2'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </Link>
      )}
    </div>
  );
}

export default ToggleSwitch;
