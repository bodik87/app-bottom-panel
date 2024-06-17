"use client";

import { Drawer } from "vaul";

export function DrawerSide() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <button className="flex">Side</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full w-[400px] mt-24 fixed bottom-0 right-0">
          <div className="p-4 bg-white flex-1 h-full">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">Title</Drawer.Title>
              <p className="text-zinc-600 mb-2">Content</p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
