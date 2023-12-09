import React, { Profiler } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-96 bg-slate-500 h-screen flex flex-col items-center justify-center">
    

      <div className="flex items-center">
      <a href={'/'}>
            <div className="w-7 h-7 relative hover:scale-125 ">
            <Image src={'/back.png'} alt="" fill/>
            </div>
        </a>
        <div className="bg-red-400 h-16 w-16 rounded-full relative ml-2">
          <Image src={"/aa.jpg"} alt={""} fill className="rounded-full" />
        </div>
        <div className="pl-2">
          <h1 className="text-xl">Naydlyne Aurora</h1>
          <h2 className="text-sm">naydlyneaurora@gmail.com</h2>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-10 ">
        <Link href={'#'} className="hover:text-[#FF9494]">Akun dan keamanan </Link>
        <Link href={'#'} className="hover:text-[#FF9494]">Alamat </Link>
        <Link href={'#'} className="hover:text-[#FF9494]">Pesanan saya</Link>
        <Link href={'#'} className="hover:text-[#FF9494]">Pengaturan notifikasi</Link>
        <Link href={'#'} className="hover:text-[#FF9494]">Pengaturan bahasa</Link>
        <Link href={'#'} className="hover:text-[#FF9494]">Log in / ganti akun</Link>
        <Link href={'#'} className="hover:text-[#FF9494]">Log out</Link>
        
      </div>
    </div>
  );
}
