import React from "react";
import LinkMemojiResume from "./LinkMemojiResume";
import { mochiy_pop_one } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-3 relative">
      <LinkMemojiResume />

      <div className="text-justify text-sm leading-relaxed sm:text-base">
        {"Привет! Я — "}
        <span
          className={cn(
            "text-base font-bold md:text-xl",
            mochiy_pop_one.className
          )}
        >
          {"FlashInTheNight"}
        </span>
        {
          ", и я создаю интерфейсы, которые освещают путь к лучшему пользовательскому опыту. Исследуйте мои проекты и увидьте, как дизайн и код превращаются в захватывающие веб-решения."
        }
      </div>
    </div>
  );
};
export default About;
