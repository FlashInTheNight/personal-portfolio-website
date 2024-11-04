import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  techStack: string[];
  prevewImg: string;
  links: { title: string; url: string }[];
}

export const ProjectTabsCard = ({
  title,
  description,
  techStack,
  prevewImg,
  links,
}: Props) => {
  return (
    <div className="rounded-[32px] bg-white shadow-2xl drop-shadow-2xl dark:border dark:border-white/[0.5] dark:bg-card dark:shadow-none w-full lg:max-w-4xl 2xl:w-full">
      <div className="w-full md:h-80 xl:h-[22rem] rounded-[32px] overflow-hidden border border-gray-300 dark:border-none">
        <Image
          src={prevewImg}
          alt={title}
          loading="lazy"
          quality={70}
          width="1920"
          height="1080"
        />
      </div>
      <div className="flex flex-col gap-y-2 p-2 md:px-6 md:py-4 xl:px-8">
        <h2 className="text-xl font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </h2>
        <hr className="border-gray-300 dark:border-white/[0.5] " />
        <div aria-label="Badges" className="flex flex-wrap gap-1">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              className="dark:bg-slate-100 dark:text-slate-700 font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <p className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
        <div aria-label="Project Buttons" className="flex flex-wrap gap-2 mt-2">
          {links.map(({ title, url }) => (
            <Button
              key={title}
              variant="outline"
              className="w-fit text-sm border-primary dark:border-white"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal"
              >
                {title}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
