import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

type SearchProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Search = ({ open, setOpen }: SearchProps) => {
  return (
    <>
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-2xl font-bold text-neutral-200">
            Drag the handle at the top of this modal downwards 100px to close it
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            laboriosam quos deleniti veniam est culpa quis nihil enim suscipit
            nulla aliquid iure optio quaerat deserunt, molestias quasi facere
            aut quidem reprehenderit maiores.
          </p>
          <p>
            Laudantium corrupti neque rerum labore tempore sapiente. Quos, nobis
            dolores. Esse fuga, cupiditate rerum soluta magni numquam nemo
            aliquid voluptate similique deserunt!
          </p>
          <p>
            Rerum inventore provident laboriosam quo facilis nisi voluptatem
            quam maxime pariatur. Velit reiciendis quasi sit magni numquam quos
            itaque ratione, fugit adipisci atque est, tenetur officiis explicabo
            id molestiae aperiam? Expedita quidem inventore magni? Doloremque
            architecto mollitia, dicta, fugit minima velit explicabo sapiente
            beatae fugiat accusamus voluptatum, error voluptatem ab asperiores
            quo modi possimus.
          </p>
          <p>
            Sit laborum molestias ex quisquam molestiae cum fugiat praesentium!
            Consequatur excepturi quod nemo harum laudantium accusantium nisi
            odio?
          </p>
        </div>
      </DragCloseDrawer>
    </>
  );
};

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const DragCloseDrawer = ({ open, setOpen, children }: Props) => {
  const [scope, animate] = useAnimate();
  const [scopeTop, animateTop] = useAnimate();
  const [drawerRef, { height }] = useMeasure();
  const [text, setText] = useState("");

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animateTop("#top", { opacity: [1, 0], y: [0, -100] });

    animate(scope.current, { opacity: [1, 0] });
    const yStart = typeof y.get() === "number" ? y.get() : 0;
    await animate("#drawer", { y: [yStart, height] });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <div ref={scopeTop}>
          <motion.div
            id="top"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: "easeInOut" }}
            className="absolute top-0 h-[100px] w-full overflow-hidden shadow-md bg-white z-20 flex items-center justify-center px-4"
          >
            <input
              type="search"
              value={text}
              autoFocus
              onChange={(e) => setText(e.target.value)}
              className="w-full h-[50px] rounded-xl px-4 text-xl border-2"
              placeholder="Search..."
            />
          </motion.div>
        </div>
      )}

      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-10 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: "easeInOut" }}
            className="absolute bottom-0 h-[calc(100dvh_-_100px)] w-full overflow-hidden bg-white"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) handleClose();
            }}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
          >
            <div
              onPointerDown={(e) => controls.start(e)}
              className="absolute left-0 right-0 top-0 z-10 flex justify-center p-4 bg-white touch-none cursor-grab active:cursor-grabbing"
            >
              <div className="h-2 w-14 rounded-full bg-gray-300" />
            </div>

            <div className="relative z-0 h-full overflow-y-auto p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
