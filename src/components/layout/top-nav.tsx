"use client";
import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiWhatsappLogo,
} from "react-icons/pi";
import { CgTwitter } from "react-icons/cg";

const CornerNav = () => {
  return (
    // <div className="h-screen bg-neutral-100">
    <Nav />
    //   <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-lg text-violet-500">
    //     <span>Open me</span> <FiArrowUpRight />
    //   </span>
    // </div>
  );
};

export const TopNav = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 z-30 flex h-28 w-full items-center justify-between  px-2 text-white"
      >
        {/* SVG from logoipsum */}
        {/* <svg
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-10 fill-white"
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
          height={200}
          width={200}
        />

        {/* <div className="flex gap-2">
        <button className="px-3 py-1.5 font-semibold uppercase text-white hover:bg-white/20">
          Sign in
        </button>
        <button className="bg-white px-3 py-1.5 font-semibold uppercase text-black">
          Sign up
        </button>
      </div> */}
      </motion.nav>
      <Nav />
    </>
  );
};

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>
        {active && <LinksOverlay setActive={setActive} />}
      </AnimatePresence>
    </>
  );
};

const LinksOverlay = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
      {/* <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden"> */}
      <Logo />
      <LinksContainer setActive={setActive} />
      {/* <FooterCTAs /> */}
    </nav>
  );
};

const LinksContainer = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.div className="space-y-4 pl-20 pt-20">
      {LINKS.map((l, idx) => {
        return (
          <NavLink setActive={setActive} key={l.title} href={l.href} idx={idx}>
            {l.title}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

const NavLink = ({
  children,
  href,
  idx,
  setActive,
}: {
  children: ReactNode;
  href: string;
  idx: number;
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      onClick={() => {
        setActive(false);
      }}
      className="block text-5xl font-semibold text-gray-100 transition-colors hover:text-orange-700 md:text-7xl"
    >
      {children}.
    </motion.a>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.a
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, y: -12 }}
      href="#home"
      className="px-8 "
    >
      <Image
        className="bg-transparent ml-4"
        alt="check-it-out-media-logo.svg"
        src={"/check-it-out-media-logo.svg"}
        height={200}
        width={200}
      />
    </motion.a>
  );
};

const HamburgerButton = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 0, right: 0 }}
        className="fixed z-30 rounded-bl-xl bg-gradient-to-br from-primary to-primary shadow-lg shadow-orange-800/20"
      />
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`group fixed right-2 top-2 z-50 size-16 bg-white/0 transition-all hover:bg-white/20 ${
          active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute block h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute block h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-1 w-5 bg-white"
          style={{ x: "-50%", y: "50%" }}
        />
        <SocialLinks active={active} />
      </motion.button>
    </>
  );
};

const SocialLinks = ({ active }: { active: boolean }) => {
  return (
    <nav className=" fixed right-0 top-20 rounded-bl-sm z-50 w-fit bg-black  p-3 flex flex-col items-center gap-3">
      {active && (
        <>
          {" "}
          <Link
            target="_blank"
            className="hover:bg-gray-500 rounded-sm"
            href="https://www.instagram.com/checkitoutmedia.in?igsh=MWtkbjRsZzBxOWZqZQ==
"
          >
            <PiInstagramLogo className="text-4xl text-white" />
          </Link>
          <Link
            target="_blank"
            className="hover:bg-gray-500 rounded-sm"
            href="https://www.facebook.com/share/X86VuMYbp4bzJTQX/?mibextid=LQQJ4d"
          >
            <PiFacebookLogo className="text-3xl text-white" />
          </Link>{" "}
          <Link
            target="_blank"
            className="hover:bg-gray-500 rounded-sm"
            href="https://www.linkedin.com/company/check-it-out-media/"
          >
            <PiLinkedinLogo className="text-3xl text-white" />
          </Link>{" "}
        </>
      )}
      <div className="bg-green-500 p-2 rounded-full">
        <Link
          target="_blank"
          className="hover:bg-gray-500  rounded-sm"
          href="https://wa.me/+919611544337"
        >
          <PiWhatsappLogo className="text-3xl text-white" />
        </Link>
      </div>
    </nav>
  );
};

const FooterCTAs = () => {
  return (
    <>
      <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
        {SOCIAL_CTAS.map((l, idx) => {
          return (
            <motion.a
              key={idx}
              href={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + idx * 0.125,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              exit={{ opacity: 0, y: -8 }}
            >
              <l.Component className="text-xl text-white transition-colors hover:text-orange-300" />
            </motion.a>
          );
        })}
      </div>

      {/* <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.125,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        exit={{ opacity: 0, y: 8 }}
        className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-orange-700 px-3 py-3 text-4xl uppercase text-orange-200 transition-colors hover:bg-white hover:text-orange-600 md:bottom-4 md:right-4 md:px-6 md:text-2xl"
      >
        <span className="hidden md:block">contact us</span> <FiArrowRight />
      </motion.button> */}
    </>
  );
};

const LINKS = [
  {
    title: "home",
    href: "#home",
  },
  {
    title: "about",
    href: "#about",
  },
  {
    title: "work",
    href: "#works",
  },
  {
    title: "contact",
    href: "#contact",
  },
  {
    title: "careers",
    href: "#",
  },
];

const SOCIAL_CTAS = [
  {
    Component: CgTwitter,
    href: "#",
  },
  {
    Component: SiInstagram,
    href: "#",
  },
  {
    Component: SiLinkedin,
    href: "#",
  },
  {
    Component: SiYoutube,
    href: "#",
  },
];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100vh - 32px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "80px",
    height: "80px",
    transition: {
      delay: 0.75,
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
