import "tailwindcss";
import "daisyui";

const Footer = () => {
  // Calculate time passed since August 2014
  const startYear = 2014;
  const startMonth = 7; // August is index 7 in JS Date (0-11)

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  let yearsPassed = currentYear - startYear;
  let monthsPassed = currentMonth - startMonth;

  // Adjust if the current month is earlier in the year than August
  if (monthsPassed < 0) {
    yearsPassed--;
    monthsPassed += 12;
  }

  // Build the display text dynamically
  const timeString = `${yearsPassed} years and ${monthsPassed} months`;

  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-6 lg:px-20">
      <aside className="grid-flow-col items-center mx-auto md:mx-0">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-none stroke-current stroke-2 transition-colors duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
        <p className="font-black uppercase text-xl tracking-wide">
          art in the digital
        </p>
      </aside>
      <div className="flex justify-center md:justify-end w-full">
        <p className="text-center md:text-right">
          Andrew Moss - Copyright © {new Date().getFullYear()} - All right
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
