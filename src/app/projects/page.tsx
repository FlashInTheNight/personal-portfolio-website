import { ProjectsTabs } from "@/components/ProjectsTabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div
      aria-label="ProjectsPage"
      className="mx-auto px-2 lg:max-w-4xl flex flex-col gap-y-10"
    >
      <ProjectsTabs />
      <Button className="dark:border-white mb-1 w-fit" variant="outline">
        <Link href="/">Вернуться на главную</Link>
      </Button>
    </div>
  );
}
