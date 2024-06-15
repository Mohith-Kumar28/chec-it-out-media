"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FiCalendar,
  FiCheck,
  FiCloud,
  FiDollarSign,
  FiFilm,
  FiMoon,
  FiWatch,
} from "react-icons/fi";
import {
  FaEdit,
  FaEnvelopeOpenText,
  FaFacebookSquare,
  FaFilm,
  FaPaintBrush,
  FaPenAlt,
  FaRegFileAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { TbBrandApplePodcast } from "react-icons/tb";
import { IoDocumentText } from "react-icons/io5";
import { MdEditSquare, MdEmail, MdManageAccounts } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { SiGooglecampaignmanager360 } from "react-icons/si";

export const WhatWeOffer = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 py-28 text-slate-600">
      <div className="mb-20 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-gray-600 font-bold text-4xl  md:text-5xl">
          What can we do for
          <span className="text-primary"> Your brand</span>
        </h2>
      </div>
      <div className="relative z-10 grid grid-cols-2 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
        <Item
          Icon={PiFilmReelFill} // Assuming FiFilm represents Media Production
          title="Media Production"
          subtitle="Create compelling video and audio content to engage your audience."
        />
        <Item
          Icon={IoDocumentText} // Content Creation icon, assuming FaRegFileAlt is suitable
          title="Content Creation"
          subtitle="Develop engaging written, visual, and multimedia content strategies."
        />
        <Item
          Icon={MdEditSquare} // Content Editing icon, assuming FaEdit is suitable
          title="Content Editing"
          subtitle="Refine and polish your content to ensure clarity and impact."
        />
        <Item
          Icon={FaFacebookSquare} // Social Media Services icon, assuming FaFacebookSquare is suitable
          title="Social Media Services"
          subtitle="Manage and grow your social media presence across platforms."
        />
        <Item
          Icon={FaUserGraduate} // Influencer Marketing icon, assuming FaUserGraduate is suitable
          title="Influencer Marketing"
          subtitle="Leverage influencers to reach and engage your target audience."
        />
        <Item
          Icon={SiGooglecampaignmanager360} // Branding and Brand Management icon, assuming FaBrandFriends is suitable
          title="Branding & Brand Management"
          subtitle="Build and maintain a strong brand identity and reputation."
        />
        <Item
          Icon={MdEmail} // Email Marketing icon, assuming FaEnvelopeOpenText is suitable
          title="Email Marketing"
          subtitle="Engage customers through personalized email campaigns."
        />
        <Item
          Icon={FaPaintBrush} // Graphic Design and Illustrations icon, assuming FaPaintBrush is suitable
          title="Graphic Design and Illustrations"
          subtitle="Create visually appealing designs and illustrations for your projects."
        />
        <Item
          Icon={FaPenAlt} // Content Writing icon, assuming FaPenAlt is suitable
          title="Content Writing"
          subtitle="Craft high-quality written content to inform, entertain, and persuade your audience."
        />
      </div>
      {/* <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Fetaure Title 1</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Fetaure Title 4</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Fetaure Title 2</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Fetaure Title 3</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div> */}
    </section>
  );
};

const BounceCard = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};

const Item = ({
  Icon,
  title,
  subtitle,
}: {
  Icon: IconType;
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <h4 className="mb-1.5 text-gray-100 flex md:flex-row flex-col items-start text-lg font-medium md:text-xl">
        <Icon className="mr-1.5 mb-2 size-[26px] text-primary" />
        {title}
      </h4>
      <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p>
    </div>
  );
};
