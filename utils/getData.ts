export type Result = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}[];

const getQuiz = async (type: string) => {
  const category = type === "Space" ? "17" : type === "History" ? "23" : "21";
  const res = await fetch(
    `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=easy&type=multiple`,
    { cache: "no-cache" }
  );
  const data = await res.json();
  return data.results as Result;
};

export default getQuiz;
