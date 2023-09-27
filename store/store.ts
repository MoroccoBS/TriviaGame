import { create } from "zustand";

type CategoryState = {
  category: string;
};

type CategoryActions = {
  setCategory: (category: string) => void;
  resetCategory: () => void; // Added resetCategory function
};

export const useCategoryStore = create<CategoryState & CategoryActions>(
  (set) => ({
    category: "",
    setCategory: (category) => set({ category }),
    resetCategory: () => set({ category: "" }), // Added resetCategory implementation
  })
);

type questionsState = {
  activeQuestion: number;
  selectedAnswer: string;
  selectedAnswerIndex: number;
  result: {
    score: number;
    correctAnswers: number;
    incorrectAnswers: number;
  };
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type questionsActions = {
  setActiveQuestion: (activeQuestion: number) => void;
  setSelectedAnswer: (answer: string) => void;
  setSelectedAnswerIndex: (answerIndex: number) => void;
  updateCorrectAnswer: (by?: number) => void;
  updateIncorrectAnswer: (by?: number) => void;
  setQuestion: (question: string) => void;
  setCorrectAnswer: (correct_answer: string) => void;
  setIncorrectAnswers: (incorrect_answers: string[]) => void;
  resetQuestions: () => void; // Added resetQuestions function
};

export const useQuestionsStore = create<questionsState & questionsActions>(
  (set) => ({
    activeQuestion: 0,
    selectedAnswer: "",
    selectedAnswerIndex: 0,
    result: {
      score: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
    },
    question: "",
    correct_answer: "",
    incorrect_answers: [],
    setActiveQuestion: (activeQuestion) => set({ activeQuestion }),
    setSelectedAnswer: (answer) => set({ selectedAnswer: answer }),
    setSelectedAnswerIndex: (answerIndex) =>
      set({ selectedAnswerIndex: answerIndex }),
    updateCorrectAnswer: (by = 1) =>
      set((state) => ({
        result: {
          ...state.result,
          score: state.result.score + by,
          correctAnswers: state.result.correctAnswers + by,
        },
      })),
    updateIncorrectAnswer: (by = 1) =>
      set((state) => ({
        result: {
          ...state.result,
          score: state.result.score,
          incorrectAnswers: state.result.incorrectAnswers + by,
        },
      })),
    setQuestion: (question) => set({ question }),
    setCorrectAnswer: (correct_answer) => set({ correct_answer }),
    setIncorrectAnswers: (incorrect_answers) => set({ incorrect_answers }),
    resetQuestions: () =>
      set({
        // Added resetQuestions implementation
        activeQuestion: 0,
        selectedAnswer: "",
        selectedAnswerIndex: 0,
        result: {
          score: 0,
          correctAnswers: 0,
          incorrectAnswers: 0,
        },
        question: "",
        correct_answer: "",
        incorrect_answers: [],
      }),
  })
);
