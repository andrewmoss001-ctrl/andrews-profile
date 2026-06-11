import React from "react";
import img from "./assets/Profile-Pic-2026.jpg";

const Header = () => {
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
    <header className="header">
      <div className="hero bg-base-content min-h-[100vh] w-full max-w-full space-around">
        <div className="hero-content flex-col lg:flex-row max-w-full gap-8 p-8 lg:pb-15 lg:pt-5 md:my-10">
          {/* Profile Picture */}
          <img
            src={img}
            alt="Andrew Moss"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full shadow-2xl border-6 border-secondary object-cover"
          />

          {/* Content Block */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl my-custom-font uppercase lg:text-5xlfont-bold text-secondary">
              I'm Andrew Moss.
            </h1>

            <p className="py-4 general-font text-base-100 max-w-4xl text-xl leading text-left -relaxed">
              Senior Graphic & Web Designer with a distinguished {timeString}{" "}
              track record in both the advertising and gaming industries.
              Possessing a comprehensive skillset encompassing advertising
              campaign development, engaging web and graphic design solutions,
              effective online advertising management, proficiency in the Adobe
              Creative Cloud suite, successful email marketing execution, and
              user-centered UX/UI design.
            </p>

            {/* Contact Links Grid */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap space-between pt-4 gap-y-3 sm:gap-x-6 text-base text-secondary-content opacity-100 w-full max-w-4xl my-custom-font uppercase">
              <a
                href="tel:+27796736862"
                className="flex items-center gap-2 hover:text-secondary hover:opacity-100 transition-colors whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                +27 79 673 6862
              </a>

              <a
                href="mailto:andrewmoss001@gmail.com"
                className="flex items-center gap-2 hover:text-secondary hover:opacity-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                andrewmoss001@gmail.com
              </a>

              <span className="flex items-center gap-2 hover:text-secondary hover:opacity-100 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p className="my-custom-font">Cape Town, South Africa</p>
              </span>
            </div>
            <div className="flex items-center text-4xl gap-4 mt-6 my-custom-font uppercase font-bold text-center m-auto">
              <a
                href="#experience"
                className="inline-flex group transition-colors duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-14 text-secondary transition-colors duration-300 ease-in-out group-hover:text-secondary-content"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 2.75c0 .414.336.75.75.75h6.5v7.94l-.97-.97a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l2.25-2.25a.75.75 0 1 0-1.06-1.06l-.97.97V2.75A.75.75 0 0 0 10 2H2.75a.75.75 0 0 0-.75.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
