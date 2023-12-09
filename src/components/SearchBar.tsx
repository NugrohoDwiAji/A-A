import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <form action="" className="w-[400px] relative">
      <div className="relative ">
        <input
          type="search"
          placeholder="Search"
          className="w-full h-[50px] p-4  rounded-full bg-white border-4 border-slate-200"
        />
        <button className="absolute  right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-100 rounded-full hover:shadow-xl">
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
}
