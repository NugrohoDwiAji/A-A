import React from "react";
import Header from "@/components/Header";
import Crousel from "@/components/Crousel";
import DataNamaToko from "@/data/DataNamaToko.json";
import Toko from "@/components/Toko";
import CardBarang from "@/components/CardBarang";

export default function index() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex justify-center bg-slate-300 h-[600px] mt-[100px]">
        <Crousel />
        <div>
          <div className="h-[175px] w-[390px] bg-slate-400 mt-[100px] rounded-2xl"></div>
          <div className="h-[175px] w-[390px] bg-slate-400 mt-[50px] rounded-2xl"></div>
        </div>
      </div>
      <div className="flex mt-[-50px] m-auto w-[600px] h-[100px] bg-slate-50 border-4 border-[#FF9494] rounded-2xl relative">
        <h1></h1>
        <div className="w-[200px] h-full rounded-l-2xl"></div>
        <div className="w-[5px]  bg-[#FF9494] "></div>
        <div className="w-[200px] h-full"></div>
        <div className="w-[5px] bg-[#FF9494] "></div>
        <div className="w-[200px] h-full rounded-r-2xl"></div>
      </div>
      <div className="h-[225px] bg-[#FFF] mt-[-50px] flex justify-between gap-20 pl-60 pr-60">
        {DataNamaToko.map((item, index) => (
          <Toko src={item.url} namaToko={item.nama} key={index} />
        ))}        
      </div>
      <div className="p-10 bg-[#FFD1D1] mt-10">
      <CardBarang/>
      </div>
    </div>
  );
}
