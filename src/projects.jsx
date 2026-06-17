import { useState } from "react";
import "tailwindcss";
import "daisyui";

const Projects = ({ className = "" }) => {
  return (
    <div
      className={`${className} py-20 pb-25 md:px-4 bg-transparent`}
      style={{
        backgroundImage:
          "url('https://img.magnific.com/free-vector/light-grey-dots-background_78370-2583.jpg?t=st=1781188829~exp=1781192429~hmac=180eeda6af57411c0718a25533440f637b2c74895aeb4ff96b60f08cfb2f56fb&w=1480')",
        backgroundRepeat: "repeat",
        backgroundSize: "50%",
        backgroundAttachment: "fixed",
      }}
    >
      <p className="text-4xl my-custom-font uppercase font-bold uppercase text-base-content pb-10 pt-0">
        Recent Accomplishments
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <div className="card bg-base-content w-[95%] m-auto shadow-sm">

          <figure>
            <img
              src="https://service.betya.com/uploads/media/BTJ/BetyaLogo.svg"
              alt="Shoes"
              className="w-full object-cover p-4 bg-base-content"
            />
          </figure>
          <div className="card-body text-base-content bg-base-200 project-card">
            <h2 className="card-title my-custom-font">BETJA</h2>
            <p className="general-font">
              A full redevelopment of the Betja website, including a new design
              and improved user experience. The project was completed in 2026
              and has been well received by users and stakeholders alike.
            </p>
            <div className="card-actions flex">
              <a
                className="btn btn-primary flex-1 bg-base-100 hover:bg-secondary-content"
                href="https://sports.bet9ja.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                THE OLD
              </a>
              <a
                className="btn btn-primary flex-1 bg-base-100 hover:bg-secondary-content"
                href="https://www.betya.com/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                THE NEW
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-content w-[95%] m-auto shadow-sm">
          <figure className="min-h-63 p-4 bg-base-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="a"
              viewBox="0 0 1800.13 376.46"
            >
              <defs>
                <style>{`.b{fill:#fff;}.c{fill:#9700ff;}`}</style>
              </defs>
              <path
                className="c"
                d="M1251.24,21.07c3.89,0,6.93,3.03,4.76,6.93l-95.67,172.3v113.42c0,3.03-3.03,6.06-6.49,6.06h-76.19c-3.46,0-6.49-3.03-6.49-6.06v-113.43L975.49,27.99c-2.16-3.9,.87-6.93,4.76-6.93h90.05c4.33,0,8.22,3.03,9.96,6.93l35.5,77.92,35.5-77.92c1.73-3.9,5.63-6.93,9.96-6.93h90.02Z"
              />
              <path
                className="c"
                d="M1382.83,325.83c-92.21,0-153.68-62.34-153.68-155.41S1290.62,14.14,1382.83,14.14s153.68,62.34,153.68,156.28-61.47,155.41-153.68,155.41Zm0-224.24c-35.5,0-59.31,27.71-59.31,68.83s23.81,68.83,59.31,68.83,59.31-27.71,59.31-68.83c0-41.13-23.81-68.83-59.31-68.83h0Z"
              />
              <path
                className="c"
                d="M1792.77,21.07c4.03-.04,7.32,3.2,7.36,7.23,0,.04,0,.09,0,.13V208.95c0,76.62-41.13,116.88-119.48,116.88s-118.62-40.26-119.48-116.88V28.43c.12-4.02,3.34-7.24,7.36-7.36h74.46c4.03-.04,7.32,3.2,7.36,7.23,0,.04,0,.09,0,.13V216.74c0,19.91,11.26,31.6,30.31,31.6s30.3-11.69,30.3-31.17V28.43c.12-4.02,3.34-7.24,7.36-7.36h74.45Z"
              />
              <path
                className="b"
                d="M905.81,18.59c3.6-.07,6.58,2.8,6.65,6.4,0,.08,0,.17,0,.25V318.08c-.13,3.55-3.1,6.32-6.65,6.2h-78.52c-3.43-.01-6.21-2.79-6.22-6.22V25.23c0-3.55,3.11-6.65,6.21-6.65h78.53Z"
              />
              <path
                className="c"
                d="M349.81,225.42c-5.22,.91-10.19-2.58-11.11-7.8-.34-1.94-.07-3.94,.77-5.73l69.69-144.89L339.9,10.4c-5.06-4.14-12.53-3.4-16.67,1.67-1.33,1.63-2.21,3.58-2.54,5.66l-24.88,158.39-24.88,158.39c-1.01,6.47,3.42,12.53,9.89,13.53,2.07,.32,4.19,.09,6.14-.67l79.88-31.31,38.05-100.28-55.08,9.64Z"
              />
              <path
                className="b"
                d="M258.98,332.63l24.89-158.39L308.75,15.85c.93-5.72,3.9-10.92,8.36-14.62l-1.51-.56-.02,.08c-6.05-2.27-12.8,.8-15.07,6.86-.29,.77-.49,1.56-.61,2.37l-24.88,158.39-24.88,158.39c-.97,5.63,2.32,11.12,7.74,12.92l-.02,.07,1.2,.45c-.42-2.5-.45-5.06-.08-7.57Z"
              />
              <path
                className="c"
                d="M585.77,211.31l-112.09-91.6,45.2-99.51-55.5,91.09h0l-32.96,54.11,45.4-6.7c5.25-.77,10.13,2.86,10.9,8.11,.32,2.2-.13,4.44-1.27,6.35l-63.94,108.34-10.35,17.2h0l-46.86,77.76,70.48-87.02,147.81-57.93c6.09-2.39,9.09-9.26,6.71-15.36-.74-1.89-1.96-3.56-3.53-4.84h0Z"
              />
              <polygon
                className="b"
                points="418.88 161.1 420.09 159.12 453.05 105.01 507.34 15.91 498.37 12.56 409.92 157.76 418.88 161.1"
              />
              <polygon
                className="b"
                points="352.72 372.14 472.43 171.43 460.43 173.2 412.97 253.63 343.81 368.82 352.72 372.14"
              />
              <path
                className="b"
                d="M242.41,291.79c1.29,3.01-.43,6.03-3.87,7.75-24.98,15.5-58.56,24.98-90.42,24.98C59.42,324.52,0,262.51,0,169.51S59.42,14.5,148.12,14.5c31.86,0,65.45,9.47,90.42,24.98,3.44,1.72,5.17,4.74,3.87,7.75l-28.42,59.85c-1.72,3.88-4.74,5.17-8.18,3.44-15.93-9.04-31.43-12.05-49.95-12.05-38.75,0-64.59,28.42-64.59,71.05s25.84,71.05,64.59,71.05c18.52,0,34.02-3.01,49.95-12.06,3.44-1.72,6.46-.43,8.18,3.45l28.42,59.83Z"
              />
              <path
                className="b"
                d="M610.38,228.84c1.29-4.31,4.31-5.6,7.76-3.45,19.83,11.21,43.54,19.4,59.92,20.69,13.79,0,22.85-6.47,22.85-16.38,0-25.43-121.13-24.14-121.13-118.12,0-57.77,43.54-96.13,109.06-96.13,30.61,0,69.4,12.5,96.56,31.04,3.45,2.16,4.74,5.6,3.45,7.76l-27.16,60.78c-1.29,4.31-4.31,5.6-7.76,3.45-21.12-12.07-45.69-21.12-60.78-22.42-13.36,0-21.99,6.04-21.99,15.52,0,25.43,122,23.71,122,118.55,0,57.33-44.4,95.7-110.79,95.7-36.21,0-74.14-11.21-95.7-28.45-3.45-2.59-4.74-5.6-3.45-7.76l27.16-60.78Z"
              />
            </svg>
          </figure>
          <div className="card-body text-base-content bg-base-200 project-card">
            <h2 className="card-title my-custom-font">CASIYOU</h2>
            <p className="general-font">
              A brand new website for the Casiyou brand, which was launched in
              2024. The website features a modern design and improved site
              speeds, resulting in a better user experience and increased
              engagement.
            </p>
            <div className="card-actions justify-end">
              <a
                className="btn btn-primary w-full bg-base-100 hover:bg-secondary-content"
                href="https://www.betya.com/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW SITE
              </a>
            </div>
          </div>
        </div>
          <div className="card bg-base-content w-[95%] m-auto shadow-sm">
          <figure className="min-h-60 p-4 bg-base-content">
            <img
              src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%2079%2015'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.7.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.1%20Build%208)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23dcdcdc;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st0'%20d='M8.8,14.8H1.2v-3.8h6.9c.5,0,.9-.4.9-1V3.4c0-1.5-1-2.7-2.5-2.8v-.3h7.1v9.6c0,3.1-1.8,4.9-4.9,4.9h0Z'/%3e%3cpath%20class='st0'%20d='M28.6.3c4.3,0,8.3,2.6,8.3,7.2s-4,7.2-8.3,7.2h-4.7c-4.3,0-8.3-2.6-8.3-7.2S19.5.3,23.8.3h4.8ZM27.7,11c2.1,0,4-1.2,4-3.5s-1.9-3.5-4-3.5h-3.1c-2.1,0-4,1.2-4,3.5s1.9,3.5,4,3.5h3.1Z'/%3e%3cpath%20class='st0'%20d='M39,3.4c0-2.6-2.4-2.8-2.4-2.8v-.3h7.1v5.7L49.1.3h6.1l-7,6.6h0l8.2,7.8h-6.4l-6.4-6.6v6.6h-4.6V3.4h0Z'/%3e%3cpath%20class='st0'%20d='M57.2,14.7l5.4-11.1c.7-1.3.4-3-1.7-3s0,0,0,0v-.3h9.9l7.1,14.4h-5.5l-1.2-2.9h-7.4l-1.3,2.9s-5.3,0-5.3,0ZM67.6,3.6h-.2l-2.2,4.9h4.5s-2.1-4.9-2.1-4.9Z'/%3e%3c/svg%3e"
              alt="jokacasino"
              className="w-full object-cover p-4 bg-base-content"
            />
          </figure>
          <div className="card-body text-base-content bg-base-200 project-card">
            <h2 className="card-title my-custom-font">JOKA CASINO</h2>
            <p className="general-font">
              A full redevelopment of the Joka Casino website for English
              audience, a full re-design and meaningfull improvements on user
              experience. Completed in 2025 and has shown great improvements in
              user returns.
            </p>
            <div className="card-actions justify-end">
              <a
                className="btn btn-primary flex-1 bg-base-100 hover:bg-secondary-content"
                href="https://www.casinojokaclub.info/"
                target="_blank"
                rel="noopener noreferrer"
              >
                THE OLD
              </a>
              <a
                className="btn btn-primary flex-1 bg-base-100 hover:bg-secondary-content"
                href="https://www.jokacasino.live/"
                target="_blank"
                rel="noopener noreferrer"
              >
                THE NEW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
