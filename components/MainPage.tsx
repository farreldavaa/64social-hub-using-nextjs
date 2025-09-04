"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import LandingPageImage from "../public/assets/LandingPage.png";
import ArrowImage from "../public/assets/arrow2.png"; 
import { IoIosArrowDroprightCircle } from "react-icons/io";  



const MainPage = () => {

  const [objectPos, setObjectPos] = useState("center 85%");

  useEffect(() => {
    const handleResize = () => {
      setObjectPos(window.innerWidth < 640 ? "center 70%" : "center 100%");
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative text-center">
      <div className="w-full overflow-hidden">
        <Image className="w-full h-screen object-cover"
          src={LandingPageImage}
          alt="Mainpage Pic"
          style={{ objectFit: "cover", objectPosition: objectPos }} />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#f9f9f9]"></div>
      </div>
      <div className="w-full absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* <img src="../images/animated_logo_rainbow_matte.gif" alt="Logo" className="mx-auto w-24 h-24" /> */}
        <div className="text-4xl flex flex-col items-center">
          welcome to
        </div>
        <div className="text-5xl mt-[-5px] font-montserrat font-bold">
          64 SOCIAL HUB
        </div>
        <p className="text-xl">
          a world-wide community where diecast culture meets creativity
        </p>
        <p className="text-xl mt-[-7px]">
          | collect. connect. only at the Hub. |
        </p>
        <div className="pt-10">
            
          <Link href="/register">
            <button type="button" className="text-white bg-[#050708] hover:text-white hover:bg-[#050708]/30
                focus:outline-none
                font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 border-transparent">
              get your HubID here
              <IoIosArrowDroprightCircle className="w-4 h-4 ml-2 text-red-500" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage