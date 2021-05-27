import { FC } from "react";
import Image from "next/image";

export const CountCard: FC<{}> = ({}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center  ">
        <h1 className="text-[30px] mt-16 ">
          {" "}
          <b>En Popüler</b> Şehirler
        </h1>
        <p className="text-[12px] mb-8">Lorem ipsum dolor sit amet</p>
        <div className="grid gap-6 grid-cols-1 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  ">
          <div className=" w-[315px] h-[108px] rounded-full relative z-10 flex flex-row  shadow-sm  p-4 ">
            <Image
              className="rounded-2xl filter brightness-50"
              layout="fill"
              src="/images/mugla.svg"
              objectFit="cover"
              objectPosition="center"
            />

            <div className="flex flex-col items-center justify-center flex-grow  z-40">
              <div className="text-[24px] text-white font-semibold ">MUĞLA</div>
              <div className=" text-white font-semibold text-lg">150 İlan</div>
            </div>
          </div>
          <div className=" w-[315px] h-[108px] rounded-full relative z-10 flex flex-row  shadow-sm  p-4 ">
            <Image
              className="rounded-2xl "
              layout="fill"
              src="/images/antalya.svg"
              objectFit="cover"
              objectPosition="center"
            />

            <div className="flex flex-col items-center justify-center flex-grow  z-40">
              <div className="text-[24px] text-white font-semibold ">
                ANTALYA
              </div>
              <div className=" text-white font-semibold text-lg">150 İlan</div>
            </div>
          </div>
          <div className=" w-[315px] h-[108px] rounded-full relative z-10 flex flex-row  shadow-sm  p-4 ">
            <Image
              className="rounded-2xl "
              layout="fill"
              src="/images/antalya.svg"
              objectFit="cover"
              objectPosition="center"
            />

            <div className="flex flex-col items-center justify-center flex-grow  z-40">
              <div className="text-[24px] text-white font-semibold ">
                ANTALYA
              </div>
              <div className=" text-white font-semibold text-lg">150 İlan</div>
            </div>
          </div>
          <div className=" w-[315px] h-[108px] rounded-full relative z-10 flex flex-row  shadow-sm  p-4 ">
            <Image
              className="rounded-2xl "
              layout="fill"
              src="/images/izmir.svg"
              objectFit="cover"
              objectPosition="center"
            />

            <div className="flex flex-col items-center justify-center flex-grow  z-40">
              <div className="text-[24px] text-white font-semibold ">İZMİR</div>
              <div className=" text-white font-semibold text-lg">150 İlan</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
