import { FC, useState } from "react";
import { MessageCard } from "./MessageCard";
import { SearchInput } from "./SearchInput";

export const MessageTab: FC<{}> = ({}) => {
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
                MESAJLARIM
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
                  İlan Mesajlarım
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
                  Bildirimler
                </a>
                <div className=" border border-gray-200 ml-5 mr-5 mt-2"></div>
              </li>
            </ul>
          </div>
          <div className=" rounded-[8px] col-span-3 sm:w-full break-words bg-white ">
            {/* <div className="px-4 py-5">
              <SearchInput />
            </div> */}

            <div className="px-4 py-5 flex-auto ">
              <div className="tab-content tab-space ">
                <div className={openTab === 1 ? "block" : "hidden"}>
                  <MessageCard />
                  <MessageCard />
                  <MessageCard />
                  <MessageCard />
                  <MessageCard />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table class="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                              Bilgi
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
                              Tarih
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
                                  Favori İlanınızın Fiyatı Düştü
                                </p>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-[#9a9a9a] whitespace-no-wrap">
                                19 Ocak 2021 - 18:56
                              </p>
                            </td>
                            <td class="px-5 flex py-5 border-b border-gray-200 space-x-5 bg-white text-sm">
                              <p class="text-gray-900  mt-[19px] whitespace-no-wrap underline">
                                Göster
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
                                  Favori İlanınızın Fiyatı Düştü
                                </p>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-[#9a9a9a] whitespace-no-wrap">
                                19 Ocak 2021 - 18:56
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
                                  Favori İlanınızın Fiyatı Düştü
                                </p>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-[#9a9a9a] whitespace-no-wrap">
                                19 Ocak 2021 - 18:56
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
                                  Favori İlanınızın Fiyatı Düştü
                                </p>
                              </div>
                            </td>
                            <td class="px-5 py-5 bg-white text-sm">
                              <p class="text-[#9a9a9a] whitespace-no-wrap">
                                19 Ocak 2021 - 18:56
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
