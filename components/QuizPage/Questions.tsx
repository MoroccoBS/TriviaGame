"use client";
import { Result } from "@/utils/getData";
import { useQuestionsStore } from "@/store/store";
import Select from "./Select";
import _ from "lodash";
import React, { useEffect, useMemo, useState } from "react";

interface QuestionsProps {
  data?: Result;
  setResultPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Questions({ data, setResultPage }: QuestionsProps) {
  const {
    activeQuestion,
    setActiveQuestion,
    setSelectedAnswerIndex,
    selectedAnswerIndex,
    updateCorrectAnswer,
    updateIncorrectAnswer,
  } = useQuestionsStore();
  const [shuffledChoices, setShuffledChoices] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string | undefined>("");
  const [check, setCheck] = useState(false);
  const choices = useMemo(() => {
    return data && data[activeQuestion]
      ? [
          data[activeQuestion].correct_answer,
          ...data[activeQuestion].incorrect_answers,
        ]
      : [];
  }, [data, activeQuestion]);

  useEffect(() => {
    setShuffledChoices(_.shuffle(choices));
    if (data && activeQuestion + 1 < data?.length) {
      setCorrectAnswer(data?.[activeQuestion].correct_answer);
    }
  }, [choices, activeQuestion, data]);

  const handleClick = (answer: string, index: number) => {
    setCheck(true);
    setSelectedAnswerIndex(index);
    setCorrectAnswer(data?.[activeQuestion].correct_answer);
    if (shuffledChoices[index] === correctAnswer) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      updateCorrectAnswer();
    } else {
      updateIncorrectAnswer();
    }
    if (data && activeQuestion + 1 < data?.length) {
      setTimeout(() => {
        setCheck(false);
        setActiveQuestion(activeQuestion + 1);
      }, 1500);
    } else {
      setTimeout(() => {
        setCheck(false);
        setResultPage(true);
      }, 1500);
    }
  };

  const handleCorrectAnswer = () => {
    handleAnswer(true);
  };

  const handleIncorrectAnswer = () => {
    handleAnswer(false);
  };

  return (
    <div className="w-full h-full sm:pt-16 sm:px-10 pt-10 px-6 overflow-y-scroll flex flex-col gap-5 text-2xl font-semibold">
      {shuffledChoices?.map((item, index) => (
        <Select
          disabled={check}
          onClick={() => handleClick(item, index)}
          key={item}
          answer={item}
          isCorrect={{
            check:
              (check && correctAnswer === item) ||
              (check && selectedAnswerIndex === index),
            isCorrect: item === correctAnswer,
          }}
          index={index}
        />
      ))}
    </div>
  );
}
