import { FC, useState } from "react";
import Link from "next/link";

export const Navbar: FC<{}> = ({}) => {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);

  return (
    <>
      <div className="bg-gray-200  w-full  ">
        {/* Code block starts */}
        <nav className="bg-white shadow xl:block hidden ">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center xl:hidden">
                <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                  <div className="visible xl:hidden">
                    <ul className="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                      <li className=" xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        <Link href="/favorites">
                          <span className="ml-2 font-bold text-[14px]">
                            Favorilerim
                          </span>
                        </Link>
                      </li>
                      <li className="border-b border-gray-300  xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span className="ml-2 font-bold">
                          Giriş Yap / Üye Ol
                        </span>
                      </li>
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                            <img
                              className="rounded h-10 w-10 object-cover"
                              src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                              alt="logo"
                            />
                          </div>
                          <p className="text-sm ml-2 cursor-pointer">Ayşe Öz</p>
                          <div className="sm:ml-2 text-white relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={7} r={4} />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                          <span className="ml-2">Profile</span>
                        </div>
                      </li>
                    </ul>
                    <svg
                      // onClick={() => MenuHandler(this, true)}
                      aria-haspopup="true"
                      aria-label="Main Menu"
                      xmlns="http://www.w3.org/2000/svg"
                      className="show-m-menu icon icon-tabler icon-tabler-menu"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={8} x2={20} y2={8} />
                      <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                  </div>
                  <div
                    className="hidden close-m-menu text-gray-700"
                    // onClick={() => MenuHandler(this, false)}
                  >
                    <svg
                      aria-label="Close"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex w-full  sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="323"
                    height="58.412"
                    viewBox="0 0 323 58.412"
                  >
                    <g id="header-logo" transform="translate(0.079 -5.222)">
                      <text
                        id="krediliev.com"
                        transform="translate(95.921 46.222)"
                        fill="#262626"
                        fontSize="33"
                        fontFamily="Poppins-SemiBold, Poppins"
                        fontWeight="600"
                      >
                        <tspan x="0" y="0">
                          krediliev.
                        </tspan>
                        <tspan
                          y="0"
                          fontFamily="Poppins-Regular, Poppins"
                          fontWeight="400"
                        >
                          com
                        </tspan>
                      </text>
                      <g
                        id="_01"
                        data-name="01"
                        transform="translate(-0.079 5.222)"
                      >
                        <path
                          id="Path_18910"
                          data-name="Path 18910"
                          d="M271.193,198.267l-26.9,26.9-11.115-11.115-9.552,9.552,20.668,20.667,36.453-36.45Z"
                          transform="translate(-196.724 -185.858)"
                          fill="#6c46b9"
                        />
                        <path
                          id="Path_18911"
                          data-name="Path 18911"
                          d="M206.532,173.568l-16.462,16.46v-5.152H181.05v14.173l-10.971,10.97,9.554,9.553,26.9-26.9,11.114,11.114,9.552-9.552Z"
                          transform="translate(-170.079 -173.568)"
                          fill="#262626"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex">
                <div className="hidden xl:flex md:mr-6 xl:mr-16">
                  <a
                    href="/"
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <div className="flex justify-center rounded-xl w-full">
                      <div className="relative w-full">
                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-search"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="#A0AEC0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                          </svg>
                        </div>
                        <input
                          className="bg-gray-100 focus:outline-none rounded-full w-[275px] h-[50px] text-sm text-gray-500  pl-10 py-2"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="/"
                    className="text-[14px] flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </span>
                    Favorilerim
                  </a>
                  <a
                    href="/"
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    Giriş Yap / Üye Ol
                  </a>
                </div>
                <div className="hidden xl:flex items-center">
                  <div className="relative md:mr-6 my-2">
                    <button className="rounded-full h-[46px] flex items-center focus:outline-none bg-[#664fbd] border-gray-300 border transition duration-150 ease-in-out hover:bg-[#7861BD]  text-white px-5 py-2 ">
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </i>
                      Ücretsiz İlan Ver
                    </button>
                  </div>
                  <div className="ml-6 relative">
                    <div
                      className="flex items-center relative"
                      onClick={() => setProfile(!profile)}
                    >
                      {profile && (
                        <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 ">
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                              </svg>
                              <span className="ml-2">My Profile</span>
                            </div>
                          </li>
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-help"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={12} cy={12} r={9} />
                              <line x1={12} y1={17} x2={12} y2="17.01" />
                              <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>
                            <span className="ml-2">Help Center</span>
                          </li>
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-settings"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <circle cx={12} cy={12} r={3} />
                            </svg>
                            <span className="ml-2">Account Settings</span>
                          </li>
                        </ul>
                      )}
                      <div className="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                          alt="logo"
                        />
                      </div>
                      <div className="ml-2 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40 ">
            <div className="w-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="223"
                height="58.412"
                viewBox="0 0 323 58.412"
              >
                <g id="header-logo" transform="translate(0.079 -5.222)">
                  <text
                    id="krediliev.com"
                    transform="translate(95.921 46.222)"
                    fill="#262626"
                    fontSize="33"
                    fontFamily="Poppins-SemiBold, Poppins"
                    fontWeight="600"
                  >
                    <tspan x="0" y="0">
                      krediliev.
                    </tspan>
                    <tspan
                      y="0"
                      fontFamily="Poppins-Regular, Poppins"
                      fontWeight="400"
                    >
                      com
                    </tspan>
                  </text>
                  <g
                    id="_01"
                    data-name="01"
                    transform="translate(-0.079 5.222)"
                  >
                    <path
                      id="Path_18910"
                      data-name="Path 18910"
                      d="M271.193,198.267l-26.9,26.9-11.115-11.115-9.552,9.552,20.668,20.667,36.453-36.45Z"
                      transform="translate(-196.724 -185.858)"
                      fill="#6c46b9"
                    />
                    <path
                      id="Path_18911"
                      data-name="Path 18911"
                      d="M206.532,173.568l-16.462,16.46v-5.152H181.05v14.173l-10.971,10.97,9.554,9.553,26.9-26.9,11.114,11.114,9.552-9.552Z"
                      transform="translate(-170.079 -173.568)"
                      fill="#262626"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex items-center">
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div className="w-full  block xl:hidden sm:block ">
            <section
              id="bottom-navigation"
              className="block fixed inset-x-0 bottom-0 z-50 bg-white shadow"
            >
              <div id="tabs" className="flex justify-between">
                <a
                  href="#"
                  className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54.023"
                    height="58.412"
                    viewBox="0 0 84.023 58.412"
                    className="inline-block mb-1"
                  >
                    <g
                      id="Group_1216"
                      data-name="Group 1216"
                      transform="translate(-37 -1256)"
                    >
                      <path
                        id="Path_18910"
                        data-name="Path 18910"
                        d="M271.193,198.267l-26.9,26.9-11.115-11.115-9.552,9.552,20.668,20.667,36.453-36.45Z"
                        transform="translate(-159.724 1070.142)"
                        fill="#6c46b9"
                      />
                      <path
                        id="Path_18911"
                        data-name="Path 18911"
                        d="M206.532,173.568l-16.462,16.46v-5.152H181.05v14.173l-10.971,10.97,9.554,9.553,26.9-26.9,11.114,11.114,9.552-9.552Z"
                        transform="translate(-133.079 1082.432)"
                        fill="#262626"
                      />
                    </g>
                  </svg>
                  {/* <span className="tab tab-home block text-xs">Home</span> */}
                </a>
                <a
                  href="#"
                  className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="43.079"
                    viewBox="0 0 57.863 43.079"
                    className="inline-block mb-1"
                  >
                    <g
                      id="Group_1208"
                      data-name="Group 1208"
                      transform="translate(-187.779 -1464)"
                    >
                      <g
                        id="Group_1199"
                        data-name="Group 1199"
                        transform="translate(203 1464)"
                      >
                        <g
                          id="Ellipse_8"
                          data-name="Ellipse 8"
                          fill="none"
                          stroke="#262626"
                          strokeWidth="3"
                        >
                          <circle
                            cx="17.991"
                            cy="17.991"
                            r="17.991"
                            stroke="none"
                          />
                          <circle
                            cx="17.991"
                            cy="17.991"
                            r="16.491"
                            fill="none"
                          />
                        </g>
                        <line
                          id="Line_21"
                          data-name="Line 21"
                          x2="11.816"
                          y2="11.416"
                          transform="translate(29.784 30.584)"
                          fill="none"
                          stroke="#262626"
                          strokeWidth="3"
                        />
                      </g>
                      <g
                        id="Group_1207"
                        data-name="Group 1207"
                        transform="translate(194.779 1366.01)"
                      >
                        <g
                          id="Group_635"
                          data-name="Group 635"
                          transform="translate(-7 108.623)"
                        >
                          <path
                            id="Path_353"
                            data-name="Path 353"
                            d="M1.8,20.9a1.8,1.8,0,0,0,0,3.593H12.3A13.721,13.721,0,0,1,13.774,20.9Z"
                            transform="translate(0 -20.9)"
                            fill="#262626"
                          />
                          <path
                            id="Path_354"
                            data-name="Path 354"
                            d="M11.977,33.7H1.8A1.8,1.8,0,0,0,0,35.5H0a1.8,1.8,0,0,0,1.8,1.8H12.023a15.761,15.761,0,0,1-.184-2.119C11.885,34.667,11.931,34.161,11.977,33.7Z"
                            transform="translate(0 -27.804)"
                            fill="#262626"
                          />
                          <path
                            id="Path_355"
                            data-name="Path 355"
                            d="M1.8,46.4a1.8,1.8,0,0,0,0,3.593H14.188a14.305,14.305,0,0,1-1.7-3.593H1.8Z"
                            transform="translate(0 -34.653)"
                            fill="#262626"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className="tab tab-kategori block text-xs">
                    Kategoriler
                  </span>
                </a>
                <a
                  href="#"
                  className="w-full focus:text-teal-500 hover:text-teal-500 items-center justify-center flex flex-col text-center pt-2 pb-1"
                >
                  <div className=" w-12 h-12 bg-[#664fbd] rounded-full text-[35px] text-white  ">
                    <p className="mb-7 ">+</p>
                  </div>
                  <span className="tab tab-explore block text-xs">
                    İlan Ver
                  </span>
                </a>
                <a
                  href="#"
                  className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="45.37"
                    viewBox="0 0 47.343 45.37"
                    className="inline-block mb-1"
                  >
                    <path
                      id="star"
                      d="M10.6,45.862a2.52,2.52,0,0,1-2.452-3.077L11.19,29.368.861,20.31a2.518,2.518,0,0,1,1.426-4.4l13.667-1.241,5.4-12.645a2.516,2.516,0,0,1,4.628,0l5.4,12.647,13.664,1.241a2.519,2.519,0,0,1,1.43,4.4L36.154,29.366,39.2,42.782A2.515,2.515,0,0,1,35.456,45.5L23.672,38.458,11.887,45.5A2.522,2.522,0,0,1,10.6,45.862ZM23.672,35.425a2.522,2.522,0,0,1,1.29.357l11.122,6.652L33.209,29.771a2.516,2.516,0,0,1,.8-2.452l9.753-8.553-12.9-1.172a2.513,2.513,0,0,1-2.091-1.525L23.672,4.136l-5.1,11.935a2.506,2.506,0,0,1-2.085,1.519L3.582,18.761l9.753,8.553a2.511,2.511,0,0,1,.8,2.454L11.259,42.431l11.122-6.65A2.521,2.521,0,0,1,23.672,35.425ZM15.85,14.91a.006.006,0,0,1,0,0ZM31.489,14.9l0,0S31.491,14.907,31.489,14.9Zm0,0"
                      transform="translate(0 -0.492)"
                      fill="#262626"
                    />
                  </svg>
                  <span className="tab tab-whishlist block text-xs">
                    Favorilerim
                  </span>
                </a>
                <a
                  href="/"
                  className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="user"
                    width="28"
                    height="42"
                    viewBox="0 0 42 42"
                    className="inline-block mb-1"
                  >
                    <g
                      id="Group_1087"
                      data-name="Group 1087"
                      transform="translate(0)"
                    >
                      <path
                        id="Path_18915"
                        data-name="Path 18915"
                        d="M35.849,27.151a20.919,20.919,0,0,0-7.98-5.005,12.141,12.141,0,1,0-13.738,0A21.033,21.033,0,0,0,0,42H3.281a17.719,17.719,0,1,1,35.437,0H42A20.863,20.863,0,0,0,35.849,27.151ZM21,21a8.859,8.859,0,1,1,8.859-8.859A8.869,8.869,0,0,1,21,21Z"
                        transform="translate(0)"
                        fill="#262626"
                      />
                    </g>
                  </svg>
                  <span className="tab tab-account block text-xs">
                    Giriş Yap
                  </span>
                </a>
              </div>
            </section>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
};
