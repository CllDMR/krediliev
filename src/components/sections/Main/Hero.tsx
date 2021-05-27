import { FC } from "react";
import Image from "next/image";
import { ListBox } from "@components/common";

export const MainHero: FC<{}> = ({}) => {
  return (
    <>
      <div className=" relative w-full xl:h-[550px] md:h-[550px] sm:h-[850px] xs:h-[850px]   flex flex-col items-center justify-center ">
        <Image
          layout="fill"
          src="/images/bg-desktop.png"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="z-10 flex flex-col items-center justify-center flex-1">
          <h1 className="xl:text-[50px] sm:text-[25px] text-[25px] xl:mt-0 mt-28  text-[#262626]">
            <b>En Uygun</b> Satılık Daireler
          </h1>
          <p className="xl:text-[18px] sm:text-[12px] text-[12px] text-[#262626] text-center">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Nullam id elit leo.
          </p>
          {/* form-start */}
          <div className=" space-x-6 flex justify-start items-start">
            <button className="w-[108px] h-[51px] bg-[#ff5a61] rounded-md text-white">
              Kiralık
            </button>
            <button className="w-[108px] h-[51px] bg-[#ff5a61] rounded-md text-white">
              Satılık
            </button>
          </div>
          <div className="bg-white  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5  shadow-md rounded px-8 pt-6 pb-6 mb-4 my-2 border-8 border-white-50 border-opacity-100">
            <div className="ml-2 mr-2 mb-2">
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Kelime Giriniz"
                autoComplete="given-name"
                className=" px-3 mt-1 h-[50px] w-full  sm:text-sm border border-red rounded-md placeholder-pl-2 "
              />
            </div>
            <div className="ml-2 mr-2 mb-2">
              <ListBox />
            </div>
            <div className="ml-2 mr-2 mb-2">
              <ListBox />
            </div>
            <div className="ml-2 mr-2 mb-2">
              <ListBox />
            </div>
            <div className="ml-2 mr-2 mb-2">
              <ListBox />
            </div>
            <div className="ml-2 mr-2 mb-2">
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Kelime Giriniz"
                autoComplete="given-name"
                className=" px-3 mt-1 h-[50px] w-full  sm:text-sm border border-red rounded-md placeholder-pl-2 "
              />
            </div>
            <div className="ml-2 mr-2 mb-2">
              <ListBox />
            </div>
            <div className="ml-2 mr-2 mb-2">
              <ListBox />
            </div>
            <div>
              <button className=" ml-2 mr-2 mb-2 rounded-full  w-40 text-center h-[46px] flex items-center justify-center h-[48px] focus:outline-none bg-[#664fbd] border-gray-300 border transition duration-150 ease-in-out hover:bg-[#7861BD]  text-white px-5 py-2 ">
                Ara
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
