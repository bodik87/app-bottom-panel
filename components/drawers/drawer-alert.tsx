"use client";

import { useState } from "react";
import { Drawer } from "vaul";
import DrawerButton from "./_components/drawer-button";
import { AlignJustify } from "lucide-react";

const App = () => {
  return <AlignJustify />;
};

export default App;

export function DrawerAlert() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root shouldScaleBackground dismissible={false} open={open}>
      <Drawer.Trigger asChild onClick={() => setOpen(true)}>
        <button className="flex">Alert</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="max-w-md mx-auto bg-white flex flex-col rounded-t-2xl mt-24 fixed bottom-0 left-0 right-0 flex-1">
          <div className="p-4 w-full">
            <h3 className="font-medium">Alert</h3>
            <p className="text-gray-600 mt-4">Are you shure?</p>
            <DrawerButton title="Confirm" onClick={() => setOpen(false)} />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
