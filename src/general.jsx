import "tailwindcss";
import "daisyui";

const General = () => {
  return (
    <div className="general py-6 bg-base-200 w-full">
      <p className="text-3xl font-bold text-neutral-content p-4">
        General Information
      </p>

      {/* Bio Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
        {/* Nationality */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4 text-center sm:text-left">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center sm:justify-start break-words whitespace-normal">
              Nationality
            </h3>
            <p className="max-w-xs mx-auto sm:mx-0">South African</p>
          </div>
        </div>

        {/* DOB */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4 text-center sm:text-left">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center sm:justify-start break-words whitespace-normal">
              DOB
            </h3>
            <p className="max-w-xs mx-auto sm:mx-0">02/08/1991</p>
          </div>
        </div>

        {/* Spoken Languages */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4 text-center sm:text-left">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center sm:justify-start leading-tight break-words whitespace-normal">
              Spoken Languages
            </h3>
            <p className="max-w-xs mx-auto sm:mx-0">English & Afrikaans</p>
          </div>
        </div>

        {/* Schooling */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4 text-center sm:text-left">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center sm:justify-start break-words whitespace-normal">
              Schooling
            </h3>
            <p className="max-w-xs mx-auto sm:mx-0">
              Radley College
              <br />
              Matriculated 2010
            </p>
          </div>
        </div>

        {/* Tertiary Education */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4 text-center sm:text-left">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center sm:justify-start leading-tight break-words whitespace-normal">
              Tertiary Education
            </h3>
            <p className="max-w-xs mx-auto sm:mx-0 leading-tight">
              Greenside Design Center
              <br />
              Graphic Design 1st Year - Incomplete
            </p>
          </div>
        </div>

        {/* Based */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4 text-center sm:text-left">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center sm:justify-start break-words whitespace-normal">
              Based
            </h3>
            <p className="max-w-xs mx-auto sm:mx-0">
              Claremont, Cape Town
              <br />
              South Africa
            </p>
          </div>
        </div>
      </div>

      <p className="text-3xl font-bold text-neutral-content p-4">
        Skill Set
      </p>

      {/* Progress Bars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* ADOBE CC */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4 gap-4">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center md:justify-start break-words whitespace-normal">
              ADOBE CC
            </h3>
            <progress
              className="progress progress-accent w-full"
              value="90"
              max="100"
            ></progress>
          </div>
        </div>

        {/* HTML5/CSS3 */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4 gap-4">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center md:justify-start break-words whitespace-normal">
              HTML5/CSS3
            </h3>
            <progress
              className="progress progress-accent w-full"
              value="100"
              max="100"
            ></progress>
          </div>
        </div>

        {/* REACT */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4  gap-4">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center md:justify-start break-words whitespace-normal">
              REACT
            </h3>
            <progress
              className="progress progress-accent w-full"
              value="50"
              max="100"
            ></progress>
          </div>
        </div>

        {/* JS */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4  gap-4">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center md:justify-start break-words whitespace-normal">
              JS
            </h3>
            <progress
              className="progress progress-accent w-full"
              value="30"
              max="100"
            ></progress>
          </div>
        </div>

        {/* CMS SYSTEMS */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4  gap-4">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center md:justify-start break-words whitespace-normal">
              CMS SYSTEMS
            </h3>
            <progress
              className="progress progress-accent w-full"
              value="90"
              max="100"
            ></progress>
          </div>
        </div>

        {/* REPOSITORIES */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4  gap-4">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center md:justify-start break-words whitespace-normal">
              REPOSITORIES
            </h3>
            <progress
              className="progress progress-accent w-full"
              value="50"
              max="100"
            ></progress>
          </div>
        </div>

        {/* MAILERS */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4  gap-4">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center md:justify-start break-words whitespace-normal">
              MARKETING EMAILS
            </h3>
            <progress
              className="progress progress-accent w-full"
              value="90"
              max="100"
            ></progress>
          </div>
        </div>

        {/* UX/UI */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4  gap-4">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center md:justify-start break-words whitespace-normal">
              UX/UI
            </h3>
            <progress
              className="progress progress-accent w-full"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>

        {/* CI */}
        <div className="card card-border bg-base-100">
          <div className="card-body p-4 gap-4">
            <h3 className="card-title text-sm md:text-xs lg:text-sm font-black justify-center md:justify-start break-words whitespace-normal">
              CI
            </h3>
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

export default General;