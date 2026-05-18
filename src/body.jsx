import Experience from './experience.jsx';
import General from './general.jsx';

const Body = () => (
  <div className="flex flex-col lg:flex-row w-full bg-base-200 pb-6 lg:px-6 lg:gap-2">
  <Experience className="w-full lg:flex-1" />
  <General className="w-full lg:flex-1" />
</div>
);

export default Body;