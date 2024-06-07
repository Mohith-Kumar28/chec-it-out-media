"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import MagnetButton from "./ui/magnet-button";
import Link from "next/link";

export function Contact() {
  return (
    <div id="contact" className="overflow-hidden">
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
            Connect us anytime through
            <br />
            <Highlight className="text-black dark:text-white">
              Whats App
            </Highlight>
          </motion.h1>
          <Link href="https://wa.me/+919611544337">
            <MagnetButton />
          </Link>
        </div>
      </HeroHighlight>
    </div>
  );
}
