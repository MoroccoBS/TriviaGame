import { useQuestionsStore } from "@/store/store";
import { BsCircleFill } from "react-icons/bs";
import { MdReplay } from "react-icons/md";
import { FaEye, FaFilePdf } from "react-icons/fa";
import { BiSolidShareAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Button from "./Button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
interface ResultPageProps {
  setResultPage: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ResultPage({ setResultPage }: ResultPageProps) {
  const { result, resetQuestions } = useQuestionsStore();
  const router = useRouter();

  const shareTo = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out my score!",
          text: result.score.toString(),
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      console.log("Sharing to Facebook is not supported in this browser.");
    }
  };
  return (
    <div className="h-full w-full ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: "50%" }}
        animate={{ opacity: 1, scale: 1, x: "50%" }}
        exit={{ opacity: 0, scale: 0.8, x: "50%" }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-max p-4 aspect-square rounded-full outline-Main outline outline-[12px] absolute sm:top-[15%] top-[12.5%] right-1/2 translate-x-1/2 flex justify-center items-center flex-col bg-white text-Secondary"
      >
        <h1 className="font-medium text-xl">Your Score</h1>
        <h1 className="font-bold text-2xl "> {result.score} pt</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: "-70%", x: "-50%" }}
        animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
        exit={{ opacity: 0, scale: 0.8, y: "-70%", x: "-50%" }}
        transition={{ duration: 0.5, type: "spring" }}
        className="sm:w-4/5 w-11/12 h-max sm:p-6 p-4 absolute top-1/2 left-1/2 bg-white rounded-3xl flex flex-col gap-4"
      >
        <div className="flex h-full w-full justify-evenly items-center">
          <div className="flex w-full h-full flex-col relative">
            <h1 className="font-medium sm:sm:text-3xl text-2xl text-Main ml-5">
              100%
            </h1>
            <h2 className="sm:text-xl text-lg ml-5">Completion</h2>
            <BsCircleFill className="absolute left-0 top-[18%] text-Main w-3 aspect-square" />
          </div>
          <div className="flex w-full h-full flex-col relative">
            <h1 className="font-medium sm:text-3xl text-2xl text-Main ml-5">
              20
            </h1>
            <h2 className="sm:text-xl text-lg ml-5">Total Question</h2>
            <BsCircleFill className="absolute left-0 top-[18%] text-Main w-3 aspect-square" />
          </div>
        </div>
        <div className="flex  h-full w-full justify-evenly items-center">
          <div className="flex w-full h-full flex-col relative">
            <h1 className="font-medium sm:text-3xl text-2xl text-green-600 ml-5">
              {result.correctAnswers}
            </h1>
            <h2 className="sm:text-xl text-lg ml-5">Correct</h2>
            <BsCircleFill className="absolute left-0 top-[18%] text-green-600 w-3 aspect-square" />
          </div>
          <div className="flex w-full h-full flex-col relative">
            <h1 className="font-medium sm:text-3xl text-2xl text-red-500 ml-5">
              {result.incorrectAnswers}
            </h1>
            <h2 className="sm:text-xl text-lg ml-5">Incorrect</h2>
            <BsCircleFill className="absolute left-0 top-[18%] text-red-500 w-3 aspect-square" />
          </div>
        </div>
      </motion.div>
      <div className="w-full h-full gap-4 flex flex-col pt-24 pb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.5, delay: 0.25 }}
          className="flex justify-between items-center w-full h-full"
        >
          <Button
            text="Play Again"
            onClick={() => {
              setResultPage(false);
              setTimeout(() => {
                resetQuestions();
              }, 500);
            }}
          >
            <MdReplay className={"m-auto text-white"} size={40} />
          </Button>
          <Button text="Review Answers">
            <FaEye className={"m-auto text-white"} size={35} />
          </Button>
          <Button text="Share Score" onClick={shareTo}>
            <BiSolidShareAlt className={"m-auto text-white"} size={35} />
          </Button>
        </motion.div>
        <motion.div
          className="flex justify-between items-center w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.5, delay: 0.45 }}
        >
          <Button text="Generate PDF">
            <FaFilePdf className={"m-auto text-white"} size={35} />
          </Button>
          <Button text="Home" onClick={() => router.push("/")}>
            <AiFillHome className={"m-auto text-white"} size={35} />
          </Button>
          <Button text="LeaderBoard">
            <FiSettings
              className={"m-auto text-white"}
              size={35}
              onClick={() => router.push("/leaderboard")}
            />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
