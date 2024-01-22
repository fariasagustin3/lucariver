"use client";
import React, { useEffect, useState } from "react";
import { roboto } from "../fonts";
import ReactSimplyCarousel from "react-simply-carousel";

const slides = [
  {
    id: 1,
    text: "Die Veränderung steht vor der Tür - lassen wir sie zu?!",
  },
  {
    id: 2,
    text: "Verstehen kann man das Leben oft nur rückwärts, doch leben muss man es vorwärts",
    desc: "(Sören Kierkegaard)",
  },
  {
    id: 3,
    text: "Jedes Ding hat drei Seiten. Eine, die Du siehst, eine, die ich sehe, und eine, die wir beide nicht sehen.",
  },
];

const SliderSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if(activeSlideIndex === 0) {
      setTimeout(() => {
        setActiveSlideIndex(activeSlideIndex + 1);
      }, 3000);
    } else if(activeSlideIndex === 1) {
      setTimeout(() => {
        setActiveSlideIndex(activeSlideIndex + 1);
      }, 3000);
    } else if(activeSlideIndex === 2) {
      setTimeout(() => {
        setActiveSlideIndex(0);
      }, 3000);
    }
  }, [activeSlideIndex]);

  return (
    <section className="w-full relative">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        dotsNav={{
          show: true,
          containerProps: {
            position: "absolute",
            zIndex: 20,
            background: "red",
          },
        }}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            border: "none",
            color: "white",
            cursor: "pointer",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
            position: "absolute",
            zIndex: 10,
            right: 0,
            marginRight: 32,
            cursor: "pointer",
          },
          children: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hidden lg:flex lg:w-10 lg:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          ),
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            width: 30,
            position: "absolute",
            zIndex: 10,
            left: 0,
            marginLeft: 32,
          },
          children: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hidden lg:flex lg:w-10 lg:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          ),
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {slides.map((slide) => (
          <div className="w-screen h-[500px] bg-[#6D6D6D] flex flex-col items-center justify-center">
            <p className="text-2xl w-2/3 text-white lg:text-4xl lg:w-1/3 text-center">
              Die Veränderung steht vor der Tür - lassen wir sie zu?!
            </p>
            {slide.desc && (
              <p className="text-2xl lg:text-4xl w-1/2 text-white text-center">
                {slide.desc}
              </p>
            )}
          </div>
        ))}
      </ReactSimplyCarousel>
      <div className="absolute bottom-10 right-0 left-0">
        <div className="flex justify-center w-full gap-3">
          <div className={`w-3 h-3 rounded-full ${activeSlideIndex === 0 ? 'bg-white' : 'bg-[#8A8A8A]'} `} />
          <div className={`w-3 h-3 rounded-full ${activeSlideIndex === 1 ? 'bg-white' : 'bg-[#8A8A8A]'} `} />
          <div className={`w-3 h-3 rounded-full ${activeSlideIndex === 2 ? 'bg-white' : 'bg-[#8A8A8A]'} `} />
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
