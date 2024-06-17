"use client";

import { Drawer } from "vaul";
import BottomPart from "./_components/bottom-part";
import NoDragArea from "./_components/no-drag-area";
import DragButton from "./_components/drag-button";

export function DrawerDouble() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button className="flex">First</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="max-w-md mx-auto bg-gray-100 flex flex-col rounded-t-2xl mt-24 h-full max-h-[96%] fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-2xl flex-1">
            <DragButton />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                First panel
              </Drawer.Title>
              <p className="text-gray-600 mb-2">Content</p>

              <Drawer.NestedRoot>
                <Drawer.Trigger className="my-4 rounded-full w-full bg-black p-4 font-semibold text-white hover:bg-black/80 outline-none transition-all">
                  Open Second
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="max-w-md mx-auto bg-gray-100 flex flex-col rounded-t-2xl h-full mt-24 max-h-[92%] fixed bottom-0 left-0 right-0">
                    <div className="p-4 bg-white rounded-t-2xl flex-1">
                      <DragButton />
                      <div className="max-w-md mx-auto">
                        <Drawer.Title className="font-medium mb-4">
                          Nested panel
                        </Drawer.Title>
                        <p className="text-gray-600 mb-2">Nested</p>
                        <NoDragArea>No drag area</NoDragArea>
                      </div>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.NestedRoot>
            </div>
          </div>
          <BottomPart />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
