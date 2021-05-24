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
          <div className="space-x-4 flex justify-start items-start">
            <button>sad</button>
            <button>sad</button>
          </div>
          <div className="bg-white xl:w-[1170px]  xl:h-[184px] lg:h-[184px] md:h-[184px] sm:h-[554px] xs:h-[654px] shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-6 md:flex  mb-6 ">
              <div className=" px-3 mb-6 md:mb-0 w-80">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Kelime Giriniz"
                  autoComplete="given-name"
                  className=" px-3 mt-1 h-[50px] w-full  sm:text-sm border border-red rounded-md placeholder-pl-2 "
                />
              </div>
              <div className=" px-3 mb-6 md:mb-0">
                <ListBox />
                {/* <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="mt-1 h-[50px] block w-full py-2 px-3 border border-red bg-white rounded-md  focus:outline-none f sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select> */}
              </div>
              <div className=" px-3 mb-6 md:mb-0">
                <ListBox />
              </div>
              <div className=" px-3 mb-6 md:mb-0">
                <ListBox />
              </div>
              <div className=" px-3 mb-6 md:mb-0">
                <ListBox />
              </div>
            </div>

            <div className="-mx-6 md:flex  mb-6 ">
              <div className=" px-3 mb-6 md:mb-0 w-80">
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className=" px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>

              <button className="rounded-full  w-40 text-center h-[46px] flex items-center justify-center h-[48px] focus:outline-none bg-[#664fbd] border-gray-300 border transition duration-150 ease-in-out hover:bg-[#7861BD]  text-white px-5 py-2 ">
                Ara
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
