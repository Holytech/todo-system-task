"use client";
import {
  ArrowDown2,
  CloseCircle,
  Link1,
  Notification,
  SearchNormal1,
} from "iconsax-reactjs";
import Image from "next/image";
import React, { useState } from "react";

const TopNav = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="sticky w-full py-5 px-5 bg-white border-b border-stroke flex justify-between items-center">
      <div className="w-fit h-[46px] rounded-xl flex items-center gap-3 bg-light-grey border border-stroke py-2 px-3">
        <SearchNormal1 size="20" color="#6c7278" />
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-0 focus:outline-0 h-full"
        />
        {search.length > 0 && (
          <CloseCircle
            size="20"
            color="#464B50"
            onClick={() => setSearch("")}
          />
        )}
      </div>
      <div className="flex items-center gap-3">
        {[
          "/assets/images/nav_img.png",
          "/assets/images/nav_img_d.png",
          "/assets/images/nav_img_3cx.png",
          "/assets/images/nav_img_e.png",
        ].map((each: string, idx: number) => (
          <div
            key={idx}
            className="rounded-lg border border-stroke-1 h-[46px] w-[46px] flex items-center justify-center"
          >
            <Image
              src={each}
              alt=""
              width={25}
              height={25}
              className="object-contain rounded-full"
            />
          </div>
        ))}
      </div>
      <div className="flex items-stretch gap-2 h-[46px]">
        <div className="w-fit bg-light-grey rounded-xl border border-stroke-1 p-1 flex items-center gap-2">
          <div className="w-fit p-2 bg-indigo-950 text-white rounded-xl font-semibold text-sm">
            Melding maken
          </div>
          {["VIM", "LMS", "BHV", "DataLek"].map((each) => (
            <div
              key={each}
              className="w-fit p-2 bg-aqua-blue text-white rounded-xl font-semibold text-sm"
            >
              {each}
            </div>
          ))}
        </div>
        <div className="w-fit bg-light-grey rounded-xl border border-stroke-1 p-2 flex items-center">
          <Link1 size="26" color="#464B50" />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-light-grey rounded-full h-[46px] w-[46px] flex items-center justify-center">
          <Notification size="26" color="#464B50" />
        </div>
        <div className="bg-light-grey rounded-full h-[46px] flex items-center gap-4 p-2">
          <div className="flex items-center gap-2">
            <Image
              src={"/assets/images/paul.jpg"}
              alt="user profile picture"
              width={40}
              height={40}
              className="h-[40px] w-[40px] object-cover rounded-full"
            />
            <p className="text-xs font-semibold">Hi Paul</p>
          </div>
          <ArrowDown2 size="20" color="#6C7278" variant="Bold" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
