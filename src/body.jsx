import Experience from "./experience.jsx";
import General from "./general.jsx";
import Projects from "./projects.jsx";
import Skills from "./skills.jsx";

const Body = () => (
  <><Experience className="w-full lg:flex-1" />
    <div className="flex flex-col lg:flex-row w-full bg-base-content pt-5 pb-10 lg:px-6 lg:gap-2">
      <General className="w-full lg:flex-1" />
      <Skills className="w-full lg:flex-1" />
    </div>
    <Projects className="w-full lg:flex-1 bg-base-100" />
  </>
);

export default Body;
