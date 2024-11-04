"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { IconCloudDownload } from "@tabler/icons-react";
import Image from "next/image";

const LinkMemojiResume = () => {
  const controls = useAnimation();
  const controlsIcon = useAnimation();

  const [memoji, setMemoji] = useState("/icons/dog-start.png");

  const hoverAnimation = {
    scale: 1.1,
    transition: { duration: 0.5 },
  };

  const unhoverAnimation = {
    scale: 1,
    transition: { duration: 0.5 },
  };

  return (
    <div className="flex flex-row justify-between overflow-hidden z-20">
      <motion.div animate={controls} aria-hidden="true">
        <div className="w-[150px] h-[150px] flex items-center justify-around">
          <Image src={memoji} alt="memoji" width={125} height={125} priority />
        </div>
      </motion.div>
      <motion.a
        target={"_blank"}
        href={"https://disk.yandex.ru/i/IGx9UeS8NDcsxQ"}
        onTouchStart={() => {
          controls.start(hoverAnimation);
          controlsIcon.start({
            scale: 1,
            display: "block",
            transition: { duration: 0.5 },
          });
          setMemoji("/icons/dog-end.png");
        }}
        onTouchEnd={() => {
          controls.start(unhoverAnimation);
          controlsIcon.start({
            scale: 0,
            display: "none",
            transition: { duration: 0.5 },
          });
          setMemoji("/icons/dog-start.png");
        }}
        onHoverStart={() => {
          controls.start(hoverAnimation);
          controlsIcon.start({
            scale: 1,
            display: "block",
            transition: { duration: 0.5 },
          });
          setMemoji("/icons/dog-end.png");
        }}
        onHoverEnd={() => {
          controls.start(unhoverAnimation);
          controlsIcon.start({
            scale: 0,
            display: "none",
            transition: { duration: 0.5 },
          });
          setMemoji("/icons/dog-start.png");
        }}
        className="group relative inline-flex h-8 cursor-pointer overflow-hidden rounded-full border border-slate-200 px-[2px] py-1.5 focus:outline-none"
      >
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm text-gray-900  dark:bg-slate-950 dark:text-white">
          Резюме{" "}
          <span className="ml-1 group-hover:hidden group-hover:transition-all">
            &rarr;
          </span>
          <motion.span initial={{ display: "none" }} animate={controlsIcon}>
            <IconCloudDownload
              className="ml-2 font-semibold"
              size={18}
              strokeWidth={1.5}
            />
          </motion.span>
        </span>
      </motion.a>
    </div>
  );
};

export default LinkMemojiResume;
