"use client";

import { Tabs } from "./ui/tabs";
import { ProjectTabsCard } from "./ProjectTabsCard";

export function ProjectsTabs() {
  const tabs = [
    {
      title: "Planty",
      value: "Planty",
      content: (
        <ProjectTabsCard
          title="Planty. Интернет-магазин растений"
          description="Интернет-магазин по продаже растений и аксессуаров для них. Для каждой категорий формируется универсальная фильтрация товаров. Для платёжных операций интегрирована Yookassa. Для приобретения товаров регистрация не обязательна. Пользователь может зарегистриоваться как м помощью почты, так и через OAuth схему автронизации(Яндекс, Google)."
          techStack={[
            "Typescript",
            "Next.js",
            "TailwindCSS",
            "Prisma",
            "PostgreSQL",
            "Shadn UI",
            "Zustand",
          ]}
          prevewImg="/project-pics/Planty.webp"
          links={[
            {
              title: "Github",
              url: "https://github.com/FlashInTheNight/planty-store",
            },
            {
              title: "Сайт приложения",
              url: "https://planty-store.vercel.app/",
            },
          ]}
        />
      ),
    },
    {
      title: "SmartFix",
      value: "SmartFix",
      content: (
        <ProjectTabsCard
          title="SmartFix. Магазин запчастей для смартфонов"
          description="Магазин с широким ассортиментом. От экранов и аккумуляторов до микросхем и камер. Серверная чать написана на nest js. Интегрирована платёжная система Yookassa."
          techStack={[
            "Typescript",
            "Next.js",
            "Sass",
            "Redux Toolkit",
            "RTK Query",
            "Prisma",
            "PostgreSQL",
            "NestJS",
          ]}
          prevewImg="/project-pics/smart-fix.jpg"
          links={[
            {
              title: "Github. Клиентская часть",
              url: "https://github.com/FlashInTheNight/SmartFix-client",
            },
            {
              title: "Github. Серверная часть",
              url: "https://github.com/FlashInTheNight/SmartFix-server",
            },
          ]}
        />
      ),
    },
    {
      title: "Figma Land",
      value: "Figma Land",
      content: (
        <ProjectTabsCard
          title="Figma Land. Ecommerce landing page"
          description="Лендинг сайт для коммерческой деятельности."
          techStack={["Astro", "CSS", "JavaScript"]}
          prevewImg="/project-pics/figma-land.jpg"
          links={[
            {
              title: "Github",
              url: "https://github.com/FlashInTheNight/figma-land-landing",
            },
            {
              title: "Страница лендинга",
              url: "https://figma-land-preview.netlify.app/",
            },
            {
              title: "Дизайн",
              url: "https://www.figma.com/community/file/827585162030328694/figmaland-business-landing-page",
            },
          ]}
        />
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[32rem] [perspective:1000px] relative flex flex-col  w-full items-start justify-start mb-40 mt-5 ">
      <Tabs tabs={tabs} contentClassName="mx-auto px-2" />
    </div>
  );
}
