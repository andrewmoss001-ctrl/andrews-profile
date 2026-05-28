import React, { useState } from "react";
// Make sure to adjust the relative path below to match where your PDF is located
import insightPdf from "./assets/insight.pdf";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInsightClick = (e) => {
    e.preventDefault();
    // 768px catches most standard mobile sizes.
    // iPads (768px and up) and desktops will fall into the 'else' block to open the modal.
    if (window.innerWidth < 768) {
      window.open(insightPdf, "_blank", "noopener,noreferrer");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="grid grid-cols-1 py-6 md:grid-cols-3 lg:grid-cols-6 w-full bg-base-300 text-base">
      {/* Section 1: Email */}
      <div className="flex items-center justify-center p-4 text-neutral">
        <a
          href="mailto:andrewmoss001@gmail.com"
          className="flex items-center gap-2 hover:opacity-100 text-neutral hover:text-neutral-content transition-all duration-300 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <p className="font-bold">Email</p>
        </a>
      </div>

      {/* Section 2: Phone */}
      <div className="flex items-center justify-center p-4 text-neutral">
        <a
          href="tel:+27796736862"
          className="flex items-center gap-2 hover:opacity-100 text-neutral hover:text-neutral-content transition-all duration-300 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          <p className="font-bold">+27 79 673 6862</p>
        </a>
      </div>

      {/* Section 3: Location */}
      <div className="flex items-center justify-center p-4 text-neutral">
        <div className="flex items-center gap-2 hover:opacity-100 text-neutral hover:text-neutral-content transition-all duration-300 hover:scale-110 cursor-default">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 inline-block"
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
          <p className="font-bold">Cape Town, SA</p>
        </div>
      </div>

      {/* Section 4: LinkedIn */}
      <div className="flex items-center justify-center p-4 text-neutral">
        <a
          href="https://www.linkedin.com/in/andrew-moss-278335b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-100 text-neutral hover:text-neutral-content transition-all duration-300 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="size-8 inline-block bi bi-linkedin transition-colors duration-300"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
          <p className="font-bold">LinkedIn</p>
        </a>
      </div>

      {/* Section 5: Portfolio */}
      <div className="flex items-center justify-center p-4 text-neutral">
        <a
          href="https://www.behance.net/andrewmoss1/"
          className="flex items-center gap-2 hover:opacity-100 text-neutral hover:text-neutral-content transition-all duration-300 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="size-8 inline-block transition-colors duration-300"
            viewBox="0 0 20 20"
          >
            <path d="M8.072 9.301s1.892-.147 1.892-2.459c0-2.315-1.548-3.441-3.51-3.441H0v12.926h6.454s3.941.129 3.941-3.816c-.001-.001.171-3.21-2.323-3.21zM2.844 5.697h3.61s.878 0 .878 1.344c0 1.346-.516 1.541-1.102 1.541H2.844V5.697zm3.427 8.332H2.844v-3.455h3.61s1.308-.018 1.308 1.775c0 1.512-.977 1.669-1.491 1.68zm9.378-7.341c-4.771 0-4.767 4.967-4.767 4.967s-.326 4.941 4.767 4.941c0 0 4.243.254 4.243-3.437H17.71s.072 1.391-1.988 1.391c0 0-2.184.152-2.184-2.25h6.423c.001-.001.709-5.612-4.312-5.612zm1.941 3.886h-4.074s.266-1.992 2.182-1.992 1.892 1.992 1.892 1.992zm.507-6.414H12.98v1.594h5.117V4.16z" />
          </svg>
          <p className="font-bold">Portfolio</p>
        </a>
      </div>

      {/* Section 6: Insight */}
      <div className="flex items-center justify-center p-4 text-neutral">
        <button
          onClick={handleInsightClick}
          className="flex items-center gap-2 hover:opacity-100 text-neutral hover:text-neutral-content transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          {/* Duplicated Email Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 inline-block transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
            />
          </svg>

          <p className="font-bold">Insight</p>
        </button>
      </div>

      {/* PDF Popup Modal Viewport (Desktop & iPad sizes) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-5xl h-[85vh] bg-base-100 rounded-xl shadow-2xl flex flex-col overflow-hidden border border-base-200">
            {/* Modal Header Bar */}
            <div className="flex justify-between items-center px-6 py-4 bg-base-200 border-b border-base-300">
              <h3 className="font-bold text-base text-neutral-content tracking-wide uppercase">
                Insight Document
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-base-300 text-neutral-content hover:bg-neutral-content hover:text-base-100 transition-colors duration-200 font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Light Framework PDF Viewer */}
            <div className="flex-1 w-full h-full bg-base-100">
              <iframe
                src={`${insightPdf}#toolbar=0`}
                className="w-full h-full border-0"
                title="Insight PDF Document"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
