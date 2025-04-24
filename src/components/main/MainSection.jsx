import React from "react";
import HeaderTag from "../HeaderTag";
import QualificationInfo from "../QualificationInfo";
import TechSkills from "../TechSkills";
import RecentWorks from "../RecentWorks";



const MainSection = () => {
  return (
    <div>
      <main className="px-4 lg:px-8 pt-16">
        <section className="py-6 lg:py-14">
          <div className="container flex flex-col lg:flex-row items-start justify-start">
            {/* Main content left */}
            <div className="lg:pr-8 w-2/6 lg:w-full pb-4">
              <img
                className="w-full rounded-full p-1 ring-2 ring-blue-400 dark:ring-gray-500 shadow-lg"
                src="/src/assets/image/dipu.jpg"
                alt="Dipu"
              />
            </div>

            {/* Main content right */}
            <div>
              {/* Header area */}
              <div className="header mb-16">
                <h1 className="text-2xl font-bold ">Razibul Hasan Dipu</h1>
                <p className="text-sm text-gray-700 dark:text-gray-500">
                  Analytical, self-motivating and confident.
                </p>
                <h2 className="text-md font-normal text-gray-800 dark:text-gray-400 mt-2">
                  MERN, Full-Stack Web Developer.
                </h2>

                <div className="flex mt-6">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/md.rhdipu.1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mr-4 font-light text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 
        3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 
        1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 
        0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 
        21.128 22 16.991 22 12z"
                      />
                    </svg>
                    <span>/rhdipu1</span>
                    <span className="sr-only">Facebook</span>
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://twitter.com/your_twitter_handle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mr-4 font-light text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 
        4.48 0 0022.43.36a9.32 9.32 0 01-2.88 1.1A4.52 
        4.52 0 0016.11 0c-2.5 0-4.51 2.15-4.51 4.79 
        0 .38.04.75.12 1.1C7.69 5.67 4.07 3.89 1.64 
        1.15c-.42.78-.66 1.68-.66 2.65 0 1.82.9 
        3.42 2.27 4.36a4.45 4.45 0 01-2.05-.58v.06c0 
        2.54 1.74 4.66 4.07 5.14a4.52 4.52 0 01-2.04.08 
        4.55 4.55 0 004.23 3.23A9.06 9.06 0 010 
        19.54a12.94 12.94 0 007.29 2.3c8.75 0 
        13.54-7.72 13.54-14.42 0-.22-.01-.43-.02-.64A9.93 
        9.93 0 0023 3z"
                      />
                    </svg>
                    <span>/dipu</span>
                    <span className="sr-only">Twitter</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/dipu-37"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-light text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 
        2.865 8.18 6.839 9.504.5.091.682-.217.682-.483 
        0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.637.069-.624.069-.624 
        1.003.071 1.532 1.048 1.532 1.048.892 1.554 
        2.341 1.105 2.91.845.092-.665.35-1.105.636-1.359-2.22-.253-4.555-1.14-4.555-5.07 
        0-1.12.39-2.033 1.03-2.75-.103-.254-.446-1.273.098-2.654 
        0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 
        1.705.115 2.504.337 1.91-1.296 2.748-1.026 
        2.748-1.026.546 1.381.202 2.4.1 2.654.64.717 
        1.028 1.63 1.028 2.75 0 3.94-2.338 4.814-4.566 
        5.063.36.316.682.937.682 1.888 
        0 1.363-.012 2.46-.012 2.797 
        0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 
        6.484 17.523 2 12 2z"
                      />
                    </svg>
                    <span>/gitdipu</span>
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>

                <div id="header-tags" className="my-4">
                  {/* Header tags here */}
                  <HeaderTag></HeaderTag>
                </div>
              </div>

              {/* Objective */}
              <div className="objective mb-16">
                <div className="flex items-center">
                  <h1 className="text-2xl font-semibold text-gray-800 ">
                    Objective
                  </h1>
                </div>
                <p className="text-gray-800 dark:text-gray-400 text-justify mt-3">
                  A motivated individual with in-depth knowledge of programming
                  languages, especially JavaScript and development tools. I am
                  skilled & experienced in both Front-end and Back-end Web
                  Development, seeking a position as a Web Developer in a
                  growth-oriented company where I can use my skills to the
                  advantage of the company while having the scope to develop my
                  own skills.
                </p>
              </div>
              <hr className="my-8 h-px bg-gray-100 border-0 dark:bg-gray-800" />

              {/* Qualifications */}
              <div className="mb-16">
                <div className="flex items-center">
                  <h1 className="text-2xl font-semibold text-gray-800 ">
                    Qualifications
                  </h1>
                </div>
                <ol
                  id="qualification"
                  className="lg:w-3/4 relative border-l border-gray-200 dark:border-gray-700 mt-6"
                >
                  {/* Qualificational Info */}
                  <QualificationInfo></QualificationInfo>
                </ol>
              </div>
              <hr className="my-8 h-px bg-gray-100 border-0 dark:bg-gray-800" />

              {/* Tech Skills */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <h1 className="text-2xl font-semibold text-zinc-800 ">
                    Tech Skills
                  </h1>
                </div>
                <div>
                  {/* Tech Skills here */}
                  <TechSkills></TechSkills>
                </div>
              </div>
              <hr className="my-8 h-px bg-gray-100 border-0 dark:bg-gray-800" />

              {/* Recent Works */}
              <div className="mb-16">
                <div className="flex items-center mb-4">
                  <h1 className="text-2xl font-semibold text-gray-800 ">
                    Recent works
                  </h1>
                </div>
                <div
                  id="recent-works"
                 
                >
                  {/* Recent works here */}
                  <RecentWorks></RecentWorks>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainSection;
