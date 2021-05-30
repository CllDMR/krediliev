import { FC, useState } from "react";
import { FavoriteCard } from "./FavoriteCard";
export const FavoriteTab: FC<{}> = ({}) => {
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
                FAVORİLERİM
              </h1>

              <li className="mb-7 text-left ">
                <a
                  className={
                    "text-[14px] font-bold  px-5  block leading-normal  " +
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
                  Favori İlanlar
                </a>
                <div className=" border border-gray-200 ml-5 mr-5 mt-2"></div>
              </li>
              <li className="mb-7 text-left">
                <a
                  className={
                    "text-[14px] font-bold  px-5 rounded block leading-normal " +
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
                  Favori Aramalar
                </a>
                <div className=" border border-gray-200 ml-5 mr-5 mt-2"></div>
              </li>
              <li className="mb-7 text-left">
                <a
                  className={
                    "text-[14px] font-bold  px-5  rounded block leading-normal " +
                    (openTab === 3
                      ? "text-[#664fbd] bg-" + "-600"
                      : "text-" + "-600 bg-white")
                  }
                  onClick={() => {
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Favori Satıcılar
                </a>
                <div className=" border border-gray-200 ml-5 mr-5 mt-2"></div>
              </li>
            </ul>
          </div>
          {/* <div className=" rounded-[8px]  sm:w-full break-words bg-white "> */}
          <div className=" flex-auto col-span-3">
            <div className="tab-content tab-space ">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <FavoriteCard />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto">
                  <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                            Arama Adı
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                            Bildirim
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                            Düzenle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-10"></div>
                              <p class="text-gray-900 whitespace-no-wrap">
                                Vera Carpenter
                              </p>
                            </div>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap ">
                              Admin
                            </p>
                          </td>
                          <td class="px-5 flex py-5 border-b border-gray-200 space-x-5 bg-white text-sm">
                            <p class="text-gray-900  mt-[19px] whitespace-no-wrap underline">
                              Düzenle
                            </p>
                            <p class="text-gray-900 mt-[19px] whitespace-no-wrap underline">
                              XSil
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-10"></div>
                              <p class="text-gray-900 whitespace-no-wrap">
                                Blake Bowman
                              </p>
                            </div>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Editor
                            </p>
                          </td>
                          <td class="px-5 flex py-5 border-b border-gray-200 space-x-5 bg-white text-sm">
                            <p class="text-gray-900  mt-[19px] whitespace-no-wrap underline">
                              Düzenle
                            </p>
                            <p class="text-gray-900 mt-[19px] whitespace-no-wrap underline">
                              XSil
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                              <div class="flex-shrink-0  h-10"></div>
                              <p class="text-gray-900 whitespace-no-wrap">
                                Dana Moore
                              </p>
                            </div>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Editor
                            </p>
                          </td>
                          <td class="px-5 flex py-5 border-b border-gray-200 space-x-5 bg-white text-sm">
                            <p class="text-gray-900  mt-[19px] whitespace-no-wrap underline">
                              Düzenle
                            </p>
                            <p class="text-gray-900 mt-[19px] whitespace-no-wrap underline">
                              XSil
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-5 py-5 bg-white text-sm">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-10"></div>
                              <p class="text-gray-900 whitespace-no-wrap">
                                Alonzo Cox
                              </p>
                            </div>
                          </td>
                          <td class="px-5 py-5 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Admin
                            </p>
                          </td>
                          <td class="px-5 flex py-5 border-b border-gray-200 space-x-5 bg-white text-sm">
                            <p class="text-gray-900  mt-[19px] whitespace-no-wrap underline">
                              Düzenle
                            </p>
                            <p class="text-gray-900 mt-[19px] whitespace-no-wrap underline">
                              XSil
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <p>sadkfşhlsdfalkhfjialsdflşasfjklş</p>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
