import { FC } from "react";
import Image from "next/image";

export const CountCard: FC<{}> = ({}) => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-[30px] mt-16 mx-auto text-center">
          {" "}
          <b>En Popüler</b> Şehirler
        </h1>
        <p className="text-[12px] mb-8 text-center">
          Lorem ipsum dolor sit amet
        </p>
        <div class=" py-6 flex flex-col justify-center sm:py-12">
          <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 px-4">
            <div class="relative w-full bg-gray-100 h-[108px] flex-col  | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer ">
              <Image
                className="rounded-2xl h-20 filter brightness-50"
                layout="fill"
                src="/images/mugla.svg"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="flex flex-col items-center justify-center flex-grow  z-40">
                <div className="text-[24px] text-white font-semibold ">
                  MUĞLA
                </div>
                <div className=" text-white font-semibold text-lg">
                  150 İlan
                </div>
              </div>
            </div>
            <div class="relative bg-gray-100 h-[108px] flex-col  | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer ">
              <Image
                className="rounded-2xl "
                layout="fill"
                src="/images/istanbul.svg"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="flex flex-col items-center justify-center flex-grow  z-40">
                <div className="text-[24px] text-white font-semibold ">
                  İSTANBUL
                </div>
                <div className=" text-white font-semibold text-lg">
                  150 İlan
                </div>
              </div>
            </div>
            <div class="relative bg-gray-100 h-[108px] flex-col  | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer ">
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
                <div className=" text-white font-semibold text-lg">
                  150 İlan
                </div>
              </div>
            </div>
            <div class="relative bg-gray-100 h-[108px] flex-col  | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer ">
              <Image
                className="rounded-2xl "
                layout="fill"
                src="/images/izmir.svg"
                objectFit="cover"
                objectPosition="center"
              />

              <div className="flex flex-col items-center justify-center flex-grow  z-40">
                <div className="text-[24px] text-white font-semibold ">
                  İZMİR
                </div>
                <div className=" text-white font-semibold text-lg">
                  150 İlan
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid gap-6 grid-cols-1 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  ">
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
        </div> */}
      </div>
    </>
  );
};
