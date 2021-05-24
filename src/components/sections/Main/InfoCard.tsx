import { FC } from "react";

export const InfoCard: FC<{}> = ({}) => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center  bg-[#f7f7f7] mt-32 ">
        <div className=" container   mt-8 ">
          <div className="w-full text-center">
            <h1 className="text-[30px] mt-16 ">
              {" "}
              <b>Neden Krediliev.com</b>
            </h1>
            <p className="text-[12px] mb-8">Lorem ipsum dolor sit amet</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8 ">
            <div className="p-2 sm:p-10 text-center cursor-pointer">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                <div className="space-y-10 flex justify-center items-center flex-col">
                  <i className="flex justify-center items-center bg-[#fee8e9] rounded-[50%] h-40 w-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Group_1127"
                      data-name="Group 1127"
                      width="110.388"
                      height="81.886"
                      viewBox="0 0 140.388 81.886"
                    >
                      <path
                        id="Path_18919"
                        data-name="Path 18919"
                        d="M1005.1,1049.964a3.382,3.382,0,0,1-2.388-.981,3.329,3.329,0,0,1-.809-1.285,3.266,3.266,0,0,1-.178-.956s0,0,0,0c0-.059,0-.118,0-.176a3.3,3.3,0,0,1,.623-1.886,3.237,3.237,0,0,1,.4-.463L1018.091,1029a13.053,13.053,0,0,0,0-18.549,13.33,13.33,0,0,0-18.711,0,3.4,3.4,0,0,1-4.777,0,13.332,13.332,0,0,0-18.714,0,13.05,13.05,0,0,0,0,18.549l15.383,15.249A3.327,3.327,0,0,1,992,1047.9a3.379,3.379,0,0,1-3.121,2.067H946.61a7.214,7.214,0,0,1-7.238-7.175V1013.8a.493.493,0,0,0-.483-.478h-6.8c-3.553,0-4.7-2.037-5.034-2.914s-.809-3.162,1.874-5.471l40.658-35a8.015,8.015,0,0,1,10.26,0L996.993,984.7l17.138-14.76a8.013,8.013,0,0,1,10.261,0l40.657,35c2.682,2.31,2.2,4.6,1.873,5.472s-1.481,2.913-5.034,2.913h-6.8a.493.493,0,0,0-.483.478v28.989a7.215,7.215,0,0,1-7.238,7.175H1005.1Zm8.155-6.7h34.119a.493.493,0,0,0,.482-.478V1013.8a7.214,7.214,0,0,1,7.238-7.175h1.62l-36.747-31.633a1.244,1.244,0,0,0-1.4,0l-19.352,16.666a3.4,3.4,0,0,1-4.429,0l-19.361-16.667a1.248,1.248,0,0,0-1.4,0l-36.747,31.633h1.62a7.214,7.214,0,0,1,7.238,7.175v28.989a.493.493,0,0,0,.482.478H980.73l-9.618-9.532a19.714,19.714,0,0,1,0-28.019,20.153,20.153,0,0,1,25.878-2.024,20.152,20.152,0,0,1,25.877,2.023,19.715,19.715,0,0,1,0,28.018Z"
                        transform="translate(-926.795 -968.078)"
                        fill="#ff5a61"
                      />
                    </svg>
                  </i>

                  <div className="px-6 py-4">
                    <div className="space-y-5">
                      <div className="font-bold text-xl mb-2">
                        Nullam et viverra lorem
                      </div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam sodales mauris tempor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-10 text-center cursor-pointer text-white ">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition duration-500 bg-[#ff5a61]">
                <div className="space-y-10 flex justify-center items-center flex-col">
                  <i className="flex justify-center items-center bg-[#fee8e9] rounded-[50%] h-40 w-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Group_1127"
                      data-name="Group 1127"
                      width="110.388"
                      height="81.886"
                      viewBox="0 0 140.388 81.886"
                    >
                      <path
                        id="Path_18919"
                        data-name="Path 18919"
                        d="M1005.1,1049.964a3.382,3.382,0,0,1-2.388-.981,3.329,3.329,0,0,1-.809-1.285,3.266,3.266,0,0,1-.178-.956s0,0,0,0c0-.059,0-.118,0-.176a3.3,3.3,0,0,1,.623-1.886,3.237,3.237,0,0,1,.4-.463L1018.091,1029a13.053,13.053,0,0,0,0-18.549,13.33,13.33,0,0,0-18.711,0,3.4,3.4,0,0,1-4.777,0,13.332,13.332,0,0,0-18.714,0,13.05,13.05,0,0,0,0,18.549l15.383,15.249A3.327,3.327,0,0,1,992,1047.9a3.379,3.379,0,0,1-3.121,2.067H946.61a7.214,7.214,0,0,1-7.238-7.175V1013.8a.493.493,0,0,0-.483-.478h-6.8c-3.553,0-4.7-2.037-5.034-2.914s-.809-3.162,1.874-5.471l40.658-35a8.015,8.015,0,0,1,10.26,0L996.993,984.7l17.138-14.76a8.013,8.013,0,0,1,10.261,0l40.657,35c2.682,2.31,2.2,4.6,1.873,5.472s-1.481,2.913-5.034,2.913h-6.8a.493.493,0,0,0-.483.478v28.989a7.215,7.215,0,0,1-7.238,7.175H1005.1Zm8.155-6.7h34.119a.493.493,0,0,0,.482-.478V1013.8a7.214,7.214,0,0,1,7.238-7.175h1.62l-36.747-31.633a1.244,1.244,0,0,0-1.4,0l-19.352,16.666a3.4,3.4,0,0,1-4.429,0l-19.361-16.667a1.248,1.248,0,0,0-1.4,0l-36.747,31.633h1.62a7.214,7.214,0,0,1,7.238,7.175v28.989a.493.493,0,0,0,.482.478H980.73l-9.618-9.532a19.714,19.714,0,0,1,0-28.019,20.153,20.153,0,0,1,25.878-2.024,20.152,20.152,0,0,1,25.877,2.023,19.715,19.715,0,0,1,0,28.018Z"
                        transform="translate(-926.795 -968.078)"
                        fill="#ff5a61"
                      />
                    </svg>
                  </i>
                  <div className="px-6 py-4 ">
                    <div className="space-y-5">
                      <div className="font-bold text-xl text-white mb-2">
                        Nullam et viverra lorem
                      </div>
                      <p className="text-white text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam sodales mauris tempor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                <div className="space-y-10 flex justify-center items-center flex-col">
                  <i className="flex justify-center items-center bg-[#fee8e9] rounded-[50%] h-40 w-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Group_1127"
                      data-name="Group 1127"
                      width="110.388"
                      height="81.886"
                      viewBox="0 0 140.388 81.886"
                    >
                      <path
                        id="Path_18919"
                        data-name="Path 18919"
                        d="M1005.1,1049.964a3.382,3.382,0,0,1-2.388-.981,3.329,3.329,0,0,1-.809-1.285,3.266,3.266,0,0,1-.178-.956s0,0,0,0c0-.059,0-.118,0-.176a3.3,3.3,0,0,1,.623-1.886,3.237,3.237,0,0,1,.4-.463L1018.091,1029a13.053,13.053,0,0,0,0-18.549,13.33,13.33,0,0,0-18.711,0,3.4,3.4,0,0,1-4.777,0,13.332,13.332,0,0,0-18.714,0,13.05,13.05,0,0,0,0,18.549l15.383,15.249A3.327,3.327,0,0,1,992,1047.9a3.379,3.379,0,0,1-3.121,2.067H946.61a7.214,7.214,0,0,1-7.238-7.175V1013.8a.493.493,0,0,0-.483-.478h-6.8c-3.553,0-4.7-2.037-5.034-2.914s-.809-3.162,1.874-5.471l40.658-35a8.015,8.015,0,0,1,10.26,0L996.993,984.7l17.138-14.76a8.013,8.013,0,0,1,10.261,0l40.657,35c2.682,2.31,2.2,4.6,1.873,5.472s-1.481,2.913-5.034,2.913h-6.8a.493.493,0,0,0-.483.478v28.989a7.215,7.215,0,0,1-7.238,7.175H1005.1Zm8.155-6.7h34.119a.493.493,0,0,0,.482-.478V1013.8a7.214,7.214,0,0,1,7.238-7.175h1.62l-36.747-31.633a1.244,1.244,0,0,0-1.4,0l-19.352,16.666a3.4,3.4,0,0,1-4.429,0l-19.361-16.667a1.248,1.248,0,0,0-1.4,0l-36.747,31.633h1.62a7.214,7.214,0,0,1,7.238,7.175v28.989a.493.493,0,0,0,.482.478H980.73l-9.618-9.532a19.714,19.714,0,0,1,0-28.019,20.153,20.153,0,0,1,25.878-2.024,20.152,20.152,0,0,1,25.877,2.023,19.715,19.715,0,0,1,0,28.018Z"
                        transform="translate(-926.795 -968.078)"
                        fill="#ff5a61"
                      />
                    </svg>
                  </i>

                  <div className="px-6 py-4">
                    <div className="space-y-5 ">
                      <div className="font-bold text-xl mb-2">
                        Nullam et viverra lorem
                      </div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam sodales mauris tempor
                      </p>
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
