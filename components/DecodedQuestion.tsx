import { useEffect, useState } from "react";

interface DecodedQuestionProps {
  question: string;
  ClassName?: string;
}

export default function DecodedQuestion({
  question,
  ClassName,
}: DecodedQuestionProps) {
  const [decodedQuestion, setDecodedQuestion] = useState<string | null>("");
  useEffect(() => {
    const parser = new DOMParser();
    const decodedQuestion = parser.parseFromString(question, "text/html").body
      .textContent;
    setDecodedQuestion(decodedQuestion);
  }, [question]);

  return <div className={ClassName}>{decodedQuestion}</div>;
}
