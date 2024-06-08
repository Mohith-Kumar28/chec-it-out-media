"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { DisappearingFeatures } from "./disappearingFeatures";

const Works = () => {
  return (
    <div id="works" className="px-4 md:px-8 py-28">
      {/* <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-md text-gray-600 font-bold text-4xl  md:text-5xl">
          A sneak peak into
          <span className="text-primary"> our works</span>
        </h2>
      </div> */}
      <DisappearingFeatures />
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        <Card
          heading="Dessange"
          description=""
          videoSrc="/works/videos/dessange.mp4"
        />
        <Card
          heading="Juveria"
          description=""
          videoSrc="/works/videos/juveria.mp4"
        />
        <Card
          heading="Beer Oota"
          description=""
          videoSrc="/works/videos/beerOota.mp4"
        />
        <Card heading="PNB" description="" videoSrc="/works/videos/pnb.mp4" />
      </div> */}
    </div>
  );
};

const Card = ({
  heading,
  description,
  videoSrc,
}: {
  heading: string;
  description: string;
  videoSrc: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); // Create a ref for the video element

  // Function to handle hover effect
  const handleHover = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play(); // Play the video if it's not already playing
      } else {
        videoRef.current.pause(); // Pause the video if it's playing
      }
      setIsPlaying(!isPlaying); // Toggle the isPlaying state
    }
  };

  return (
    <motion.div
      transition={{ staggerChildren: 0.035 }}
      onHoverStart={() => {
        videoRef?.current?.play(), setIsPlaying(true);
      }} // Use the handleHover function on hover
      onHoverEnd={() => {
        videoRef?.current?.pause(), setIsPlaying(false);
      }} // Use the handleHover function on hover
      className="w-full h-[500px] bg-slate-300 overflow-hidden cursor-pointer group relative"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out `}
      >
        <div className="bg-black opacity-50"></div> {/* Black overlay */}
      </div>
      <video
        ref={videoRef} // Attach the ref to the video element
        // autoPlay
        loop
        muted
        className={`absolute z-10 w-auto min-w-full min-h-full max-w-none ${
          isPlaying ? "saturate-100" : "saturate-0"
        } `}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Rest of the component remains unchanged */}
      <div className="p-4 relative z-20 h-full text-white group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <div className="w-full h-36 bg-gradient-to-t from-black -z-10 absolute bottom-0 left-0"></div>
        <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div>
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }: { letter: string }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default Works;
