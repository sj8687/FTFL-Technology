"use client"
import { main_description, headd } from "@/app/fonts/config";
import { useMediaQuery } from "@/app/Hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  const clientImages = [
    {
      client: "/angelone-fd.webp"
    },
    {
      client: "/bitwise-fd.webp"
    },
    {
      client: "/citiustech-fd.webp"
    },
    {
      client: "/clear-fd.webp"
    },
    {
      client: "/jktech-fd.webp"
    },
    {
      client: "/lead-fd.webp"
    },
    {
      client: "/swiggy-fd.webp"
    },
    {
      client: "/tata-fd.webp"
    }
  ]
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const items = isDesktop
    ? [...clientImages, ...clientImages, ...clientImages, ...clientImages, ...clientImages]
    : [...clientImages, ...clientImages];

  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.fromTo("#hedd", { opacity: 0 }, { opacity: 1, duration: 0.4 })
    t1.fromTo("#main-heading", { opacity: 0 }, { opacity: 1, duration: 0.6 })
    t1.fromTo("#main-description", { opacity: 0 }, { opacity: 1, duration: 0.3 })
    t1.fromTo("#main-btn1", { opacity: 0 }, { opacity: 100, duration: 0.6, ease: "power2.in" }, "<")
    t1.fromTo("#main-btn2", { opacity: 0 }, { opacity: 100, duration: 0.6, ease: "power2.in" }, "<")
    t1.fromTo("#our-clients", { opacity: 0 }, { opacity: 100, duration: 0.6, ease: "power2.in" })
    t1.fromTo("#clients", { opacity: 0, scaleX: 0 }, { opacity: 100, duration: 1, scaleX: 1, transformOrigin: "center" })


  }, [])
  return (
    <section className="max-w-[1440px] mx-auto px-2 ">
      <div className="h-dvh mt-[170px]">
        <div className="flex justify-center  mb-0">
          <div id="hedd" className="bg-blue-200  border text-black mobo text--600 font-semibold rounded-full sm:px-5 px-3 py-2 shadow-[0_0_10px_rgba(400,700,900,80)] text-sm">
            💕 Solving 1000+ Problems!
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-[40px] ">
          <h1 id="main-heading" className={`${headd.className}  text-center text-3xl leading-tight sm:text-[50px] md:text-4xl lg:text-6xl opacity-0`}>Welcome <span className="transition-hover duration-300 hover:text-blue-500 px-">to</span> the Future of Technology Innovation, Insights, and Ideas..</h1>
          <p id="main-description" className={`${main_description.className} text-[12.4px] md:text-[15px] max-w-[80%] sm:max-w-[60%] md:max-w-[50%] font-mono  mt-6 text-center dark:text-blue-200 opacity-0`}>At FTFL Technology, we create cutting-edge tech solutions that drive progress and redefine possibilities. Let’s build the future together..</p>

          <div className=" flex gap-5 mt-8">
            <Button id="main-btn1" className="md:p-6 md:text-[18px] bg-blue-500 hover:bg-blue-600 shadow: text-white custome-text-shadow opacity-0">From Scratch to Success</Button>
          </div>

          <p id="our-clients" className={`mt-[55px] md:mt-[85px] text-xl md:text-2xl our-clients font-bold opacity-0`}>Our Clients</p>

          <div id="clients" className="w-full h-[60px] mt-9 overflow-hidden opacity-0">
            <div className={`flex gap-5 md:gap-9 overflow-x-hidden ${isDesktop ? "animate-infinite-scroll2" : "animate-infinite-scroll"}`}>
              {
                items.map((curClient, index) => {
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
