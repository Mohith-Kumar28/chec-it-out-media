// import { ModeToggle } from "@/components/ui/mode-toggle";

import { ImageTrailHero } from "@/components/ImageTrailHero";
import About from "@/components/about";
import Brands from "@/components/brands";
import { Contact } from "@/components/contact";
import TrippyHero from "@/components/hero";
import { WhatWeOffer } from "@/components/what-we-offer";
import Works from "@/components/works";

export default function Home() {
  return (
    <>
      {/* <ModeToggle /> */}
      {/* <ImageTrailHero /> */}
      <TrippyHero />
      <Brands />
      <About />
      <WhatWeOffer />
      <Works />
      <Contact />
    </>
  );
}
