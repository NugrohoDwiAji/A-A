import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function CardBarang() {
  return (
    <Link href="" className="h-[230px] w-[184px] flex flex-col rounded-xl hover:shadow-2xl transition-all duration-300 bg-white ">
      <div className="overflow-hidden relative rounded-t-lg bg-red-400 h-32">
        <Image
          src="/bb.jpg"
          alt=""
          fill
          className="w-full object-cover"
        />
      </div>
      <div className="pl-2 pr-2 pt-1">
        <h1 className="text-base font-semibold">Title</h1>
        <h2 className="text-red-600">harga</h2>
        <div className="flex mt-2">
          <div className="h-4 w-4 relative overflow-hidden">
            <Image src="/location.png" alt="" fill className="w-full"/>
          </div>
          <h3 className="text-slate-400">kota</h3>
        </div>
      </div>
    </Link>
  );
}
