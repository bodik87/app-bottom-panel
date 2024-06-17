import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const items = ["1", "2", "3", "4", "5"];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

type Props = {};

export default function Carousel({}: Props) {
  const [itemIndex, setItemIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setItemIndex((pv) => {
          if (pv === items.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && itemIndex < items.length - 1) {
      setItemIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && itemIndex > 0) {
      setItemIndex((pv) => pv - 1);
    }
  };

  return (
    <>
      <div className="p-4 max-w-xl mx-auto w-full relative overflow-hidden rounded-xl">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          // animate={{ translateX: `-${itemIndex * 100}%` }}
          animate={{
            translateX: `calc(-${itemIndex * 100}% - ${itemIndex * 16}px)`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex gap-4 cursor-grab items-center active:cursor-grabbing"
        >
          <Items />
        </motion.div>
      </div>
      <Dots itemIndex={itemIndex} setItemIndex={setItemIndex} />
    </>
  );
}

const Items = () => {
  return (
    <>
      {items.map((item, idx) => {
        return (
          <motion.div
            key={idx}
            transition={SPRING_OPTIONS}
            className="w-full aspect-video shrink-0 rounded-xl bg-neutral-300 object-cover flex justify-center items-center text-white text-3xl"
          >
            {item}
          </motion.div>
        );
      })}
    </>
  );
};

type DotProps = {
  itemIndex: number;
  setItemIndex: Dispatch<SetStateAction<number>>;
};

const Dots = ({ itemIndex, setItemIndex }: DotProps) => {
  return (
    <div className="max-w-xl mx-auto w-full flex justify-center gap-2">
      {items.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setItemIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === itemIndex ? "bg-neutral-400" : "bg-neutral-300"
            }`}
          />
        );
      })}
    </div>
  );
};

// https://www.hover.dev/components/carousels
