import { FC } from "react";
import Image from "next/image";

export const CategoryCard: FC<{}> = ({}) => {
  return (
    <>
      <div className="container mt-16">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="grid grid-cols-4 gap-4 ">
              <button className="px-9 py-4   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                İstanbul Satılık
              </button>
              <button className="px-9 py-4   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                İstanbul Kiralık
              </button>
              <button className="px-9 py-4   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                Lüx Daire
              </button>
              <button className="px-9 py-4   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                3+1 Ev
              </button>
              <button className="px-9 py-4   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                İzmir Kiralık
              </button>
              <button className="px-9 py-4   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                Bahçe Katı Lüx
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4 ">
              <button className="   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                İstanbul Satılık
              </button>
              <button className="px-9 py-4   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                İstanbul Kiralık
              </button>
              <button className="px-9 py-4   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                Lüx Daire
              </button>
              <button className="px-9 py-4   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                3+1 Ev
              </button>
              <button className="px-9 py-4   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                İzmir Kiralık
              </button>
              <button className="px-9 py-4   mb-4 rounded-full block  border-b  bg-[#f7f7f7] hover:bg-[#664fbd] text-black">
                Bahçe Katı Lüx
              </button>
            </div>
            {/* <div className=" col-span-12 md:col-span-6 sm:col-span-12 ">
              asdasdasd
            </div>
            <div className=" col-span-12 md:col-span-6 sm:col-span-12 ">
              iki
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
