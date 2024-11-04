import Link from "next/link";
import { EvervaultCard } from "./ui/evervault-card";

const Projects = () => {
  return (
    <Link className="w-full h-full" href="/projects">
      <EvervaultCard text="Проекты" />
    </Link>
  );
};

export default Projects;
