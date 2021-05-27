import { FC } from "react";
import Image from "next/image";

export const CategoryCard: FC<{}> = ({}) => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center  mt-4 ">
        <div className="container mt-16 mb-16 ">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-3">
            <div className="grid grid-cols-1 ">
              <b className="px-5 py-3 m-4 text-black text-[18px]">
                Popüler Aramalar
              </b>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  İstanbul Satılık
                </button>
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  İstanbul Kiralık
                </button>
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  Lüx Daire
                </button>
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  3+1 Ev
                </button>
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  İzmir Kiralık
                </button>
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  Bahçe Katı Lüx
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 ">
              <b className="px-5 py-3 m-4 text-black text-[18px]">
                En Çok Aranan Kategoriler
              </b>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  İstanbul Satılık
                </button>
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  İstanbul Kiralık
                </button>
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  Lüx Daire
                </button>
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  3+1 Ev
                </button>
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  İzmir Kiralık
                </button>
                <button className="px-5 py-3 m-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                  Bahçe Katı Lüx
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
