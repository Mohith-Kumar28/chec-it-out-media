import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const DisappearingFeatures = () => {
  return (
    <>
      <div className="relative h-fit ">
        <Features />
      </div>

      <div className="h-[50vh] " />
    </>
  );
};

const Features = () => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen">
      {/* <span className="w-fit rounded-full bg-primary px-4 py-2 text-sm uppercase text-indigo-100">
        Lorem ipsum dolor
      </span> */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-md text-gray-600 font-bold text-4xl  md:text-5xl">
          A sneak peak into
          <span className="text-primary"> our works</span>
        </h2>
      </div>
      {/* <p className="text-lg text-indigo-950">
        Lorem ipsum dolor sit amet consectetur. Dolor quis a leo lobortis orci
        tortor eget. Enim proin aliquam nulla a lacus pellentesque quam in. Nec
        vel vel nulla nunc vel in molestie proin convallis. Leo et vulputate
        tincidunt justo a varius et elementum.
      </p> */}
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={4}
          videoSrc="/works/videos/dessange.mp4"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={4}
          videoSrc="/works/videos/juveria.mp4"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={4}
          videoSrc="/works/videos/beerOota.mp4"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={4}
          videoSrc="/works/videos/pnb.mp4"
        />
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
  videoSrc,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  videoSrc: string;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900"
    >
      {/* <span className="text-lg text-neutral-600">Feature demo here</span> */}
      <video width="340" height="400" controls loop muted className={` `}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-background to-background/0 md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;
