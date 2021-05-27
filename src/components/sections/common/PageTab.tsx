import { FC, useState } from "react";

export const PageTab: FC<{}> = ({}) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="container mx-auto mt-8 space-x-24">
        <div className="flex ">
          <div className=" ">
            <ul
              className="flex  h-auto list-none bg-white flex-col"
              role="tablist"
            >
              <li className="p-5 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                    (openTab === 1
                      ? "text-red-500 bg-" + "-600"
                      : "text-" + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Profile
                </a>
              </li>
              <li className=" p-5 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                    (openTab === 2
                      ? "text-red-500 bg-" + "-600"
                      : "text-" + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Settings
                </a>
              </li>
              <li className=" p-5 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 3
                      ? "text-red-500 bg-" + "-600"
                      : "text-" + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Options
                </a>
              </li>
            </ul>
          </div>
          <div className=" flex min-w-0 break-words bg-white mb-6  rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quia, nulla expedita optio dignissimos non obcaecati amet
                    dolor aperiam, deleniti veniam rem ipsam, eos consectetur.
                    Tempora praesentium ex est sit in.
                  </p>
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
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>sadkfşhlsdfalkhfjialsdflşasfjklş</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
