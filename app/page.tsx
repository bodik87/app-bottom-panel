"use client";

import { useState } from "react";
import BottomPanel from "@/components/bottom-panel";
import { DrawerSingle } from "@/components/drawers/drawer-single";
import Carousel from "@/components/carousel";
import { Search as SearchPanel } from "@/components/drawers/search";
import { Delete, Search, X } from "lucide-react";

const items = ["First element", "Item", "Element", "Something else"];

type Props = {};

export default function Homepage({}: Props) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const filteredItems =
    text === ""
      ? []
      : items.filter(
          (element: any) =>
            element
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(text.toLowerCase().replace(/\s+/g, ""))
          // ||
          // element?.info
          //   ?.toLowerCase()
          //   .replace(/\s+/g, "")
          //   .includes(text.toLowerCase().replace(/\s+/g, ""))
        );

  const handleClose = () => {
    setOpen(false);
    setText("");
  };

  return (
    <>
      <Carousel />

      <BottomPanel>
        <div className="w-full pl-4 flex justify-between items-center">
          <div className="relative w-full">
            <input
              type="search"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-[50px] rounded-xl pl-4 pr-10 text-xl ring-1 ring-gray-300 "
              placeholder="Search..."
            />
            {text && (
              <button
                onClick={() => setText("")}
                className="absolute right-0 top-0 h-[50px] w-[50px] rounded-r-xl flex items-center justify-center"
              >
                <Delete />
              </button>
            )}
          </div>

          <DrawerSingle />
        </div>
      </BottomPanel>
    </>
  );
}
