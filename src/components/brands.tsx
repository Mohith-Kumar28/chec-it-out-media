"use client";
import { motion } from "framer-motion";
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
} from "react-icons/si";
import { IconType } from "react-icons";
import Image from "next/image";
const brandLogosPaths = Array.from(
  { length: 9 },
  (_, i) => `/brands/${String(i + 1).padStart(3, "0")}.png`
);
const Brands = () => {
  return (
    <section className=" py-24 overflow-hidden">
      <h2 className="mx-4 mb-12 text-center text-gray-600 text-4xl  md:text-5xl font-bold ">
        <span className="text-primary"> Brands </span> we&apos;ve worked with
      </h2>
      <div className="flex translate-y-[50%] rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-zinc-900 ">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex -translate-y-[50%] -rotate-[7deg] scale-110 overflow-hidden border-y-4 border-gray-200 bg-zinc-900">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ imagePath, name }: { imagePath: string; name: string }) => {
  return (
    <div className=" size-28 mx-8 flex justify-center align-middle ">
      <Image
        src={imagePath}
        alt={name}
        width={148} // Adjust these values based on your actual image dimensions
        height={148}
        className="object-contain" // Use object-fit utilities if needed
      />
    </div>
  );
};

const LogoItemsTop = () => (
  <>
    {brandLogosPaths.map((path, index) => (
      <LogoItem key={index} imagePath={path} name={`Logo ${index + 1}`} />
    ))}
  </>
);

const LogoItemsBottom = () => (
  <>
    {brandLogosPaths.map((path, index) => (
      <LogoItem key={index} imagePath={path} name={`Logo ${index + 1}`} />
    ))}
  </>
);

export default Brands;
