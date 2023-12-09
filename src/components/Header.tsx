import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const headr =
    "h-[100px] bg-transparent flex justify-between items-center fixed top-0 left-0 right-0 p-[20px]";
  // const [color, setcolor] = useState(false);
 
  // // useEffect(() => {
  // //   const onScroll = (event: React.ChangeEvent<Body>) => {
     
  // //   };

  // //   window.addEventListener("scroll", onScroll);

  // //   return () => window.removeEventListener("scroll", onScroll);
  // // }, []);
  // const ChangeColor = () => {
  //   if (window.scrollY >= 100) {
  //     setcolor(true)
  //   } else {
  //     setcolor(false);
  //   }
  // }
  // window.onscroll = function(){ChangeColor}

  return (
    <div className="h-[100px] bg-[#FF9494] flex justify-between items-center fixed top-0 left-0 right-0 p-[20px]">
      <div className="h-[100px]  w-[100px] overflow-hidden relative">
        <Image className="" src="/A&A.png" alt="" fill />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="flex gap-5">
        <div className="h-[40px] w-[40px] overflow-hidden relative rounded-full">
          <Image src="/shopping-bag.png" alt="" fill />
        </div>
        <div className="h-[40px] w-[40px] overflow-hidden relative rounded-full">
          <Image src="/notification.png" alt="" fill />
        </div>
        <Link href={'/Halaman/seting'} className="h-[40px] w-[40px] overflow-hidden relative rounded-full hover:bg-slate-400 hover:scale-110">
          <Image src="/profile.png" alt="" fill />
        </Link>
      </div>
    </div>
  );
}
