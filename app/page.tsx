import BACKGROUND from "@/clientComponents/background";
import React from "react";

const HOME = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <span className="font-bold">GSAP SCROLL TRIGGERED IMAGE GALLERY</span>
      </div>
      <BACKGROUND />
      <div className="w-full h-[50vh] flex justify-center items-center">
        <span className="font-bold">SCROLL DOWN</span>
      </div>
    </>
  );
};

export default HOME;
