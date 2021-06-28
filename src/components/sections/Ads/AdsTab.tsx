import { FC, useState } from "react";
import { AdsCard } from "./AdsCard";
import { SearchInput } from "./SearchInput";

export const AdsTab: FC<{}> = ({}) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="container mx-auto mt-8 ">
        <div className=" grid gap-0 xl:gap-4 md:gap-4 sm:gap-0 grid-cols-1 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  ">
          <div
            className=" col-span-full mb-4  xl:col-span-1 md:xl:col-span-1 sm:col-span-full rounded-[8px] list-none bg-white flex-col"
            style={{ height: "max-content" }}
          >
            <ul role="tablist">
              <h1 className=" font-bold text-[16px] p-5  text-left">
                İLANLARIM
              </h1>

              <li className="mb-7 text-left ">
                <a
                  className={
                    "text-[14px] font-bold px-5  block leading-normal  " +
                    (openTab === 1
                      ? "text-[#664fbd] bg-" + "-600"
                      : "text-" + "-600 bg-white")
                  }
                  onClick={() => {
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Yayındaki İlanlarım
                </a>
                <div className=" border border-gray-200 ml-5 mr-5 mt-2"></div>
              </li>
              <li className="mb-7 text-left">
                <a
                  className={
                    "text-[14px] font-bold px-5 rounded block leading-normal " +
                    (openTab === 2
                      ? "text-[#664fbd] bg-" + "-600"
                      : "text-" + "-600 bg-white")
                  }
                  onClick={() => {
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Yayında Olmayan İlanlarım
                </a>
                <div className=" border border-gray-200 ml-5 mr-5 mt-2"></div>
              </li>
            </ul>
          </div>
          <div className=" rounded-[8px] col-span-3 sm:w-full break-words bg-white ">
            <div className="px-4 py-5">
              <SearchInput />
            </div>

            <div className="px-4 py-5 flex-auto ">
              <div className="tab-content tab-space ">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <AdsCard />
                  <AdsCard />
                  <AdsCard />
                  <AdsCard />
                  <AdsCard />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ratione unde praesentium voluptatum, voluptatem quos aliquam
                    natus repellendus. Corrupti veniam nulla necessitatibus, a,
                    aliquam mollitia repellat modi temporibus vitae, molestiae
                    magnam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
