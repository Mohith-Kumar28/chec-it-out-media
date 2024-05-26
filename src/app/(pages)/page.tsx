// import { ModeToggle } from "@/components/ui/mode-toggle";

import { About } from "@/components/about";
import Brands from "@/components/brands";
import TrippyHero from "@/components/hero";
import { WhatWeOffer } from "@/components/what-we-offer";
import Works from "@/components/works";

export default function Home() {
  return (
    <>
      {/* <ModeToggle /> */}
      <TrippyHero />
      <Brands />
      <WhatWeOffer />
      <Works />
      <About />
    </>
  );
}
