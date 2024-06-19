"use client";

import { useState } from "react";
import BottomPanel from "@/components/bottom-panel";
import { DrawerSingle } from "@/components/drawers/drawer-single";
import Carousel from "@/components/carousel";
import { Double } from "@/components/drawers/double-panel.tsx";

type Props = {};

export default function Homepage({}: Props) {
  const [text, setText] = useState("");
  return (
    <>
      <Carousel />

      <Double />

      <BottomPanel>
        <div className="w-full flex justify-between items-center">
          <input
            type="search"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-[50px] ml-4 rounded-xl px-4 text-xl"
            placeholder="Search..."
          />

          <DrawerSingle />
        </div>
      </BottomPanel>
    </>
  );
}
