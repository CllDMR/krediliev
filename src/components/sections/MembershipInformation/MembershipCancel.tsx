import { FC, useState } from "react";
import Image from "next/image";

export const MembershipCancel: FC<{}> = ({}) => {
  return (
    <>
      <div className="container flex justify-center items-center">
        <div className="flex flex-col w-2/3 mt-16">
          <p className="text-[14px] text-[#262626]">
            Üyeliğinizi iptal etmek istemenize üzüldük…
          </p>
          <br />
          <p className="text-[14px] text-[#262626]">
            Sizi krediliev.com ailesinin bir üyesi olarak görmeye devam etmek
            istediğimiz için görüşleriniz bizim için çok değerli. Üyeliğiniz ile
            ilgili yaşadığınız bir sorun veya sormak istedikleriniz varsa bize
            Destek Merkezi üzerinden ulaşabilirsiniz.
          </p>
          <br />

          <p className="text-[14px] text-[#262626]">
            krediliev.com üyeliğinizi iptal ederseniz;
          </p>
          <br />

          <p className="text-[14px] text-[#262626]">
            Üyeliğiniz yeniden aktif hale getirilemeyecektir. Yayında olan
            ilanlarınızın tamamı yayından kalkacaktır. Cebinden Onaylı telefon
            numaranızı başka bir krediliev.com üyeliğinize taşıyabilirsiniz.
            E-posta adresinizin yeni bir üyelikte kullanılamayacağını da
            üzülerek hatırlatmak isteriz.
          </p>
          <div className=" flex justify-center items-center mt-4 mb-4">
            <button className=" w-[100%] rounded-full whitespace-nowrap h-[50px] flex justify-center items-center focus:outline-none bg-transparent border border-[#ff5a61]   text-[#ff5a61] px-4 py-5 ">
              Güncelle
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
