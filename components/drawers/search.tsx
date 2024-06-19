import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Delete, X } from "lucide-react";

type SearchProps = {
  items: string[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Search = ({ items, open, setOpen }: SearchProps) => {
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
                <div className="relative w-full">
                  <input
                    type="search"
                    value={text}
                    autoFocus
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-[50px] rounded-xl pl-4 pr-10 text-xl border-2"
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

                <button
                  onClick={handleClose}
                  className="min-w-[70px] h-[70px] flex justify-center items-center"
                >
                  <X size={30} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              transition={{ ease: "anticipate" }}
              className="fixed bottom-0 h-[calc(100svh_-_70px)] v-app w-full overflow-y-auto bg-white"
            >
              <div className="relative h-full overflow-y-auto p-4">
                <div className="mx-auto max-w-md space-y-4">
                  <h2 className="text-2xl font-bold">Searching result</h2>
                  {text.length > 0 ? (
                    <>
                      {filteredItems.length > 0 ? (
                        <>
                          {filteredItems.map((item) => (
                            <div key={item}>{item}</div>
                          ))}
                        </>
                      ) : (
                        <div>No results</div>
                      )}
                    </>
                  ) : (
                    <>
                      <p>Type something...</p>
                      <small className="opacity-50">
                        First element, Item, Element, Something else
                      </small>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
