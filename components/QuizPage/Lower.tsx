"use client";
import { Result } from "@/utils/getData";
import Counter from "../Counter";
import Score from "../Score";
import { useQuestionsStore } from "@/store/store";
import DecodedQuestion from "../DecodedQuestion";
import { motion } from "framer-motion";

interface LowerProps {
  data?: Result;
}

export default function Lower({ data }: LowerProps) {
  const { activeQuestion, result } = useQuestionsStore();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="sm:w-10/12 w-11/12 h-max m-auto bg-white absolute top-[17.5%] rounded-3xl p-4 flex flex-col sm:gap-8 gap-5"
    >
      <Counter activeQuestion={activeQuestion} />
      <div className="w-full flex justify-between items-center">
        <Score placement="right" Answers={result.correctAnswers} />
        <Score placement="left" Answers={result.incorrectAnswers} />
      </div>
      <h1 className="text-xl m-auto text-Secondary">
        Question {activeQuestion + 1}/20
      </h1>
      <h1 className="font-medium text-2xl m-auto text-center">
        <DecodedQuestion
          question={data ? data?.[activeQuestion]?.question : ""}
        />
      </h1>
    </motion.div>
  );
}
