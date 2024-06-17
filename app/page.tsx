"use client";

import { useState } from "react";
import BottomPanel from "@/components/bottom-panel";
import { DrawerAlert } from "@/components/drawers/drawer-alert";
import { DrawerSingle } from "@/components/drawers/drawer-single";

type Props = {};

export default function Homepage({}: Props) {
  const [text, setText] = useState("");
  return (
    <>
      <DrawerAlert />
      <BottomPanel>
        <div className="w-full flex justify-between items-center">
          <input
            type="search"
            className="w-full h-12 ml-2 rounded-xl px-4 text-lg border"
            placeholder="Text"
          />

          <DrawerSingle />
        </div>
      </BottomPanel>
    </>
  );
}
