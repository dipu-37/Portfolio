import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between p-6">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="#" class="hover:underline">
            Razibul Hasan Dipu
          </a>
        </span>
        <ul class="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Back to top <i class="fa-solid fa-arrow-turn-up"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
