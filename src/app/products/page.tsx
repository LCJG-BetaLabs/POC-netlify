"use client";
import Image from "next/image";
import { Tabs } from "../common/components/ui/tabs";

import betta from "../../../public/betta.png";
import adminPortal from "../../../public/adminPortal.png";
import sdDashboard from "../../../public/saDashboard.png";

export default function Products() {
  const tabs = [
    {
      title: "Betta",
      value: "betta",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Betta</p>
          <Image
            src={betta}
            alt="Picture of the betta"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
    {
      title: "ElsieAdminPortal",
      value: "adminPortal",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Elsie Admin Portal</p>
          <Image
            src={adminPortal}
            alt="Picture of the adminPortal"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
    {
      title: "ElsieSaDashboard",
      value: "elsieSaDashboard",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Elsie Sa Dashboard</p>
          <Image
            src={sdDashboard}
            alt="Picture of the saDashboard"
            className="object-contain object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
