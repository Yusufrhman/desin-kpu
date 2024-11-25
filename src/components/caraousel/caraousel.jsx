import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";




export default function CaraouselSlider({ data, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    // Clear interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full aspect-[20/8] overflow-hidden relative text-white ${className}`}
    >
      {/* Navigation Buttons */}
      <span
        className="absolute left-6 z-20 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={handlePrev}
      >
        <MdArrowBackIos size={72} />
      </span>
      <span
        className="absolute right-4 z-20 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={handleNext}
      >
        <MdArrowForwardIos size={72} />
      </span>

      <span className="absolute z-10 w-full h-full bg-gradient-to-t from-[#000000] to-transparent"></span>

      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={data[currentIndex].image}
            alt={`Slide ${currentIndex}`}
            className="absolute w-full h-full object-center object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", ease: "easeInOut", duration: 0.8 },
              opacity: { duration: 0.5 },
            }}
          />
        </AnimatePresence>
        <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xl z-30 font-bold w-2/5 text-center mx-auto">
          {data[currentIndex].text}
        </p>
      </div>
    </div>
  );
}
