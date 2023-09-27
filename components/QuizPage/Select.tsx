"use client";
import { motion } from "framer-motion";
import { BsCircle } from "react-icons/bs";
import { FiCheck, FiX } from "react-icons/fi";
import DecodedQuestion from "../DecodedQuestion";

interface SelectProps {
  answer?: string;
  isCorrect?: { check: boolean; isCorrect: boolean };
  onClick?: () => void;
  disabled?: boolean;
  variants?: any;
  index?: number;
}
export default function Select({
  answer,
  isCorrect,
  onClick,
  disabled,
  index,
}: SelectProps) {
  const variants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: -20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
    },
  };
  return (
    <motion.div
      transition={{
        duration: 0.5,
        type: "spring",
        delay: index && index * 0.2,
      }}
      className={`z-10 relative bg-white w-full px-6 py-4 rounded-xl outline outline-[3px] outline-Main flex items-center justify-between cursor-pointer ${
        disabled ? "pointer-events-none" : ""
      }`}
      onClick={onClick}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      <DecodedQuestion
        ClassName="font-semibold"
        question={answer ? answer : ""}
      />
      <div className="relative">
        <BsCircle
          size={30}
          className={`w-full h-full rounded-full ${
            isCorrect?.check && isCorrect?.isCorrect
              ? "bg-Main text-Main"
              : isCorrect?.check && !isCorrect?.isCorrect
              ? "bg-red-500 text-red-500"
              : "text-Main"
          }`}
        />
        {isCorrect?.check && isCorrect?.isCorrect ? (
          <FiCheck
            size={25}
            className={`text-Main w-4/5 aspect-square absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white`}
          />
        ) : isCorrect?.check && !isCorrect?.isCorrect ? (
          <FiX
            size={25}
            className={`text-white w-4/5 aspect-square absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2`}
          />
        ) : null}
      </div>
    </motion.div>
  );
}
