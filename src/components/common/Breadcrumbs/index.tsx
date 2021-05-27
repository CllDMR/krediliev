import { FC, Fragment, useState } from "react";

export const Breadcrumbs: FC<{ page: string }> = ({ page }) => {
  return (
    <div className="container mx-auto flex justify-start items-center mt-28 xl:mt-2 md:mt-28 sm:mt-28">
      <nav className=" text-black font-bold my-8" aria-label="Breadcrumb">
        <ol className=" list-none p-0 inline-flex">
          <li className="flex items-center">
            <a
              href="#"
              className="text-[#d8d8d8] text-[12px]"
              aria-current="page"
            >
              Home
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-[#d8d8d8]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>
            <a
              href="#"
              className="text-[#664fbd] text-[12px]"
              aria-current="page"
            >
              {page}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};
