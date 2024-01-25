"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BACKGROUND = () => {
  const container = useRef(null);
  const lineOne = useRef(null);
  const lineTwo = useRef(null);
  const lineThree = useRef(null);
  const lineFour = useRef(null);
  const lineFive = useRef(null);
  const lineSix = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "+=300px",
        end: "+=1000px",
        // markers: true,
      },
    });
    timeline
      .fromTo(
        lineOne.current,
        { marginTop: "-20px" },
        { marginTop: "-800px" },
        "-=100%"
      )
      .fromTo(
        lineTwo.current,
        { marginTop: "-700px" },
        { marginTop: "-50px" },
        "-=100%"
      )
      .fromTo(
        lineThree.current,
        { marginTop: "-50px" },
        { marginTop: "-750px" },
        "-=100%"
      )
      .fromTo(
        lineFour.current,
        { marginTop: "-850px" },
        { marginTop: "-10px" },
        "-=100%"
      )
      .fromTo(
        lineFive.current,
        { marginTop: "-10px" },
        { marginTop: "-590px" },
        "-=100%"
      )
      .fromTo(
        lineSix.current,
        { marginTop: "-900px" },
        { marginTop: "-40px" },
        "-=100%"
      );
  }, []);

  return (
    <>
      <div
        ref={container}
        className="-z-50 flex   h-[150vh] w-full justify-evenly overflow-hidden"
      >
        <div ref={lineOne} className=" px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701469/bgOne_wcntnf.png"
            alt="bgOne"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px]"
          />
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701469/bgOne_wcntnf.png"
            alt="bgOne"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px] mt-5"
          />
        </div>
        <div ref={lineTwo} className="px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701468/bgTwo_qqzkwu.png"
            alt="bgTwo"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px]"
          />
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701468/bgTwo_qqzkwu.png"
            alt="bgTwo"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px] mt-5"
          />
        </div>
        <div ref={lineThree} className=" px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701469/bgThree_olznef.png"
            alt="bgThree"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px]"
          />
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701469/bgThree_olznef.png"
            alt="bgThree"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px] mt-5"
          />
        </div>
        <div ref={lineFour} className="px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701468/bgFour_o1q8ij.png"
            alt="bgFour"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px]"
          />
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701468/bgFour_o1q8ij.png"
            alt="bgFour"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px] mt-5"
          />
        </div>
        <div ref={lineFive} className="px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701469/bgFive_stewrt.png"
            alt="bgFive"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px]"
          />
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701469/bgFive_stewrt.png"
            alt="bgFive"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px] mt-5"
          />
        </div>
        <div ref={lineSix} className="px-[10px]">
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701468/bgSix_ds97oi.png"
            alt="bgSix"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px]"
          />
          <Image
            src="https://res.cloudinary.com/denl2iizs/image/upload/v1704701468/bgSix_ds97oi.png"
            alt="bgSix"
            width={250}
            height={200}
            className=" min-w-[140px] sm:min-w-[180px] lg:min-w-[250px]"
          />
        </div>
      </div>
    </>
  );
};

export default BACKGROUND;
