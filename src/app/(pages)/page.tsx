// import { ModeToggle } from "@/components/ui/mode-toggle";

import { About } from "@/components/about";
import Brands from "@/components/brands";
import TrippyHero from "@/components/hero";
import { WhatWeOffer } from "@/components/what-we-offer";

export default function Home() {
  return (
    <>
      {/* <ModeToggle /> */}
      <TrippyHero />
      <Brands />
      <About />
      <WhatWeOffer />
    </>
  );
}
