"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import MagnetButton from "./ui/magnet-button";

export function Contact() {
  return (
    <div className="overflow-hidden">
      <HeroHighlight>
        <div className="md:flex-row flex flex-col gap-8   px-4">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="font-bold text-4xl   md:text-5xl px-4  text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-auto "
          >
            Some Contact section headline
            <br />
            <Highlight className="text-black dark:text-white">
              goes here
            </Highlight>
          </motion.h1>
          <MagnetButton />
        </div>
      </HeroHighlight>
    </div>
  );
}
