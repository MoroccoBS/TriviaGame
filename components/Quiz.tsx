"use client";
import { useState } from "react";
import { Result } from "@/utils/getData";
import Lower from "@/components/QuizPage/Lower";
import Questions from "./QuizPage/Questions";
import ResultPage from "./ResultPage/ResultPage";
import { AnimatePresence } from "framer-motion";
interface QuizProps {
  data: Result;
}

export default function Quiz({ data }: QuizProps) {
  const [resultPage, setResultPage] = useState(false);
  return (
    <AnimatePresence mode="wait">
      {resultPage ? (
        <ResultPage setResultPage={setResultPage} />
      ) : (
        <>
          <Lower data={data} />
          <Questions setResultPage={setResultPage} data={data} />
        </>
      )}
    </AnimatePresence>
  );
}
