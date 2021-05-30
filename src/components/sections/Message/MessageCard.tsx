import { FC, useState } from "react";

export const MessageCard: FC<{}> = ({}) => {
  return (
    <>
      <div className="bg-white w-full h-auto rounded shadow-md flex card mb-5">
        <img
          className="w-[80px] xl:w-[160px] md:w-[100px] sm:w-[90px] m-5 h-24 xl:h-30 md:xl:h-32 sm:h-24 rounded-lg "
          src="/images/home-05.jpg"
          alt="Room Image"
        />
        <div className="flex flex-col flex-1 mt-5">
          <b className="text-[13px] xl:text-[18px] md:text-[16px] sm:text-[12px] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
          </b>
          <p className="text-sm mt-2">Muhammet Yavuz</p>
          <p className="text-xs mt-2 text-[#9a9a9a]">21 Ocak 2021 - 17:33</p>
        </div>
        <div className="hidden m-5 space-x-5 xl:flex md:flex sm:hidden">
          <p className="text-sm underline cursor-pointer ">Engelle</p>
          <p className="text-sm underline cursor-pointer">
            Okunmadı olarak işaretle
          </p>
          <p className="text-sm underline cursor-pointer">XSil</p>
        </div>
      </div>
    </>
  );
};
