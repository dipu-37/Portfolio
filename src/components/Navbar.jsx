import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header>
      <nav className="px-2 sm:px-4 py-3 border-b lg:border-none border-gray-100 dark:border-gray-800 bg-white w-full lg:w-2/3 fixed top-0 z-20">
        <div className="container flex flex-row-reverse lg:flex-row flex-wrap items-center justify-between mx-auto">
          {/* Logo or Left Icon */}
          <a href="#" className="pr-2" title="Razibul Hasan Dipu">
            <FontAwesomeIcon icon={faCode} className="text-blue-600" size="lg" />
          </a>

          {/* Hamburger Menu for Mobile */}
          <button
            data-collapse-toggle="navbar"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 md:hidden"
            aria-controls="navbar"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>

          {/* Navbar Items */}
          <div className="hidden w-full md:block md:w-auto" id="navbar">
            <ul className="flex flex-col items-start lg:items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-blue-700 hover:bg-gray-100 md:hover:bg-transparent lg:hover:bg-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:hover:bg-transparent dark:hover:bg-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
                >
                  Hire me
                </a>
              </li>
              <li>
                {/* Theme Toggle */}
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
