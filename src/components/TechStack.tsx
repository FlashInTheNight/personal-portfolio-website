"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Animation from "../../public/animations/animation-cat.json";

import { DiJsBadge, DiCss3, DiSass, DiGit } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAstro, SiNestjs } from "react-icons/si";
import { cn } from "@/lib/utils";
import { BiLogoTypescript } from "react-icons/bi";

const techStackData = [
  {
    id: 1,
    title: "Next.js",
    icons: <RiNextjsFill className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-blue-2",
  },
  {
    id: 2,
    title: "Javascript",
    icons: <DiJsBadge className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-purple-1",
  },
  {
    id: 3,
    title: "Astro",
    icons: <SiAstro className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-pink-1",
  },
  {
    id: 4,
    title: "CSS 3",
    icons: <DiCss3 className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-purple-3",
  },
  {
    id: 5,
    title: "SASS",
    icons: <DiSass className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-blue-5",
  },
  {
    id: 6,
    title: "GIT",
    icons: <DiGit className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-pink-2",
  },
  {
    id: 7,
    title: "Typescript",
    icons: <BiLogoTypescript className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-blue-4",
  },
  {
    id: 8,
    title: "TailwindCSS",
    icons: <RiTailwindCssFill className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-blue-1",
  },
  {
    id: 9,
    title: "NestJS",
    icons: <SiNestjs className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-purple-2",
  },
];

const TechStack = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex h-full flex-col sm:flex-row">
      <div className="grid flex-1 grid-cols-3 gap-2 sm:grid-rows-3">
        {isMounted &&
          techStackData.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-center transition-all duration-200 ease-in-out hover:scale-105"
            >
              <div
                className={cn(
                  "flex cursor-default items-center justify-center rounded-md p-5 group-hover:bg-opacity-25 group-hover:shadow-xl group-hover:[mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
                  item.background,
                  item.color
                )}
              >
                <div className="text-4xl">{item.icons}</div>
              </div>
              <span
                className={`absolute rounded-md px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
              >
                {item.title}
              </span>
            </div>
          ))}
      </div>
      <div className="h-full flex-1">
        <div
          className="flex h-full items-center justify-center"
          aria-hidden="true"
        >
          <Suspense fallback={<div>Loading...</div>}>
            {typeof document !== "undefined" && isMounted && (
              <Player autoplay loop src={Animation} className="h-full w-full" />
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
