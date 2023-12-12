"use client"
import React, { useEffect, useState } from 'react';
import { roboto } from '../fonts';

const slides = [
  {
    id: 1,
    text: "Die Veränderung steht vor der Tür - lassen wir sie zu?!",
  },
  {
    id: 2,
    text: "Verstehen kann man das Leben oft nur rückwärts, doch leben muss man es vorwärts",
    desc: "(Sören Kierkegaard)"
  },
  {
    id: 3,
    text: "Jedes Ding hat drei Seiten. Eine, die Du siehst, eine, die ich sehe, und eine, die wir beide nicht sehen.",
  },
]

const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex < slides.length ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(1)
    }, 3000);

    return () => clearInterval(interval)
  }, [currentIndex, slides.length])

  return (
    <section className='bg-[#6D6D6D] flex flex-row items-center justify-center overflow-x-hidden py-32 mt-10'>
      {slides.map((slide) => slide.id === currentIndex && (
        <div className='flex flex-col items-center justify-center transition duration-1000 fade-enter-active' key={slide.id}>
          <p className='text-white text-3xl w-2/3 text-center'>{slide?.text}</p>
          <p className='text-white text-3xl w-2/3 text-center'>{slide?.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default SliderSection;
