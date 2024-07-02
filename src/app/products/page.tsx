"use client";
import Image from "next/image";
import { Tabs } from "../common/components/ui/tabs";
import { CardStack } from "../common/components/ui/cardStack";

import { cn } from "../../../utils/cn";
import Link from "next/link";

export default function Products() {
  const tabs = [
    {
      title: "Betta",
      value: "betta",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Betta</p>
          <Image
            src="/betta.png"
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
            src="/adminPortal.png"
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
            src="/saDashboard.png"
            alt="Picture of the saDashboard"
            className="object-contain object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
    {
      title: "FunnyCards",
      value: "funnyCards",
      content: (
        <div className="h-[40rem] flex items-center rounded-2xl justify-center w-full bg-gradient-to-br from-purple-700 to-violet-900">
          <CardStack items={CARDS} />
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

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Nicholas",
    designation: "Anime Fan",
    content: (
      <p>
        This is an awesome website,Click the link:
        <Highlight>
          <Link href={"https://wind2017-dream.github.io/imageGallery/"}>
            wind2017-dream.github.io
          </Link>
        </Highlight>
        .Please follow the IG: <Highlight>wind2017_dream</Highlight>🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
