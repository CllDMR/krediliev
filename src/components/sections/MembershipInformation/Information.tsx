import { FC, useState } from "react";
import Image from "next/image";

export const Information: FC<{}> = ({}) => {
  return (
    <>
      <div className="container flex justify-center items-center">
        <div className="flex flex-col w-full">
          <div className="flex p-8">
            <p className="flex flex-1">İlan onay beklerken haber ver.</p>
            <div className="flex space-x-5 ">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="1"
                  className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                Açık
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="2"
                  className="mr-2 text-black border-2 border-gray-300 focus:border-red-700 focus:ring-black"
                />
                Kapalı
              </label>
            </div>
          </div>
          <div className=" border border-gray-200 ml-5 mr-5 -mt-4"></div>
          <div className="flex p-8">
            <p className="flex flex-1">
              Site kurallarına uyulmaması sebebiyle ilan yayından
              kaldırıldığında haber ver.
            </p>
            <div className="flex space-x-5 ">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="1"
                  className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                Açık
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="2"
                  className="mr-2 text-black border-2 border-gray-300 focus:border-red-700 focus:ring-black"
                />
                Kapalı
              </label>
            </div>
          </div>
          <div className=" border border-gray-200 ml-5 mr-5 -mt-4"></div>
        </div>
      </div>
    </>
  );
};
