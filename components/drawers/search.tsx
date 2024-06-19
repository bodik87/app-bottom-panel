import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type SearchProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Search = ({ open, setOpen }: SearchProps) => {
  return (
    <>
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-md space-y-4 text-neutral-400 overflow-y-auto">
          <h2 className="text-2xl font-bold text-neutral-400 z-10">
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
  const [text, setText] = useState("");

  const handleClose = () => {
    setOpen(false);
    setText("");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ ease: "easeInOut" }}
            className="fixed top-0 h-[70px] w-full overflow-hidden shadow-md bg-gray-200 flex items-center justify-between pl-4"
          >
            <div className="max-w-md mx-auto w-full flex justify-between items-center">
              <input
                type="search"
                value={text}
                autoFocus
                onChange={(e) => setText(e.target.value)}
                className="w-full h-[50px] rounded-xl px-4 text-xl border-2"
                placeholder="Search..."
              />
              <button
                onClick={handleClose}
                className="min-w-[70px] h-[70px] flex justify-center items-center"
              >
                <X size={30} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "40%", transition: { duration: 0.25 } }}
            transition={{ ease: "anticipate" }}
            className="fixed bottom-0 h-[calc(100dvh_-_70px)] w-full overflow-y-auto bg-white"
          >
            <div className="relative h-full overflow-y-auto p-4 pt-8">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
