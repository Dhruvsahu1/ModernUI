"use client"
import React from "react";
import Navbar from "./../components/navbar/Navbar";
import Hero from "@/components/landingPage/Hero";
import CardCarousel from "@/components/homeCards/CardCarousel";
import Templatecard from "@/components/homeCards/Templatecard";
import BadgeCar from "@/components/homeCards/BadgeCar";
import SpecialCards from "@/components/homeCards/SpecialCards";
import AiInputCard from "@/components/homeCards/AiInputCard";
import ThemeChange from "@/components/homeCards/ThemeChange";
import {Maxcard} from "@/components/homeCards/Maxcard";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero />
      <CardCarousel />
      <Templatecard />
      <BadgeCar />
      <SpecialCards />
      <Maxcard/>
      <AiInputCard />
      
      <ThemeChange />
    </div>
  );
};

export default page;
