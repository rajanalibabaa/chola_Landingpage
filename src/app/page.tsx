"use client";
import React from "react";
import HeroCard from '@/components/HomeHeroComponents'
import OverViewsections from '@/components/OurServices'
import Section2 from '@/components/TestimonialSlider'
export default function Home() {
  
  return (
    <>
<HeroCard/>

<OverViewsections/>
<Section2/>

    </>
  );
}