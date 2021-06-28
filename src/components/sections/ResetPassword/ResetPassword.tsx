import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const ResetPassword: FC<{}> = ({}) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center xl:m-0 md:m-0 sm:m-5 m-5 ">
          <div className="bg-white shadow-xl xl:w-1/2 md:w-3/4 sm:w-full w-full p-10  ">
            <b className=" text-[18px] text-[#262626]   whitespace-nowrap">
              Şifremi Unuttum
            </b>
            <div className="text-[14px] mt-5">
              <label htmlFor="name" className="bg-white text-gray-600 px-1">
                E-posta *
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="E-posta Adresi Giriniz"
                autoComplete="given-name"
                className=" px-3 mt-3  h-[50px] w-full  sm:text-sm border  rounded-md placeholder-pl-2 focus:outline-none focus:border-[#664fbd] "
              />
            </div>
            <Link href="/login">
              <button className=" w-[100%] rounded-full whitespace-nowrap h-[50px] flex justify-center items-center focus:outline-none bg-[#664fbd]    hover:bg-[#7861BD]  text-white px-4 py-5 mt-8 ">
                Şifremi Gönder
              </button>
            </Link>
            <Link href="/login">
              <label className="text-[#9a9a9a] text-[16px] flex justify-center items-center underline cursor-pointer mt-6">
                Hemen Giriş Yap
              </label>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
