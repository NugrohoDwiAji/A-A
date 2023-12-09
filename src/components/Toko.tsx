import React from "react";
import Image from "next/image";

type tipeProps = {
  src: string;
  namaToko: string;
};
export default function Toko(prop: tipeProps) {
  return (
    <div >
      <div className="h-[100px] w-[100px] mt-[100px] rounded-full  bg-black relative border-[3px] border-[#FF9494]">
        <Image
          className="w-full object-cover rounded-full"
          src={prop.src}
          alt=""
          fill
        />
      </div>
      <h1 className="w-[95px] flex justify-center font-mono">{prop.namaToko}</h1>
    </div>
  );
}
