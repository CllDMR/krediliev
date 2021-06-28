import { FC, useState } from "react";
import Image from "next/image";

export const MobilPhone: FC<{}> = ({}) => {
  return (
    <>
      <div className="container flex justify-center items-center mt-16">
        <div className="flex flex-col xl:w-1/2 md:w-1/2 sm:w-[100%] w-[90%]">
          <p className="text-[14px] text-[#262626]">
            Cep telefonu numaranız, yayınlanmasını istediğiniz ilanlarınızda ve
            diğer kullanıcılara göndereceğiniz mesajlarda gösterilecektir.
          </p>
          <p className="text-[14px] text-[#262626]">
            Kayıtlı cep telefonu numaranız: <b>0(538) 669 90 88</b>
          </p>
          <form action="">
            <div className="text-[14px] mt-4">
              <p>
                <label htmlFor="name" className="bg-white text-gray-600 px-1">
                  Cep Telefonu *
                </label>
              </p>
              <p>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="0(5_ _) _ _ _ - _ _  - _ _"
                  autoComplete="given-name"
                  className=" px-3  mt-3 h-[50px] w-full  sm:text-sm border  rounded-md placeholder-pl-2 focus:outline-none focus:border-[#664fbd]"
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
