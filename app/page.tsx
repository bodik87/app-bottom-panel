"use client";

import { useState } from "react";
import BottomPanel from "@/components/bottom-panel";
import { DrawerSingle } from "@/components/drawers/drawer-single";
import Carousel from "@/components/carousel";
import { Search } from "@/components/drawers/search";

type Props = {};

export default function Homepage({}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Carousel />

      <Search open={open} setOpen={setOpen} />

      <BottomPanel>
        <div className="w-full pl-4 flex justify-between items-center">
          <div
            onClick={() => setOpen(true)}
            className="w-full bg-white flex items-center text-gray-500 h-[50px] rounded-xl px-4 text-xl"
          >
            Search...
          </div>

          <DrawerSingle />
        </div>
      </BottomPanel>
    </>
  );
}
