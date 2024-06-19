"use client";

import { useState } from "react";
import BottomPanel from "@/components/bottom-panel";
import { DrawerSingle } from "@/components/drawers/drawer-single";
import Carousel from "@/components/carousel";
import { Search as SearchPanel } from "@/components/drawers/search";
import { Search } from "lucide-react";

const items = ["First element", "Item", "Element", "Something else"];

type Props = {};

export default function Homepage({}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Carousel />

      <SearchPanel items={items} open={open} setOpen={setOpen} />

      <BottomPanel>
        <div className="w-full pl-4 flex justify-between items-center">
          <div
            onClick={() => setOpen(true)}
            className="w-full bg-white flex items-center justify-between text-gray-500 h-[50px] rounded-xl px-4 text-xl cursor-text hover:ring-1 hover:ring-gray-300 transition-all"
          >
            <span> Search...</span>
            <Search />
          </div>

          <DrawerSingle />
        </div>
      </BottomPanel>
    </>
  );
}
