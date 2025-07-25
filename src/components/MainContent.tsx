"use client";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
export default function MainContent() {
  return (
    <>
      <div
        className="hidden md:flex w-full h-full flex-1 bg-blue-500 bg-cover bg-center pt-40 pb-40 flex"
        style={{
          paddingLeft: "50px",
          backgroundImage:
            "url('https://nextflix-assets-nior.s3.ap-southeast-1.amazonaws.com/etc/1753330918458-MainShowBG.png')",
        }}
      >
        <div style={{ width: "30%" }} className="gap-4 flex flex-col">
          <Image
            src="/NSeriesOriginals.png"
            alt="Main Show"
            style={{ width: "auto", height: "auto" }}
            width={150}
            height={150}
          />
          <Image
            src="/ShowLogo.png"
            alt="Main Show Description"
            width={500}
            height={100}
          />
          <div className="flex items-center gap-2 text-white mt-4">
            <Image
              src="/Top10.png"
              alt="Main Show Description"
              width={30}
              height={30}
            />
            <p className="font-bold">#1 in TV Shows Today</p>
          </div>
          <div>
            <p>
              Determined to protect a young patient who escaped a mysterious
              cult, a psychiatrist takes the girl in, putting her own family —
              and life — in danger.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="font-bold flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
              <FaPlay /> Play
            </button>
            <button className="font-bold flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
              <IoMdInformationCircleOutline /> More Info
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          // paddingLeft: "50px",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          backgroundPositionX: "center",
          backgroundImage:
            "url('https://nextflix-assets-nior.s3.ap-southeast-1.amazonaws.com/etc/1753442678980-bg-mobile.png')",
        }}
        className="md:hidden w-full h-full flex-1 bg-cover bg-center pt-40 pb-40 flex"
      >
        <div className=" w-full h-full flex-1 bg-cover bg-center pt-40 pb-40 flex">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              padding: "0 10%",
            }}
            className="gap-4 flex  flex-col"
          >
            <Image
              src="/NSeriesOriginals.png"
              alt="Main Show"
              style={{ width: "auto", height: "auto" }}
              width={150}
              height={150}
            />
            <Image
              src="/ShowLogo.png"
              alt="Main Show Description"
              width={500}
              height={100}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                gap: "3px",
              }}
            >
              <p>TV Mysteries</p>
              <div
                style={{
                  backgroundColor: "white",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                }}
              ></div>
              <p>Based on Books</p>
            </div>

            <div className="flex items-center gap-10 text-white mt-4 font-bold">
              <div className="flex flex-col items-center">
                <AiOutlinePlus /> My List
              </div>
              <div>
                <button className="font-bold flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
                  <FaPlay /> Play
                </button>
              </div>

              <div className="flex flex-col items-center">
                <IoMdInformationCircleOutline /> Info
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
