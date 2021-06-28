import { FC, useState } from "react";
import { PersonalInformation } from "./PersonalInformation";
import { Eposta } from "./Eposta";
import { MobilPhone } from "./MobilPhone";
import { PasswordChange } from "./PasswordChange";
import { Information } from "./Information";
import { MembershipCancel } from "./MembershipCancel";

export const MembershipInformationTab: FC<{}> = ({}) => {
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
                ÜYELİK BİLGİLERİM
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
                  Kişisel Bilgiler
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
                  E-Posta
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
                  Cep telefonu
                </a>
                <div className=" border border-gray-200 ml-5 mr-5 mt-2"></div>
              </li>
              <li className="mb-7 text-left">
                <a
                  className={
                    "text-[14px] font-bold  px-5  rounded block leading-normal " +
                    (openTab === 4
                      ? "text-[#664fbd] bg-" + "-600"
                      : "text-" + "-600 bg-white")
                  }
                  onClick={() => {
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Şifre Değiştir
                </a>
                <div className=" border border-gray-200 ml-5 mr-5 mt-2"></div>
              </li>
              <li className="mb-7 text-left">
                <a
                  className={
                    "text-[14px] font-bold  px-5  rounded block leading-normal " +
                    (openTab === 5
                      ? "text-[#664fbd] bg-" + "-600"
                      : "text-" + "-600 bg-white")
                  }
                  onClick={() => {
                    setOpenTab(5);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Bilgilendirmeler
                </a>
                <div className=" border border-gray-200 ml-5 mr-5 mt-2"></div>
              </li>
              <li className="mb-7 text-left">
                <a
                  className={
                    "text-[14px] font-bold  px-5  rounded block leading-normal " +
                    (openTab === 6
                      ? "text-[#664fbd] bg-" + "-600"
                      : "text-" + "-600 bg-white")
                  }
                  onClick={() => {
                    setOpenTab(6);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Üyelik İptali
                </a>
                <div className=" border border-gray-200 ml-5 mr-5 mt-2"></div>
              </li>
            </ul>
          </div>
          <div className=" col-span-3 rounded-[8px]  sm:w-full break-words bg-white ">
            <div className=" flex-auto ">
              <div className="tab-content tab-space ">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <PersonalInformation />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Eposta />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <MobilPhone />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <PasswordChange />
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <Information />
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <MembershipCancel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
