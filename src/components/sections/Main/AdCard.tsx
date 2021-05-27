import { FC, Component } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
}
export const AdCard: FC<{}> = ({}) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" bg-[#f7f7f7] flex flex-col justify-center items-center ">
        <h1 className="text-[30px] mt-8 ">
          {" "}
          <b>Öne Çıkan</b> İlanlar
        </h1>
        <p className="text-[12px]">Lorem ipsum dolor sit amet</p>
        <div className="container ">
          <Slider {...settings}>
            <div>
              <div className="  font-sans mb-12">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center justify-center ">
                    <div className="max-w-sm   py-6 px-3">
                      <div className="bg-white shadow-xl rounded-lg overflow-hidden ">
                        <div
                          className="bg-cover bg-center h-56 p-4 "
                          style={{
                            backgroundImage:
                              "url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                          }}
                        >
                          <div className="flex justify-end">
                            <svg
                              className="h-6 w-6 text-white fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className=" tracking-wide text-md font-bold text-red-500">
                            Satılık Daire
                          </p>
                          <p className="text-gray-700">
                            Çeşme Aysaranda Mevki Özel Plajlı Denize Yakın
                            Müstakil Yazlık
                          </p>
                        </div>
                        <div className="flex p-4 border-t border-gray-100 text-gray-700">
                          <div className="flex-1 inline-flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                            <p className="text-xl ml-2 text-gray-900">
                              750,000₺
                            </p>
                          </div>
                          <div className="flex-1 inline-flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <p className="flex text-[12px]">
                              <span>Çeşme,İzmir</span> -25 Haziran
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="  font-sans">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center ">
                      <div className="max-w-sm   py-6 px-3">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                          <div
                            className="bg-cover bg-center h-56 p-4"
                            style={{
                              backgroundImage:
                                "url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                            }}
                          >
                            <div className="flex justify-end">
                              <svg
                                className="h-6 w-6 text-white fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className=" tracking-wide text-md font-bold text-red-500">
                              Satılık Daire
                            </p>
                            <p className="text-gray-700">
                              Çeşme Aysaranda Mevki Özel Plajlı Denize Yakın
                              Müstakil Yazlık
                            </p>
                          </div>
                          <div className="flex p-4 border-t border-gray-100 text-gray-700">
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <p className="text-xl ml-2 text-gray-900">
                                750,000₺
                              </p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <p className="flex text-[12px]">
                                <span>Çeşme,İzmir</span> -25 Haziran
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="  font-sans">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center ">
                      <div className="max-w-sm   py-6 px-3">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                          <div
                            className="bg-cover bg-center h-56 p-4"
                            style={{
                              backgroundImage:
                                "url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                            }}
                          >
                            <div className="flex justify-end">
                              <svg
                                className="h-6 w-6 text-white fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className=" tracking-wide text-md font-bold text-red-500">
                              Satılık Daire
                            </p>
                            <p className="text-gray-700">
                              Çeşme Aysaranda Mevki Özel Plajlı Denize Yakın
                              Müstakil Yazlık
                            </p>
                          </div>
                          <div className="flex p-4 border-t border-gray-100 text-gray-700">
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <p className="text-xl ml-2 text-gray-900">
                                750,000₺
                              </p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <p className="flex text-[12px]">
                                <span>Çeşme,İzmir</span> -25 Haziran
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="  font-sans">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center ">
                      <div className="max-w-sm   py-6 px-3">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                          <div
                            className="bg-cover bg-center h-56 p-4"
                            style={{
                              backgroundImage:
                                "url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                            }}
                          >
                            <div className="flex justify-end">
                              <svg
                                className="h-6 w-6 text-white fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className=" tracking-wide text-md font-bold text-red-500">
                              Satılık Daire
                            </p>
                            <p className="text-gray-700">
                              Çeşme Aysaranda Mevki Özel Plajlı Denize Yakın
                              Müstakil Yazlık
                            </p>
                          </div>
                          <div className="flex p-4 border-t border-gray-100 text-gray-700">
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <p className="text-xl ml-2 text-gray-900">
                                750,000₺
                              </p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <p className="flex text-[12px]">
                                <span>Çeşme,İzmir</span> -25 Haziran
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="  font-sans">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center ">
                      <div className="max-w-sm   py-6 px-3">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                          <div
                            className="bg-cover bg-center h-56 p-4"
                            style={{
                              backgroundImage:
                                "url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                            }}
                          >
                            <div className="flex justify-end">
                              <svg
                                className="h-6 w-6 text-white fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className=" tracking-wide text-md font-bold text-red-500">
                              Satılık Daire
                            </p>
                            <p className="text-gray-700">
                              Çeşme Aysaranda Mevki Özel Plajlı Denize Yakın
                              Müstakil Yazlık
                            </p>
                          </div>
                          <div className="flex p-4 border-t border-gray-100 text-gray-700">
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <p className="text-xl ml-2 text-gray-900">
                                750,000₺
                              </p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <p className="flex text-[12px]">
                                <span>Çeşme,İzmir</span> -25 Haziran
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="  font-sans">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center ">
                      <div className="max-w-sm   py-6 px-3">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                          <div
                            className="bg-cover bg-center h-56 p-4"
                            style={{
                              backgroundImage:
                                "url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                            }}
                          >
                            <div className="flex justify-end">
                              <svg
                                className="h-6 w-6 text-white fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className=" tracking-wide text-md font-bold text-red-500">
                              Satılık Daire
                            </p>
                            <p className="text-gray-700">
                              Çeşme Aysaranda Mevki Özel Plajlı Denize Yakın
                              Müstakil Yazlık
                            </p>
                          </div>
                          <div className="flex p-4 border-t border-gray-100 text-gray-700">
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <p className="text-xl ml-2 text-gray-900">
                                750,000₺
                              </p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <p className="flex text-[12px]">
                                <span>Çeşme,İzmir</span> -25 Haziran
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
