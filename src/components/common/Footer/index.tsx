import { FC, useState } from "react";

export const Footer: FC<{}> = ({}) => {
  const [mode, setMode] = useState("auto");
  return (
    <>
      <div className="pt-12">
        <footer id="footer" className="relative z-30 dark:bg-gray-900 pt-24">
          <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
            <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
              <div className="lg:flex">
                <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                  <div className="w-full lg:w-1/2 px-6">
                    <ul>
                      <li>
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Components
                        </a>
                      </li>
                      <li className="mt-6">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Templates
                        </a>
                      </li>
                      <li className="mt-6">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Pricing
                        </a>
                      </li>
                      <li className="mt-6">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          FAQ
                        </a>
                      </li>
                      <li className="mt-6">
                        <a
                          href="javascript:void(0)"
                          className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        >
                          Documentation
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 px-6">
                    <ul>
                      <li>
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Free components
                        </a>
                      </li>

                      <li className="mt-6">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Blog
                        </a>
                      </li>
                      <li className="mt-6">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Changelog
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex">
                  <div className="w-full lg:w-1/2 px-6">
                    <ul>
                      <li>
                        <a
                          href="/www.google.com"
                          className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        >
                          Privacy policy
                        </a>
                      </li>
                      <li className="mt-6">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Terms of service
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                    <div className="flex items-center mb-6">
                      <a href="javascript:void(0)">
                        <div className="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand ">
                          <svg
                            className="footer-icon feather feather-github"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div className="pl-4">
                          <svg
                            className="footer-icon feather feather-twitter text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand "
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16 flex flex-col justify-center items-center">
            <a>
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
            </a>

            <p className=" text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
              Krediliev.com bir Turok Yapı Teknoloji iştirakidir.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
