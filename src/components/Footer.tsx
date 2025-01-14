import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ThemeToggler } from "./ThemeToggler";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer>
      <MaxWidthWrapper>
        <div className="relative z-10 mt-3 flex flex-col items-center justify-center border-t border-gray-200 py-6">
          <div className="flex flex-row items-center text-center text-xs text-gray-500 dark:text-slate-200">
            © {getYear()} by{" "}
            <a
              href="https://github.com/FlashInTheNight"
              target="_blank"
              className="ml-1 text-gray-500 transition-all hover:text-gray-700 dark:text-slate-200 dark:hover:text-gray-200"
            >
              FlashInTheNight
            </a>
            <div className="mx-2 h-5 border-r border-gray-400"></div>
            <ThemeToggler />
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
