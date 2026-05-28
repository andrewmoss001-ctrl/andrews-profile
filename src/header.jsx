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
      <div className="hero bg-base-300 min-h-[50vh] w-full max-w-full">
        <div className="hero-content flex-col lg:flex-row max-w-full gap-8 p-8 lg:p-6 md:my-10">
          {/* Profile Picture */}
          <img
            src={img}
            alt="Andrew Moss"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full shadow-2xl border-3 border-primary object-cover"
          />

          {/* Content Block */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-content">
              I'm Andrew Moss.
            </h1>

            <p className="py-4 text-neutral-content max-w-2xl text-base leading-relaxed">
              Senior Graphic & Web Designer with a distinguished {timeString}{" "}
              track record in both the advertising and gaming industries.
              Possessing a comprehensive skillset encompassing advertising
              campaign development, engaging web and graphic design solutions,
              effective online advertising management, proficiency in the Adobe
              Creative Cloud suite, successful email marketing execution, and
              user-centered UX/UI design.
            </p>

            {/* Contact Links Grid */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start pt-4 gap-y-3 sm:gap-x-6 text-sm text-base-content opacity-60 w-full max-w-2xl">
              <a
                href="tel:+27796736862"
                className="flex items-center gap-2 hover:text-primary transition-colors whitespace-nowrap"
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
                className="flex items-center gap-2 hover:text-primary transition-colors"
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

              <span className="flex items-center gap-2">
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
                Cape Town, South Africa
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
