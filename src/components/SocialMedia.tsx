"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { IListSocialMedia } from "@/lib/types";
import { GithubIcon, VkIcon, TelegramIcon } from "./icons";

const socialMediaList: IListSocialMedia[] = [
  {
    icon: <GithubIcon />,
    link: "https://github.com/",
    text: "Github",
    color: "black dark:text-white",
    borderColor: "border-black dark:border-white",
    shadow: "shadow-black",
  },
  {
    icon: <VkIcon />,
    link: "https://vk.com/",
    text: "Vk",
    color: "black dark:text-white",
    borderColor: "border-pallet-blue-vk",
    shadow: "shadow-pallet-blue-vk",
  },
  {
    icon: <TelegramIcon />,
    link: "https://web.telegram.org/k/",
    text: "Telegram",
    color: "black dark:text-white",
    borderColor: "border-pallet-blue-tg",
    shadow: "shadow-pallet-blue-tg",
  },
  {
    icon: <Mail size={28} className="text-pallet-purple-1 dark:text-white" />,
    link: "mailto:bornToFixBugs@yandex.ru",
    text: "Email",
    color: "black dark:text-white",
    borderColor: "border-pallet-purple-1",
    shadow: "shadow-purple-500",
  },
];

const SocialMedia = () => {
  const [listItem, setListItem] = useState<IListSocialMedia[]>(socialMediaList);

  useEffect(() => {
    setListItem(socialMediaList);
  }, []);

  return (
    <div className="flex h-full w-full items-center">
      <ul className="w-full space-y-3">
        {listItem.map((item, i) => (
          <button
            key={i}
            type="button"
            className={cn(
              "w-full cursor-pointer rounded-md border bg-white px-2 py-1.5 transition-all hover:bg-transparent hover:shadow-[4px_4px_0px_0px] hover:shadow-gray-800 dark:bg-card dark:hover:bg-accent dark:hover:shadow-[4px_4px_0px_0px] dark:hover:shadow-accent",
              item.borderColor
            )}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full cursor-pointer items-center justify-start"
            >
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-[10px] p-0.5 text-white",
                  // `bg-${item.color}`,
                  // {
                  //   "bg-black": i === 0,
                  // }
                )}
              >
                {item.icon}
              </div>
              <span className={cn("ml-2", `text-${item.color}`)}>
                {item.text}
              </span>
            </a>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
