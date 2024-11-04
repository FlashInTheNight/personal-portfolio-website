import { IListItem } from "@/lib/types";
import BentoGrid from "@/components/BentoGrid";
import BentoGridItem from "@/components/BentoGridItem";
import About from "@/components/About";
import SocialMedia from "@/components/SocialMedia";
import { IconTableColumn } from "@tabler/icons-react";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";


export default function Home() {
  const initialItem: IListItem[] = [
    {
      header: <About />,
      className: "md:col-span-2 px-7 py-8",
    },
    {
      header: <SocialMedia />,
      className: "md:col-span-1 px-7 py-8",
    },
    {
      header: <Projects />,
      className: "md:col-span-1",
    },
    {
      header: <TechStack />,
      className: "md:col-span-2 px-7 py-8",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <main className="px-6 py-3 sm:px-3 md:px-0">
      <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
        {initialItem.map((item, index) => (
          <BentoGridItem
            key={`item-${index}-${item.title}`}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </main>
  );
}
