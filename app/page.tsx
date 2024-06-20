"use client";

import { useEffect, useState } from "react";
import BottomPanel from "@/components/bottom-panel";
import { DrawerSingle } from "@/components/drawers/drawer-single";
import Carousel from "@/components/carousel";
import { Delete, Search } from "lucide-react";
import useWindowDimensions from "@/lib/useWindowDimensions";

const items = [
  "First element",
  "Item 2",
  "Element",
  "First 22",
  "Item 3",
  "Element",
  "First 44",
  "Item 4",
  "Element",
  "First element",
  "Item 56",
  "Element",
  "Something else",
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function Homepage() {
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
    if (text) {
      setText("");
    }
  };

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    window.document.body.style.height = height.toString();
  }, [height]);

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
            <button
              onClick={handleClose}
              className={`${
                !text && "cursor-default"
              } absolute right-0 top-0 h-[50px] w-[50px] rounded-r-xl flex items-center justify-center`}
            >
              {text ? <Delete /> : <Search />}
            </button>
          </div>

          <DrawerSingle />
        </div>
      </BottomPanel>
    </>
  );
}
