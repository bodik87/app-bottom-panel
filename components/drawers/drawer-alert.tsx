"use client";

import { useState } from "react";
import { Drawer } from "vaul";
import DrawerButton from "./_components/drawer-button";

export function DrawerAlert() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root shouldScaleBackground dismissible={false} open={open}>
      <Drawer.Trigger asChild onClick={() => setOpen(true)}>
        <button className="flex">Alert</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="max-w-md mx-auto bg-white flex flex-col rounded-t-2xl mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-2xl flex-1">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">Alert</Drawer.Title>
              <p className="text-zinc-600">Are you shure?</p>
              <DrawerButton title="Confirm" onClick={() => setOpen(false)} />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
