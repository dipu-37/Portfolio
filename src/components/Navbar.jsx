import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white shadow-sm fixed top-0 left-0 right-0  z-50 lg:w-2/3 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="bg-gray-700 btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#qualification" className="">
                  Qualifications
                </a>
              </li>
              <li>
                <a href="#skills" className="">
                  Skills
                </a>
              </li>
              <li>
                <a href="#recentWork" className="">
                  RecentWork
                </a>
              </li>
             
            </ul>
          </div>
          <a href="#" className="text-blue-500 text-xl pl-2 hidden sm:block">
            Razibul Hasan Dipu
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="#"
                className=" bg-gray-100 border border-gray-100 hover:bg-gray-50 font-medium rounded-md text-sm px-3.5 py-2 mr-2 mb-2  text-blue-300 "
              >
                Home
              </a>
            </li>
            <li>
              <a href="#qualification" className="text-gray-800">
                Qualifications
              </a>
            </li>
            <li>
              <a href="#skills" className="text-gray-800">
                Skills
              </a>
            </li>
            <li>
              <a href="#recentWork" className="text-gray-800">
                RecentWork
              </a>
            </li>
            <li>
                <a href="https://github.com/dipu-37" className="text-gray-800">
                Resume
                </a>
              </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <header>
//       <nav className="px-2 sm:px-4 py-3 border-b lg:border-none border-gray-100 dark:border-gray-800 bg-white w-full lg:w-2/3 fixed top-0 z-20">
//         <div className="container flex flex-row-reverse lg:flex-row flex-wrap items-center justify-between mx-auto">
//           {/* Logo or Left Icon */}
//           <a href="#" className="pr-2" title="Razibul Hasan Dipu">
//             <FontAwesomeIcon icon={faCode} className="text-blue-600" size="lg" />
//           </a>

//           {/* Hamburger Menu for Mobile */}
//           <button
//             data-collapse-toggle="navbar"
//             type="button"
//             className="inline-flex items-center p-2 text-sm text-gray-500 md:hidden"
//             aria-controls="navbar"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <FontAwesomeIcon icon={faBars} size="xl" />
//           </button>

//           {/* Navbar Items */}
//           <div className="hidden w-full md:block md:w-auto" id="navbar">
//             <ul className="flex flex-col items-start lg:items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pl-3 pr-4 text-blue-700 hover:bg-gray-100 md:hover:bg-transparent lg:hover:bg-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:hover:bg-transparent dark:hover:bg-gray-700"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Resume
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
//                 >
//                   Hire me
//                 </a>
//               </li>
//               <li>
//                 {/* Theme Toggle */}

//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
