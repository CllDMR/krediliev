import { FC, useState } from "react";
import Image from "next/image";

export const PersonalInformation: FC<{}> = ({}) => {
  return (
    <>
      <div className="container flex justify-center items-center">
        <div className="flex flex-col xl:w-1/2 md:w-1/2 sm:w-[100%] w-[90%]">
          <form action="">
            <div className="flex space-x-5 mt-8">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="1"
                  className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                Bireysel
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="2"
                  className="mr-2 text-black border-2 border-gray-300 focus:border-red-700 focus:ring-black"
                />
                Kurumsal
              </label>
            </div>
            <div className="text-[14px] mt-4">
              <p>
                <label htmlFor="name" className="bg-white text-gray-600 px-1">
                  Adı *
                </label>
              </p>
              <p>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Adınızı Giriniz"
                  autoComplete="given-name"
                  className=" px-3  mt-3 h-[50px] w-full  sm:text-sm border  rounded-md placeholder-pl-2 focus:outline-none focus:border-[#664fbd]"
                />
              </p>
            </div>
            <div className="text-[14px] mt-4">
              <p>
                <label htmlFor="name" className="bg-white text-gray-600 px-1">
                  Soyad *
                </label>
              </p>
              <p>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Adınızı Giriniz"
                  autoComplete="given-name"
                  className=" px-3 mt-3  h-[50px] w-full  sm:text-sm border  rounded-md placeholder-pl-2 focus:outline-none focus:border-[#664fbd] "
                />
              </p>
            </div>
            <div className="flex space-x-5 mt-4">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="1"
                  className="mr-2 mt-3 text-black borderfocus:ring-black focus:outline-none focus:border-[#664fbd]"
                />
                Kadın
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="2"
                  className="mr-2 mt-3 text-black border focus:ring-black focus:outline-none focus:border-[#664fbd]"
                />
                Erkek
              </label>
            </div>
            <div className="text-[14px] mt-4">
              <p>
                <label htmlFor="name" className="bg-white text-gray-600 px-1">
                  Eğitim Durumu *
                </label>
              </p>
              <p>
                <select className="form-select w-full  h-[50px] px-3 py-2 mb-1 mt-3 border  rounded-md focus:outline-none focus:border-[#664fbd] transition-colors cursor-pointer">
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="04">04 - April</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - June</option>
                  <option value="07">07 - July</option>
                  <option value="08">08 - August</option>
                  <option value="09">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </select>
              </p>
            </div>
            <div className="text-[14px] mt-4">
              <p>
                <label htmlFor="name" className="bg-white text-gray-600 px-1">
                  Meslek *
                </label>
              </p>
              <p>
                <select className="form-select w-full h-[50px] px-3 py-2 mb-1 mt-3 border  rounded-md focus:outline-none focus:border-[#664fbd] transition-colors cursor-pointer">
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="04">04 - April</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - June</option>
                  <option value="07">07 - July</option>
                  <option value="08">08 - August</option>
                  <option value="09">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </select>
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
