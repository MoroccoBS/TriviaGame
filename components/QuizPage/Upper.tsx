import { AiOutlineArrowLeft } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";
import BackGround from "../BackGround";
import { useRouter } from "next/navigation";
import { useQuestionsStore } from "@/store/store";
import { useEffect } from "react";

export default function Upper() {
  const { resetQuestions } = useQuestionsStore();

  const router = useRouter();
  const handleGoBack = () => {
    router.back();
    setTimeout(() => {
      resetQuestions();
    }, 500);
  };
  return (
    <div className="w-full h-72 max-h-max px-10 py-4 font-semibold text-xl text-white rounded-3xl relative">
      <nav className="flex items-center justify-between h-max px-5 py-4 z-10 relative">
        <div onClick={handleGoBack} className="cursor-pointer">
          <AiOutlineArrowLeft size={30} />
        </div>
        <VscSettings size={30} />
      </nav>
      <BackGround />
    </div>
  );
}
