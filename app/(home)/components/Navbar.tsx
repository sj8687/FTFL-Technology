"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiStripedSun } from "react-icons/gi";
import { HiBars3 } from "react-icons/hi2";

export const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setOpenMenu] = useState(false);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  function handelOpenMenu(){
    setOpenMenu((prev)=> !prev)
  }
  useGSAP(()=>{
    gsap.fromTo("#navbar",{y:"-50px",opacity:0},{y:0,duration:0.3,opacity:1})
  },[theme])
 
  return (
    <>
      <nav id="navbar" className="max-w-[1440px] mx-auto hidden lg:fixed left-0 right-0 top-0 z-50 backdrop-blur-md rounded-lg lg:flex justify-around py-2 overflow-hidden opacity-0">
        <div className="flex justify-center items-center overflow-hidden">
          <Image
            src= "/FFtl.png"
           
            alt="main logo"
            height={200}
            width={200}
            className="dark:bg-gray-200 p-1 rounded-md"
          />
        </div>

        <div className="flex justify-center text-[16px] mt-3 font-medium items-center">
          <ul className="flex gap-7 justify-center items-center">
            <li className="cursor-pointer hover:text-slate-500 hover:dark:text-blue-500">
              About
            </li>
            <li className="cursor-pointer hover:text-slate-500 hover:dark:text-blue-500">
              Services
            </li>
            <li className="cursor-pointer hover:text-slate-500 hover:dark:text-blue-500">
              Careers
            </li>
            <li className="cursor-pointer hover:text-slate-500 hover:dark:text-blue-500">
              Blogs
            </li>
            <li className="cursor-pointer hover:text-slate-500 hover:dark:text-blue-500">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div
            onClick={toggleDarkMode}
            className="flex justify-center items-center w-[30px] text-xl rounded-full"
          >
            {theme == "dark" ? (
              <GiStripedSun className="text-[rgb(247,164,70)]" />
            ) : (
              <BsFillMoonStarsFill />
            )}
          </div>
          <button className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Request Demo
            </span>
          </button>
        </div>
      </nav>
      {/* mobile navbar */}
      <nav className="fixed top-0 right-0 left-0 lg:hidden mx-auto overflow-hidden px-2 backdrop-blur-md rounded-lg">

        <div id="navbar" className="h-[50px] flex justify-between items-center opacity-0">
          <div className="flex justify-center items-center w-[45%] h-[90%] ">
            <Image
              src=
                   "/fftl.png"
              
              width={150}
              height={150}
              alt="main logo"
              style={{color:"blue"}}
                          className="dark:bg-gray-200 p-1 rounded-md"

            />
          </div>
          <div className="flex justify-center items-center gap-1 sm:gap-3 sm:pr-3">
            <div
              onClick={toggleDarkMode}
              className="flex justify-center items-center w-[30px] text-xl rounded-full"
            >
              {theme == "dark" ? (
                <GiStripedSun className="text-[rgb(247,164,70)]" />
              ) : (
                <BsFillMoonStarsFill />
              )}
            </div>
            <button className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-600 px-2 sm:px-3 py-1 text-[12px] sm:text-sm font-medium text-white backdrop-blur-3xl custome-text-shadow">
                Request Demo
              </span>
            </button>
            <HiBars3 onClick={handelOpenMenu} className="text-2xl sm:text-3xl" />
          </div>
        </div>
        
        <div className="absolute">
            mobile menu
        </div>
      </nav>
    </>
  );
};
