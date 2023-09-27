import Quiz from "@/components/Quiz";
import Lower from "@/components/QuizPage/Lower";
import Questions from "@/components/QuizPage/Questions";
import Upper from "@/components/QuizPage/Upper";
import getQuiz, { Result } from "@/utils/getData";

interface Props {
  params: {
    type: string;
  };
}

export default async function Page({ params }: Props) {
  const data = await getQuiz(params.type);
  return <Quiz data={data} />;
}
