"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const About = () => {
  return (
    <>
      {/* <div className="flex h-48 flex-col items-center justify-center bg-slate-900">
        <span className="font-semibold uppercase text-white">Scroll down</span>
        <span className="mt-2 block rounded-full bg-primary px-4 py-1 text-center font-medium text-white md:hidden">
          Note: This is much cooler on desktop 😊
        </span>
      </div> */}
      <SwapColumnFeatures />
      {/* <div className="flex h-48 items-center justify-center bg-primary">
        <span className="font-semibold uppercase text-white">Scroll up</span>
      </div> */}
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <AboutFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* <span className="rounded-full bg-primary px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span> */}
          <p className="my-3 text-5xl font-bold text-primary">
            {featureInView.title}
          </p>
          <p className="text-slate-500 text-lg">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <AboutFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const AboutFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative h-[60vh] w-full rounded-xl  shadow-xl">
      {/* <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="p-2">
        <p className="font-mono text-sm text-slate-200">
          <span className="text-green-300">~</span> Show a part of your product
          that explains what{" "}
          <span className="inline-block rounded bg-primary px-1 font-semibold">
            {`${featureInView.title}"`}
          </span>{" "}
          means.
        </p>
      </div>

      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
        <featureInView.Icon />
      </span> */}

      {/* <img src={featureInView.imgUrl} alt="" /> */}
      <Image
        alt="about"
        layout="fit"
        objectFit="cover"
        src={featureInView.imgUrl}
        height={600}
        width={600}
      />
    </div>
  );
};

export default About;

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  imgUrl: string;
  description: string;
  contentPosition: "l" | "r";
  Icon: IconType;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "About Title 1",
    title: "A LITTLE ABOUT US",
    imgUrl: "/works/about1.jpg",
    description:
      "At Check It Out Media there is usually a collision of creativity and strategy and then BOOM -  we bring your brand to life. We have had the pleasure of collaborating with a diverse range of clients, from innovative startups to seasoned businesses. Our content isn't just trendy—it's a masterclass in storytelling. Our focus is to tell the story our clients want to convey to their audience. From fun trending reels and memes to intensely engaging pieces that captivate your audience, Check It Out Media does it all!  ",
    contentPosition: "r",
    Icon: FiEye,
  },
  {
    id: 2,
    callout: "About Title 2",
    title: "BRANDS WE FOSTER",
    imgUrl: "/works/about2.jpg",
    description:
      "Our eclectic client roster includes Karnatic, Pegs N Bottles, Spaine, Dessange and many more. Each brand has its own unique groove, and we dance to their tunes with customized strategies. At Check It Out Media, we believe in making every piece of content distinctive, ensuring a lasting impression and a memorable brand presence. After all a brand is remembered by the story it tells. ",
    contentPosition: "l",
    Icon: FiSearch,
  },
];
