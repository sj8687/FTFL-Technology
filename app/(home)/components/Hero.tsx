"use client"
import { Main_heading } from "@/app/fonts/config";
import { useMediaQuery } from "@/app/Hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  const clientImages = [
    {
      client:"/angelone-fd.webp"
    },
    {
      client:"/bitwise-fd.webp"
    },
    {
      client:"/citiustech-fd.webp"
    },
    {
      client:"/clear-fd.webp"
    },
    {
      client:"/jktech-fd.webp"
    },
    {
      client:"/lead-fd.webp"
    },
    {
      client:"/swiggy-fd.webp"
    },
    {
      client:"/tata-fd.webp"
    }
  ]

    const isDesktop = useMediaQuery("(min-width: 768px)");

  const items = isDesktop
    ? [...clientImages, ...clientImages, ...clientImages, ...clientImages,...clientImages]
    : [...clientImages, ...clientImages];
  
  return (
    <section className="max-w-[1440px] mx-auto px-2 border border-white">
      <div className="h-dvh border border-white mt-[80px] ">

        <div className="border border-red-500 flex flex-col justify-center items-center pt-[90px]">
            <h1 className={`${Main_heading.className} text-7xl`}>Hire <span className="transition-hover duration-300 hover:text-blue-500">Faster</span> with an AI first ATS</h1>
            <p className={`text-lg mt-6`}>World’s first Applicant Tracking System where Autonomous AI Agents handle screening, scheduling, and beyond.</p>

            <div className=" flex gap-5 mt-8">
                <Button className="p-6 text-[18px] bg-blue-600 hover:bg-blue-500 text-white custome-text-shadow">See It In Action</Button>
                <Button className="p-6 text-[18px] hover:dark:bg-white">Talk To Sales</Button>
            </div>
            
            <p className={`mt-[80px] text-2xl our-clients font-bold`}>Our Clients</p>
              
            <div className="border border-white w-full h-[60px] mt-9 overflow-hidden">
                <div className={`flex gap-9 overflow-x-hidden ${isDesktop ? "animate-infinite-scroll2" : "animate-infinite-scroll"}`}>
                  {
                    items.map((curClient,index)=>{
                      return (
                        <Image
                        key={index}
                          src={curClient.client}
                          width={100}
                          height={100}
                          alt="clients images"
                          
                        />
                      )
                    })
                  }
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
