import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

function Modal({ selectInfo, setModalOpen }) {
  console.log(selectInfo.image);
  return (
    <div className="w-full h-full flex flex-col md:flex-row  ">
      {selectInfo.image && (
        <div className="relative bg-black w-full h-full flex-1">
          <Image
            fill
            src={selectInfo.image}
            alt={selectInfo.name}
            className=" object-cover w-[5rem] h-[5rem]"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      )}
      <IoMdCloseCircle
        size={46}
        className="absolute z-20 right-0 m-3 hover:opacity-25 hover:cursor-pointer "
        color="#fff"
        onClick={() => setModalOpen(false)}
      />
      <div className=" bg-black p-6 flex-1 text-white  ">
        <h2 className="text-4xl mb-12 font-bold lg:mb-[16rem] md:mb-[16rem]">
          {selectInfo.name}
        </h2>
        <p>{selectInfo.description}</p>
        <p className="text-xs font-bold mt-8 mb-1">{selectInfo.time}</p>
        {selectInfo.url ? (
          <Link href={selectInfo.url} className="text-xs font-bold">
            {selectInfo.url}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;
