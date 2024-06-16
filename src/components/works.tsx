"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { AiFillApple, AiFillFileImage } from "react-icons/ai";
import { useRef } from "react";

const Works = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      {/* <Nav scrollYProgress={scrollYProgress} /> */}
      <section ref={targetRef} className=" h-[350vh] mt-32">
        <div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />

          <Circles />
        </div>
      </section>
    </>
  );
};

const Copy = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center"
    >
      <div className="mb-8 flex flex-col items-start text-center justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-md text-gray-600 font-bold text-4xl  md:text-5xl">
          A sneak peak into
          <span className="text-primary"> our works</span>
        </h2>
      </div>
    </motion.div>
  );
};

const Images = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  return (
    <>
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url(/works/topLeft.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url(/works/topCenter.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
      />
      <motion.div
        className="row-span-2 relative z-10"
        style={{
          position: "relative",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
      >
        <video
          autoPlay
          height={100}
          width={100}
          muted
          loop
          className="absolute w-full h-full object-cover z-0"
          style={{ zIndex: -1 }}
        >
          <source src="/works/topRight.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        className="row-span-2 relative z-10"
        style={{
          position: "relative",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      >
        <video
          autoPlay
          height={100}
          width={100}
          muted
          loop
          className="absolute w-full h-full object-cover z-0"
          style={{ zIndex: -1 }}
        >
          <source src="/works/bottomLeft.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage: "url(/imgTrail/020.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      /> */}
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url(/works/centerCenter.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url(/works/bottomCenter.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          position: "relative",
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
      >
        <video
          autoPlay
          height={100}
          width={100}
          muted
          loop
          className="absolute w-full h-full object-cover z-0"
          style={{ zIndex: -1 }}
        >
          <source src="/works/bottomRight.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </>
  );
};

const Circles = () => (
  <>
    <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
    <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
  </>
);

export default Works;
