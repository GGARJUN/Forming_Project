import React from "react";
import { NavBar } from "../components/NavBar";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { AboutCard } from "./AboutCard";

export const AboutPage = () => {
  return (
    <>
      <NavBar />

      <div className="  my-5 rounded-xl relative   w-full">
        <img
          src="images/carousel-1.jpg "
          className=" rounded-lg  h-[450px] w-full"
        />

        <div className="absolute top-32 left-20 bg-slate-400 p-2 ">
          <h1 className="font-bold text-5xl text-center">About US</h1>
          <div className="p-5  flex gap-5 justify-center">
            <div className="bg-gray-200 px-10 py-3">Home </div>
            <div className="bg-gray-200 px-10 py-3">Home </div>
          </div>
        </div>
      </div>

      <About />
      <AboutCard/>
      <Footer />
      <ScrollToTop />
    </>
  );
};
