import { FC, useState } from "react";
import Image from "next/image";

export const Eposta: FC<{}> = ({}) => {
  return (
    <>
      <div className="container flex justify-center items-center">
        <div className="flex flex-col xl:w-1/2 md:w-1/2 sm:w-[100%] w-[90%]">
          <form action="">
            <div className="text-[14px] mt-4">
              <p>
                <label for="name" className="bg-white text-gray-600 px-1">
                  Mevcut E-posta Adresi *
                </label>
              </p>
              <p>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Mevcut E-posta Adresi Giriniz"
                  autoComplete="given-name"
                  className=" px-3  mt-3 h-[50px] w-full  sm:text-sm border  rounded-md placeholder-pl-2 focus:outline-none focus:border-[#664fbd]"
                />
              </p>
            </div>
            <div className="text-[14px] mt-4">
              <p>
                <label for="name" className="bg-white text-gray-600 px-1">
                  Yeni E-posta Adresi *
                </label>
              </p>
              <p>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Yeni E-posta Adresi Giriniz"
                  autoComplete="given-name"
                  className=" px-3 mt-3  h-[50px] w-full  sm:text-sm border  rounded-md placeholder-pl-2 focus:outline-none focus:border-[#664fbd] "
                />
              </p>
            </div>
            <div className="text-[14px] mt-4">
              <p>
                <label for="name" className="bg-white text-gray-600 px-1">
                  Yeni E-posta Adresi Tekrar *
                </label>
              </p>
              <p>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Yeni E-posta Adresi Tekrar Giriniz"
                  autoComplete="given-name"
                  className=" px-3 mt-3  h-[50px] w-full  sm:text-sm border  rounded-md placeholder-pl-2 focus:outline-none focus:border-[#664fbd] "
                />
              </p>
            </div>

            <div className=" flex justify-center items-center mt-4 mb-4">
              <button className=" w-[100%] rounded-full whitespace-nowrap h-[50px] flex justify-center items-center focus:outline-none bg-[#664fbd]    hover:bg-[#7861BD]  text-white px-4 py-5 ">
                Güncelle
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
