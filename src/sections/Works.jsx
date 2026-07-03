import { Icon } from "@iconify/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";

const Works = () => {
  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;
  return (
    <section id="works" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthctics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light">
        {projects.map((project) => {
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
          >
            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>
            <div className="w-full h-0.5 bg-black/80"></div>
            <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {project.frameworks.map((framework) => {
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>;
              })}
            </div>
          </div>;
        })}
      </div>
    </section>
  );
};

export default Works;
