import "tailwindcss";
import "daisyui";

const Experience = () => {
  return (
    <section
      id="experience"
      className="experience w-full p-6 pb-25 md:px-4 bg-transparent py-16"
      style={{
        backgroundImage:
          "url('https://img.magnific.com/free-vector/light-grey-dots-background_78370-2583.jpg?t=st=1781188829~exp=1781192429~hmac=180eeda6af57411c0718a25533440f637b2c74895aeb4ff96b60f08cfb2f56fb&w=1480')",
        backgroundRepeat: "repeat",
        backgroundSize: "50%",
        backgroundAttachment: "fixed",
      }}
    >
      <p className="text-4xl my-custom-font uppercase font-bold text-base-content p-4">
        Experience
      </p>
      <ul className="timeline timeline-vertical md:mt-3 w-full max-w-[95%] m-auto">
        {/* SKYE MEDIA CORP */}
        <li className="grid-cols-[35%_auto_1fr] md:grid-cols-[20%_auto_1fr]">
          <div className="timeline-start my-custom-font text-base lg:text-sm font-semibold opacity-60 text-right pr-2">
            APR 2021 - JUN 2026
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box w-full p-6 bg-base-200">
            <p className="text-base my-custom-font md:text-2xl font-bold uppercase">
              Senior Web Designer & Frontend Developer
            </p>
            <p className="text-base my-custom-font opacity-50 md:text-xl font-semibold">
              SKYE MEDIA CORP
            </p>
            <p className="text-base  lg:leading-6  pt-3 pt-3 general-font">
              My responsibilities include: creating new sites; maintaining
              client websites, promos, and games; designing components and
              interfaces; and implementing marketing material.
            </p>
          </div>
          <hr />
        </li>

        {/* I LIVE IT - AGENCY */}
        <li className="grid-cols-[35%_auto_1fr] md:grid-cols-[20%_auto_1fr]">
          <hr />
          <div className="timeline-start my-custom-font text-base lg:text-sm font-semibold opacity-60 text-right pr-2">
            SEP 2017 - DEC 2020
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box w-full p-6 bg-base-200">
            <p className="text-base my-custom-font md:text-2xl font-bold uppercase">
              UX/UI Designer
            </p>
            <p className="text-base my-custom-font opacity-50 md:text-xl font-semibold">
              I LIVE IT - AGENCY
            </p>
            <p className="text-base  lg:leading-6  pt-3 general-font">
              My responsibilities included: UX/UI design, implementing
              advertising emailers, creating MMS/video animations, and designing
              client invoicing material.
            </p>
          </div>
          <hr />
        </li>

        {/* INCUBETA HOLDINGS */}
        <li className="grid-cols-[35%_auto_1fr] md:grid-cols-[20%_auto_1fr]">
          <hr />
          <div className="timeline-start my-custom-font text-base lg:text-sm font-meduim opacity-60 text-right pr-2">
            AUG 2014 - SEP 2017
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box w-full p-6 bg-base-200">
            <p className="text-base my-custom-font md:text-2xl font-bold uppercase">
              Web Designer
            </p>
            <p className="text-base my-custom-font opacity-50 md:text-xl font-semibold">
              INCUBETA HOLDINGS
            </p>
            <p className="text-base  lg:leading-6  pt-3 general-font">
              My responsibilities included: website creation and management,
              SEO/Google tracking, and designing online marketing material.
            </p>
          </div>
          <hr />
        </li>

        {/* JTS CAR SOUND & SECURITY */}
        <li className="grid-cols-[35%_auto_1fr] md:grid-cols-[20%_auto_1fr]">
          <hr />
          <div className="timeline-start my-custom-font text-base lg:text-sm font-meduim opacity-60 text-right pr-2">
            MAR 2013 - APR 2014
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box w-full p-6 bg-base-200">
            <p className="text-base my-custom-font md:text-2xl font-bold uppercase">
              Floor & Operations Manager
            </p>
            <p className="text-base my-custom-font opacity-50 md:text-xl font-semibold">
              JTS CAR SOUND & SECURITY
            </p>
            <p className="text-base  lg:leading-6  pt-3 general-font">
              My responsibilities included: driving sales, managing staff, and
              conducting insurance inspections.
            </p>
          </div>
          <hr />
        </li>

        {/* M2 PARTITIONS */}
        <li className="grid-cols-[35%_auto_1fr] md:grid-cols-[20%_auto_1fr]">
          <hr />
          <div className="timeline-start my-custom-font text-base lg:text-sm font-semibold opacity-60 text-right pr-2">
            AUG 2012 - MAR 2013
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box w-full p-6 bg-base-200">
            <p className="text-base my-custom-font md:text-2xl font-bold uppercase">
              Site Foreman & General Manager
            </p>
            <p className="text-base my-custom-font opacity-50 md:text-xl font-semibold">
              M2 PARTITIONS
            </p>
            <p className="text-base  lg:leading-6  pt-3 general-font">
              My responsibilities included: quality assurance, managing staff,
              and handling client expectations.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
