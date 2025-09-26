"use client";
import { ArrowDown2, ArrowLeft } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";
import { ISidebarMenu } from "../../utility/types/sideBar";
import { sideBarContents } from "./sidebar.helper";
import { useState } from "react";
import { ToggleButton } from "../toggle-button/ToggleButton";

const SideBar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCollapse = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  return (
    <div className="bg-white p-5 border-r border-stroke flex flex-col justify-between overflow-y-scroll no-scrollbar">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <Image
            src={"/assets/images/logo.png"}
            alt="Company's logo"
            width={153}
            height={62}
            className=""
          />
          <ArrowLeft
            size="28"
            className="text-shade-of-black-1 cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-3">
          {sideBarContents.map((nav: ISidebarMenu, idx: number) => {
            const hasChildren = nav?.children?.length;
            const isOpen = openIndex === idx;
            return (
              <div key={`${nav.name}${idx}`} className="mb-1">
                {hasChildren ? (
                  <div
                    onClick={() => toggleCollapse(idx)}
                    className="flex items-center justify-between p-2 rounded-xl font-semibold cursor-pointer hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center gap-3">
                      {nav.icon}
                      <p className="text-shade-of-black-2">{nav.name}</p>
                    </div>
                    <ArrowDown2
                      size="20"
                      color="#464B50"
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                ) : (
                  <Link
                    href={nav.linkTo}
                    className="flex items-center gap-3 p-2 rounded-xl font-semibold hover:bg-gray-100 transition"
                  >
                    {nav.icon}
                    <p className="text-shade-of-black-2">{nav.name}</p>
                  </Link>
                )}
                {hasChildren && isOpen && (
                  <div className="ml-8 mt-1 space-y-1">
                    {nav?.children?.map((child, childIdx) => (
                      <Link
                        href={child.linkTo}
                        key={`${child.name}${childIdx}`}
                        className="block p-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-light-grey py-2 px-4 rounded-lg flex flex-col gap-4">
        <div className="bg-white py-2 px-3 flex items-center gap-3 rounded-lg">
          <Image
            src={"/assets/images/england-flag.jpg"}
            alt="england flag"
            width={20}
            height={20}
            className="rounded-full border border-stroke h-5 w-5"
          />
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-500 font-semibold">English</p>
            <ArrowDown2
              size="20"
              color="#464B50"
              className={`transition-transform duration-300`}
            />
          </div>
        </div>
        <div className="bg-white py-2 px-3 flex items-center justify-between rounded-lg">
          <p className="text-gray-500">Dark Mode</p>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
