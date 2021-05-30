import { FC, useState } from "react";

export const AdsCard: FC<{}> = ({}) => {
  return (
    <>
      <div className="bg-white w-full h- h-auto rounded shadow-md flex card mb-5">
        <img
          className="w-1/4 h-auto rounded-l-lg "
          src="/images/home-05.jpg"
          alt="Room Image"
        />
        {/* <Image
                      className="w-1/2 h-full rounded-l-lg "
                      layout="fixed"
                      width="100%"
                      height="100%"
                      src="/images/home-05.jpg"
                      objectFit="cover"
                      objectPosition="center"
                    /> */}
        <div className="w-full flex flex-col ">
          <div className="p-4 pb-0 flex-1 rounded-r-lg">
            <div className="flex">
              <div className="flex flex-col flex-1">
                <h3 className="font-light mb-1 flex-1 text-red-500">
                  Satılık Daire
                </h3>
                <h3 className="text-[12px] mb-1  text-[#9a9a9a]">
                  #56465465465465
                </h3>
              </div>

              <h3 className="font-semibold mb-1 text-[#262626] text-[14px] xl:text-[20px] md:text-[20px] sm:text-[14px]">
                4.250.000TL
              </h3>
            </div>

            <div className="text-xs flex items-center mb-0 xl:mb-4 md:mb-4 sm:mb-0 text-[#9a9a9a]">
              <i className="fas fa-map-marker-alt mr-1 text-grey-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#262626]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </i>
              İzmir Çeşme-6 Eylül
            </div>

            <span className="text-[14px] xl:text-xl md:text-md sm:text-[14px] text-[#262626]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
            <div className="xl:flex md:flex sm:hidden hidden mb-1 items-center mt-4">
              <div className="pr-2 text-xs text-[#9a9a9a]">m2 (Brüt): 550</div>
              <div className="px-2 text-xs text-[#9a9a9a]">Oda Sayısı: 4+1</div>
            </div>
          </div>
          <button className="bg-gray-100 p-3  xl:flex md:flex sm:hidden hidden  items-center justify-between transition hover:bg-grey-light">
            <span>Düzenle</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#262626]"
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
          </button>
        </div>
      </div>
    </>
  );
};
