import { FC, useState } from "react";

export const PageNav: FC<{}> = ({}) => {
  const [activeStatus, setActiveStatus] = useState(1);
  return (
    <div className="mx-auto h-[60px] rounded-xl container py-8 px-4 flex items-center justify-center w-full  bg-white">
      <ul className="w-full hidden md:flex items-center pb-2 justify-center  xl:space-x-64">
        <li
          onClick={() => setActiveStatus(1)}
          className={
            activeStatus == 1
              ? "py-2 px-4 cursor-pointer border-b-[2px] border-[#664fbd]  font-semibold font-poppins ease-in duration-150   text-xs xl:text-sm leading-none text-center text-black  "
              : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-[#262626] "
          }
        >
          İLANLARIM
        </li>
        <li
          onClick={() => setActiveStatus(2)}
          className={
            activeStatus == 2
              ? "py-2 px-4 cursor-pointer border-b-[2px] border-[#664fbd]  font-semibold font-poppins ease-in duration-150   text-xs xl:text-sm leading-none text-center text-black  "
              : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-[#262626] "
          }
        >
          FAVORİLERİM
        </li>
        <li
          onClick={() => setActiveStatus(3)}
          className={
            activeStatus == 3
              ? "py-2 px-4 cursor-pointer border-b-[2px] border-[#664fbd]  font-semibold font-poppins ease-in duration-150   text-xs xl:text-sm leading-none text-center text-black  "
              : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-[#262626] "
          }
        >
          MESAJLARIM
        </li>
        <li
          onClick={() => setActiveStatus(4)}
          className={
            activeStatus == 4
              ? "py-2 px-4 cursor-pointer border-b-[2px] border-[#664fbd]  font-semibold font-poppins ease-in duration-150   text-xs xl:text-sm leading-none text-center text-black  "
              : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-[#262626] "
          }
        >
          ÜYELİK BİLGİLERİM
        </li>
      </ul>
      <div className="md:hidden relative w-11/12 mx-auto bg-white rounded">
        <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-selector"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#A0AEC0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="8 9 12 5 16 9" />
            <polyline points="16 15 12 19 8 15" />
          </svg>
        </div>
        <select
          aria-label="Selected tab"
          className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
        >
          <option selected className="text-sm text-gray-600">
            İlanlarım
          </option>
          <option className="text-sm text-gray-600">Favorilerim </option>
          <option className="text-sm text-gray-600">Mesajlarım </option>
          <option className="text-sm text-gray-600">Üyelik Bilgilerim</option>
        </select>
      </div>
    </div>
  );
};
