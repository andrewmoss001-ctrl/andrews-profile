import { useState } from "react";
import "tailwindcss";
import "daisyui";

const General = () => {
  const [isCertOpen, setIsCertOpen] = useState(false);
  return (
    <div className="general py-15 w-full">
      <p className="text-4xl my-custom-font font-bold text-base-100 uppercase p-4">
        General Information
      </p>

      {/* Bio Cards Grid */}

      <div className="grid grid-cols-2 gap-6 p-4">
        {/* Nationality */}
        <div className="card card-border text-base-100">
          <div className="card-body p-4 text-left">
            <div className="flex justify-between items-center w-full gap-2 mb-1 text-base-100">
              <h3 className="card-title my-custom-font uppercase text-sm sm:text-xl md:text-base lg:text-sm xl:text-xl font-bold break-words whitespace-normal">
                Nationality
              </h3>
              {/* Globe Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 sm:size-8 lg:size-6 inline-block text-secondary shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="max-w-xs general-font">South African</p>
          </div>
        </div>

        {/* DOB */}
        <div className="card card-border text-base-100">
          <div className="card-body p-4 text-left">
            <div className="flex justify-between items-center w-full gap-2 mb-1">
              <h3 className="card-title my-custom-font uppercase text-sm sm:text-xl md:text-base lg:text-sm xl:text-xl font-bold leading-tight break-words whitespace-normal">
                DOB
              </h3>
              {/* Calendar Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 sm:size-8 lg:size-6 inline-block text-secondary shrink-0"
              >
                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="max-w-xs general-font">02/08/1991</p>
          </div>
        </div>

        {/* Spoken Languages */}
        <div className="card card-border">
          <div className="card-body p-4 text-left text-base-100">
            <div className="flex justify-between items-center w-full gap-2 mb-1">
              <h3 className="card-title my-custom-font uppercase text-sm sm:text-xl md:text-base lg:text-sm xl:text-xl font-bold leading-tight break-words whitespace-normal">
                Spoken Languages
              </h3>
              {/* Chat Bubble Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 sm:size-8 lg:size-6 inline-block text-secondary shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="max-w-xs general-font">
              English - Native
              <br />
              Afrikaans - Proficient
            </p>
          </div>
        </div>

        {/* Schooling */}
        <div className="card card-border">
          <div className="card-body p-4 text-left text-base-100">
            <div className="flex justify-between items-center w-full gap-2 mb-1">
              <h3 className="card-title my-custom-font uppercase text-sm sm:text-xl md:text-base lg:text-sm xl:text-xl font-bold break-words whitespace-normal">
                Schooling
              </h3>
              {/* Building/School Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 sm:size-8 lg:size-6 inline-block text-secondary shrink-0"
              >
                <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                <path
                  fillRule="evenodd"
                  d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
                  clipRule="evenodd"
                />
                <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
              </svg>
            </div>
            <p className="max-w-xs general-font">
              Radley College
              <br />
              Matriculated 2010
            </p>
          </div>
        </div>

        {/* Tertiary Education */}
        <div className="card card-border text-base-100 col-span-2">
          <div className="card-body p-4 text-left">
            <div className="flex justify-between items-center w-full gap-2 mb-1">
              <h3 className="card-title my-custom-font uppercase text-sm sm:text-xl md:text-base lg:text-sm xl:text-xl font-bold leading-tight break-words whitespace-normal">
                Certificates
              </h3>
              {/* Graduation Cap Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 sm:size-8 lg:size-6 inline-block text-secondary shrink-0"
              >
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>
            </div>
            <p className="general-font">
              <a
                href="https://scrimba.com/@andrewmoss001-ctrl:certs;cert24zAwPPowYU1QAbsMfBKqdpb3C1QntdKnZB32"
                className="no-underline link hover:text-secondary hover:opacity-80 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript Certificate - 2026 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-2">
                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.75 10.25a.75.75 0 0 0 1.5 0V6.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v4.69Z" clipRule="evenodd" />
                </svg>

              </a>
              </p>
              <p className="general-font">
              <a
                href="https://scrimba.com/learn-html-and-css-c0p;cert24zAwPPowYU1QAbsMfBKqdo6k4isd9s3mKn4G"
                className="no-underline link hover:text-secondary hover:opacity-80 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML5/CSS3 Certificate - 2026 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-2">
                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.75 10.25a.75.75 0 0 0 1.5 0V6.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v4.69Z" clipRule="evenodd" />
                </svg>

              </a>
              </p>
              <p className="general-font">
                <a
                  href="https://scrimba.com/@andrewmoss001-ctrl:certs;cert24zAwPPowYU1QAbsMfBKqdpb3C1QntdKnZB32"
                  className="no-underline link hover:text-secondary hover:opacity-80 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FrontEnd Dev Certificate - In Progress / 43%
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-2">
                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.75 10.25a.75.75 0 0 0 1.5 0V6.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v4.69Z" clipRule="evenodd" />
                    </svg>
                </a>
              </p>
              <p className="general-font">
                <a
                  href="https://scrimba.com/@andrewmoss001-ctrl:certs;cert24zAwPPowYU1QAbsMfBKqdpb3C1QntdKnZB32"
                  className="no-underline link hover:text-secondary hover:opacity-80 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Stack Developer Certificate - In Progress / 29%
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline-block ml-2">
                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.75 10.25a.75.75 0 0 0 1.5 0V6.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v4.69Z" clipRule="evenodd" />
                    </svg>
                </a>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
