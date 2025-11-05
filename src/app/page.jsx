"use client";
import React from "react";
import HeroCard from '@/components/HomeHeroComponents'
import OverViewsections from '@/components/OurServices'
import Section2 from '@/components/TestimonialSlider'
import ProcessSteps from '@/components/Invotive'
import { title } from "process";


export default function Home() {
  
  return (
    <>
<HeroCard/>

<OverViewsections/>
<Section2/>
<ProcessSteps/>
    </>
  );
}