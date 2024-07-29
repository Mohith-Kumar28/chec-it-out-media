"use client";
import { useEffect, useRef, useState } from "react";
import {
  useMotionValueEvent,
  useTransform,
  MotionValue,
  useScroll,
  motion,
} from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import MagnetButtonExample from "./ui/magnet-button";
import MagnetButton from "./ui/magnet-button";
import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { ImageTrailHero, MouseImageTrail } from "./ImageTrailHero";
import { RiScrollToBottomFill } from "react-icons/ri";

const TrippyHero = () => {
  return (
    <section id="home" className="bg-white">
      {/* <Navigation /> */}
      <Hero />
      {/* <div className="grid h-screen place-content-center bg-violet-600 text-sm font-semibold text-white">
        <span>The rest of your website {":)"}</span>
      </div> */}
    </section>
  );
};

const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.65, 0.8, 1],
    [1, 1, 0.9, 1.25]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["0deg", "0deg", "60deg"]
  );
  const top = useTransform(scrollYProgress, [0, 0.25], ["80%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.125], [1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);

  return (
    <div
      ref={targetRef}
      className="relative z-0 h-[150vh] md:h-[300vh] bg-neutral-200"
    >
      <div className="sticky top-0 h-screen bg-white">
        <Copy opacity={opacity} />
        <Trippy rotate={rotate} top={top} scale={scale} />
        <OverlayLogo scale={logoScale} />
      </div>
    </div>
  );
};

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

const generateSections = (
  count: number,
  color: string,
  scale: MotionValue,
  rotate: MotionValue
) => {
  if (count === NUM_SECTIONS) {
    return <></>;
  }

  const nextColor = color === "#FE6E4A" ? "white" : "#FE6E4A";

  return (
    <Section rotate={rotate} scale={scale} background={color}>
      {generateSections(count + 1, nextColor, scale, rotate)}
    </Section>
  );
};

const Trippy = ({
  rotate,
  scale,
  top,
}: {
  rotate: MotionValue;
  scale: MotionValue;
  top: MotionValue;
}) => {
  return (
    <motion.div
      style={{ top }}
      className="absolute  bottom-0 left-0 right-0 overflow-hidden bg-black"
    >
      {generateSections(0, "#FE6E4A", scale, rotate)}
    </motion.div>
  );
};

const Section = ({
  background,
  scale,
  children,
  rotate,
}: {
  background: string;
  scale: MotionValue;
  rotate: MotionValue;
  children?: JSX.Element;
}) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{
        background,
        scale,
        rotate,
        padding: PADDING,
      }}
    >
      {children}
    </motion.div>
  );
};

const AIButton = () => {
  return (
    <button className="text-white font-medium px-4 pb-2 rounded-full overflow-hidden relative transition-transform cursor-default hover:scale-105 active:scale-95 ">
      <span className="relative z-10  align-middle justify-center gap-2 hidden md:flex">
        [ Curious to know more about our work? Scroll down to check it out ]
        <div className="flex flex-col justify-center">
          <RiScrollToBottomFill className="text-2xl text-white" />
        </div>
      </span>
      {/* <motion.div
        initial={{ left: 0 }}
        animate={{ left: "-300%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          ease: "linear",
        }}
        className="bg-[linear-gradient(to_right,#8f14e6,#e614dc,#e61453,#e68414,#e6e614)] absolute z-0 inset-0 w-[400%]"
      ></motion.div> */}
    </button>
  );
};

const Copy = ({ opacity }: { opacity: MotionValue }) => {
  const words = ["Brands", "Memories", "Legacies"];
  const videoSrc = "/videos/heroBgMobile.mp4";

  return (
    <>
      {/* <MouseImageTrail
    renderImageBuffer={50}
    rotationRange={25}
      images={Array.from(
      { length: 50 },
      (_, i) => `/imgTrail/${String(i + 1).padStart(3, "0")}.jpg`
   )}
  > */}
      <motion.div
        style={{ opacity }}
        // Padding top + 56px to accommodate for navbar height
        className="relative z-[99999] flex h-4/5 flex-col items-center justify-end gap-4 overflow-hidden  pb-5 px-4 pt-10 text-black bg-black"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed//k1NA_lPIqpA?si=7BcyIuD3y5MKlG&amp;controls=1&autoplay=1&mute=1&loop=1&playlist=k1NA_lPIqpA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {/* <video
          autoPlay
          controls
          muted
          loop
          className="absolute bottom-0 left-0 w-full h-full object-cover "
          // style={{ zIndex: 50 }}
        >


          <source src={videoSrc} type="video/mp4" />
        </video> */}
        <div className="bg-gradient-to-t from-black  z-0 h28 w-full absolute bottom-0 left-0"></div>

        <div className="  flex gap-2 -mb-12 md:mb-0 -ml-[30vw] md:-ml-[20vw] lg:-ml-[14vw]   z-40 relative   rounded-lg p-1  text-center text-3xl font-black md:text-5xl text-neutral-50 ">
          Building
          {/* <FlipWords words={words} /> */}
          <AnimatedText phrases={words} />
          {/* <br /> 
          with CheckItOutMedia */}
        </div>
        <AIButton />
      </motion.div>
      {/* </MouseImageTrail>  */}
    </>
  );
};

const AnimatedText = ({ phrases }: { phrases: string[] }) => {
  const ONE_SECOND = 1000;
  const WAIT_TIME = ONE_SECOND * 3;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases]);

  return (
    <div className="relative mb-14 mt-0 w-full">
      {phrases.map((phrase) => {
        const isActive = phrases[active] === phrase;
        return (
          <motion.div
            key={phrase}
            initial={false}
            animate={isActive ? "active" : "inactive"}
            style={{
              x: "-50%",
            }}
            variants={{
              active: {
                opacity: 1,
                scale: 1,
              },
              inactive: {
                opacity: 0,
                scale: 0,
              },
            }}
            className="absolute left-1/2 top-0 w-full text-primary"
          >
            {phrase}
          </motion.div>
        );
      })}
    </div>
  );
};

// const Navigation = () => {
//   const { scrollY } = useScroll();

//   const [hidden, setHidden] = useState(false);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious() || 0;
//     if (latest > previous && latest > 150) {
//       setHidden(true);
//     } else {
//       setHidden(false);
//     }
//   });

//   return (
//     <motion.nav
//       variants={{
//         visible: { y: 0 },
//         hidden: { y: "-100%" },
//       }}
//       animate={hidden ? "hidden" : "visible"}
//       transition={{ duration: 0.35, ease: "easeInOut" }}
//       className="fixed top-0 z-10 flex h-[56px] w-full items-center justify-between bg-black px-2 text-white"
//     >
//       {/* SVG from logoipsum */}
//       <svg
//         width="50"
//         height="39"
//         viewBox="0 0 50 39"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-auto w-10 fill-white"
//       >
//         <path
//           d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
//           stopColor="#000000"
//         ></path>
//         <path
//           d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
//           stopColor="#000000"
//         ></path>
//       </svg>

//       <div className="flex gap-2">
//         <button className="px-3 py-1.5 font-semibold uppercase text-white hover:bg-white/20">
//           Sign in
//         </button>
//         <button className="bg-white px-3 py-1.5 font-semibold uppercase text-black">
//           Sign up
//         </button>
//       </div>
//     </motion.nav>
//   );
// };

const OverlayLogo = ({ scale }: { scale: MotionValue }) => {
  return (
    <motion.div
      style={{ scale }}
      className="pointer-events-none absolute inset-0 z-[5] grid place-content-center"
    >
      {/* SVG from logoipsum */}
      {/* <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-32 fill-white"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg> */}
      <Image
        className="bg-transparent"
        alt="check-it-out-media-logo.svg"
        src={"/check-it-out-media-logo.svg"}
        height={600}
        width={600}
      />
    </motion.div>
  );
};

export default TrippyHero;
