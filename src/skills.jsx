import { useState } from "react";
import "tailwindcss";
import "daisyui";

const Skills = () => {
  const [isCertOpen, setIsCertOpen] = useState(false);
  return (
    <div className="general py-15 w-full">
      <p className="text-4xl my-custom-font uppercase font-bold text-base-100 p-4">
        Skill Set
      </p>
      {/* Progress Bars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 skillset">
        {/* ADOBE CC */}
        <div className="card card-border bg-base-200 py-1">
          <div className="card-body p-4 gap-4">
            <div className="flex justify-between items-center w-full gap-2">
              <h3 className="card-title my-custom-font text-2xl md:text-xl lg:text-base xl:text-2xl font-bold break-words whitespace-normal">
                ADOBE CC
              </h3>
              {/* Vector/Pen Tool Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-15 md:size-10 lg:size-6 inline-block text-base-100 shrink-0"
              >
                <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
              </svg>
            </div>
            <progress
              className="progress progress-accent w-full"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>

        {/* HTML5/CSS3 */}
        <div className="card card-border bg-base-200 py-1">
          <div className="card-body p-4 gap-4">
            <div className="flex justify-between items-center w-full gap-2">
              <h3 className="card-title my-custom-font text-2xl md:text-xl lg:text-base xl:text-2xl font-bold break-words whitespace-normal">
                HTML5/CSS3
              </h3>
              {/* Code Brackets Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-15 md:size-10 lg:size-6 inline-block text-base-100 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25a.75.75 0 0 0-.22.53Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <progress
              className="progress progress-accent w-full "
              value="100"
              max="100"
            ></progress>
          </div>
        </div>

        {/* REACT */}
        <div className="card card-border bg-base-200 py-1">
          <div className="card-body p-4 gap-4">
            <div className="flex justify-between items-center w-full gap-2">
              <h3 className="card-title my-custom-font text-2xl md:text-xl lg:text-base xl:text-2xl font-bold break-words whitespace-normal">
                REACT
              </h3>
              {/* Swatches / Atomic Hub Icon */}
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="size-15 md:size-10 lg:size-6 inline-block text-base-100 shrink-0"
                fill="currentColor"
              >
                <title>React</title>
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
            </div>
            <progress
              className="progress progress-accent w-full"
              value="50"
              max="100"
            ></progress>
          </div>
        </div>

        {/* JS */}
        <div className="card card-border bg-base-200 py-1">
          <div className="card-body p-4 gap-4">
            <div className="flex justify-between items-center w-full gap-2">
              <h3 className="card-title my-custom-font text-2xl md:text-xl lg:text-base xl:text-2xl font-bold break-words whitespace-normal">
                JS
              </h3>
              {/* Document Script Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-15 md:size-10 lg:size-6 inline-block text-base-100 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <progress
              className="progress progress-accent w-full"
              value="75"
              max="100"
            ></progress>
          </div>
        </div>

        {/* REPOSITORIES */}
        <div className="card card-border bg-base-200 py-1">
          <div className="card-body p-4 gap-4">
            <div className="flex justify-between items-center w-full gap-2">
              <h3 className="card-title my-custom-font text-2xl md:text-xl lg:text-base xl:text-2xl font-bold break-words whitespace-normal">
                REPOSITORIES
              </h3>
              {/* Folder Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-15 md:size-10 lg:size-6 inline-block text-base-100 shrink-0"
              >
                <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <progress
              className="progress progress-accent w-full"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>

        {/* MARKETING EMAILS */}
        <div className="card card-border bg-base-200 py-1">
          <div className="card-body p-4 gap-4">
            <div className="flex justify-between items-center w-full gap-2">
              <h3 className="card-title my-custom-font text-2xl md:text-base lg:text-sm xl:text-2xl font-bold break-words whitespace-normal">
                MARKETING EMAILS
              </h3>
              {/* Envelope Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-15 md:size-10 lg:size-6 inline-block text-base-100 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <progress
              className="progress progress-accent w-full"
              value="90"
              max="100"
            ></progress>
          </div>
        </div>

        {/* UX/UI */}
        <div className="card card-border bg-base-200 py-1">
          <div className="card-body p-4 gap-4">
            <div className="flex justify-between items-center w-full gap-2">
              <h3 className="card-title my-custom-font text-2xl md:text-xl lg:text-base xl:text-2xl font-bold break-words whitespace-normal">
                UX/UI
              </h3>
              {/* Device/Layout Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-15 md:size-10 lg:size-6 inline-block text-base-100 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <progress
              className="progress progress-accent w-full"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>

        {/* CI */}
        <div className="card card-border bg-base-200 py-1">
          <div className="card-body p-4 gap-4">
            <div className="flex justify-between items-center w-full gap-2">
              <h3 className="card-title my-custom-font text-2xl md:text-base xl:text-2xl font-bold break-words whitespace-normal">
                CI
              </h3>
              {/* Brand Tag / Sparkle Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-15 md:size-10 lg:size-6 inline-block text-base-100 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <progress
              className="progress progress-accent w-full"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
