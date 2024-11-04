"use client";

import { IBentoGridItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: IBentoGridItem) => {
  return (
    <div
      className={cn(
        "group-draggable group/bento row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-[32px] border border-transparent bg-white shadow-input drop-shadow-sm transition-all duration-200 ease-in-out hover:shadow-xl dark:border-white/[0.5] dark:bg-card dark:shadow-none",
        className
      )}
    >
      {header}
      {icon || title || description ? (
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {icon}
          {title && (
            <div className="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
              {title}
            </div>
          )}
          {description && (
            <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
              {description}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default BentoGridItem;
