import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import showPwdImg from "./images/show-password.svg";
// import hidePwdImg from "./images/show-password.svg";

export const Login: FC<{}> = ({}) => {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
          <div className="flex justify-center xl:m-0 md:m-0 sm:m-5 m-5 ">
            <div className="bg-white shadow-xl xl:w-3/4 md:w-3/4 sm:w-full w-full p-10  ">
              <b className=" text-[18px] text-[#262626]   whitespace-nowrap">
                Üye Girişi
              </b>
              <div className="text-[14px] mt-5">
                <label htmlFor="name" className="bg-white text-gray-600 px-1">
                  E-posta
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="E-posta Giriniz"
                  autoComplete="given-name"
                  className=" px-3 mt-3  h-[50px] w-full  sm:text-sm border  rounded-md placeholder-pl-2 focus:outline-none focus:border-[#664fbd] "
                />
              </div>
              <div className="text-[14px] mt-5">
                <label htmlFor="name" className="bg-white text-gray-600 px-1">
                  Şifre
                </label>
                <input
                  className=" px-3 mt-3  h-[50px] w-full  sm:text-sm border  rounded-md placeholder-pl-2 focus:outline-none focus:border-[#664fbd] "
                  name="pwd"
                  placeholder="Şifre Giriniz"
                  type={isRevealPwd ? "text" : "password"}
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
                <img
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  //   src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                />
              </div>
              <div className="flex">
                <div className="flex flex-1">
                  <label className="text-[#9a9a9a] text-[16px]">
                    <input
                      type="checkbox"
                      name="radio"
                      value="1"
                      className="mr-2  border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                    />
                    Oturum açık kalsın
                  </label>
                </div>
                <div>
                  <Link href="/resetPassword">
                    <a href="/" className="underline">
                      Şifremi Unuttum
                    </a>
                  </Link>
                </div>
              </div>

              <button className=" w-[100%] rounded-full whitespace-nowrap h-[50px] flex justify-center items-center focus:outline-none bg-[#664fbd]    hover:bg-[#7861BD]  text-white px-4 py-5 mt-8 ">
                Giriş Yap
              </button>
              <label className="text-[#9a9a9a] text-[16px] flex justify-center items-center mt-6">
                -Veya-
              </label>
              <button className=" w-[100%] rounded-full whitespace-nowrap h-[50px] flex justify-center items-center focus:outline-none bg-transparent border border-[#1877f2]   text-[#1877f2] px-4 py-5 mt-6">
                Facebook İle Giriş Yap
              </button>
            </div>
          </div>
          <div className="flex justify-center xl:m-0 md:m-0 sm:m-5 m-5">
            <div className="bg-white shadow-xl xl:w-3/4 md:w-3/4 sm:w-full h-80 p-10 flex flex-col ">
              <b className=" text-[18px]  text-[#262626] pb-4  whitespace-nowrap">
                Üye Ol
              </b>
              <p className="text-[14px] text-[#262626]">
                Üyelerimize özel hizmetlerimizden faydalanabilmek için üye olun.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec tincidunt ex, vel pretium urna. Nam varius.
              </p>
              <Link href="/register">
                <button className=" w-[100%] rounded-full whitespace-nowrap h-[50px] flex justify-center items-center focus:outline-none bg-transparent border border-[#664fbd]   text-[#664fbd] px-4 py-5 mt-6">
                  Hemen Üye Ol
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
