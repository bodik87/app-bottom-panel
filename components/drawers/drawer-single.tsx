"use client";

import { Drawer } from "vaul";
import BottomPart from "./_components/bottom-part";
import DragButton from "./_components/drag-button";
import { AlignJustify } from "lucide-react";

export function DrawerSingle() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className="min-w-[70px] h-[70px] flex justify-center items-center">
          <AlignJustify size={30} />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="max-w-md mx-auto bg-white flex flex-col rounded-t-2xl max-h-[96%] fixed bottom-0 left-0 right-0 flex-1 pt-4 outline-none">
          <DragButton />
          <div className="mt-4 px-4 w-full text-lg">
            <h3 className="font-medium">Title</h3>
            <p className="text-gray-600 my-4">Content</p>
          </div>
          <BottomPart />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
