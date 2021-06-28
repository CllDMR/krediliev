import { FC, useState } from "react";
import Image from "next/image";

export const FavoriteCard: FC<{}> = ({}) => {
  return (
    <>
      <div className=" flex flex-col justify-center sm:py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 ">
          <div className="relative  h-[245px] flex-col  | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer ">
            <Image
              className="rounded-2xl h-20 filter brightness-50"
              layout="fill"
              src="/images/mugla.svg"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="flex flex-col items-center justify-center flex-grow  z-40">
              <div className="text-[24px] text-white font-semibold ">
                Satılık Ev
              </div>
              <div className=" text-white font-semibold text-lg">150 İlan</div>
            </div>
            <div className="flex justify-end items-end space-x-5 right-0">
              <div className="text-white text-sm z-50 underline">Düzenle</div>
              <div className="text-white text-sm z-50 underline">XSil</div>
            </div>
          </div>
          <div className="relative  h-[245px] flex-col  | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer ">
            <Image
              className="rounded-2xl h-20 filter brightness-50"
              layout="fill"
              src="/images/mugla.svg"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="flex flex-col items-center justify-center flex-grow  z-40">
              <div className="text-[24px] text-white font-semibold ">
                Satılık Ev
              </div>
              <div className=" text-white font-semibold text-lg">150 İlan</div>
            </div>
            <div className="flex justify-end items-end space-x-5 right-0">
              <div className="text-white text-sm z-50 underline">Düzenle</div>
              <div className="text-white text-sm z-50 underline">XSil</div>
            </div>
          </div>
          <div className="relative  h-[245px] flex-col  | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer ">
            <Image
              className="rounded-2xl h-20 filter brightness-50"
              layout="fill"
              src="/images/mugla.svg"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="flex flex-col items-center justify-center flex-grow  z-40">
              <div className="text-[24px] text-white font-semibold ">
                Satılık Ev
              </div>
              <div className=" text-white font-semibold text-lg">150 İlan</div>
            </div>
            <div className="flex justify-end items-end space-x-5 right-0">
              <div className="text-white text-sm z-50 underline">Düzenle</div>
              <div className="text-white text-sm z-50 underline">XSil</div>
            </div>
          </div>
          <div className="relative  h-[245px] flex-col  | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer ">
            <Image
              className="rounded-2xl h-20 filter brightness-50"
              layout="fill"
              src="/images/mugla.svg"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="flex flex-col items-center justify-center flex-grow  z-40">
              <div className="text-[24px] text-white font-semibold ">
                Satılık Ev
              </div>
              <div className=" text-white font-semibold text-lg">150 İlan</div>
            </div>
            <div className="flex justify-end items-end space-x-5 right-0">
              <div className="text-white text-sm z-50 underline">Düzenle</div>
              <div className="text-white text-sm z-50 underline">XSil</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
