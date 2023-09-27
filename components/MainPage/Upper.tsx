"use client";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import Profile from "@/public/Profile.jpeg";
import Category from "./Category";
import BackGround from "../BackGround";
import { usePathname, useRouter } from "next/navigation";
import { useQuestionsStore } from "@/store/store";
import { VscSettings } from "react-icons/vsc";
import Arrow from "@/public/arrow.svg";
export default function Upper() {
  const path = usePathname();
  const router = useRouter();
  const { resetQuestions } = useQuestionsStore();

  const handleRouteChange = () => {
    router.back();
    if (path.includes("/category")) {
      resetQuestions();
    }
  };
  return (
    <div className="w-full h-full sm:px-10 px-4 py-4 font-semibold text-xl text-white rounded-3xl relative ">
      <nav className="flex items-center justify-between h-max px-5 py-2 z-10 relative overflow-hidden text-center">
        <div onClick={handleRouteChange} className="w-full cursor-pointer">
          {/* <AiOutlineArrowLeft size={30} className={`stroke-2`} /> */}
          <Image src={Arrow} width={30} height={30} alt="Back" />
        </div>
        {path === "/" ? (
          <>
            <h1 className="w-full">Hello World</h1>
            <div className="w-full rounded-full flex">
              <div className="h-full rounded-full bg-white/50 p-1 ml-auto">
                <Image
                  src={Profile}
                  width={50}
                  height={50}
                  alt="Profile"
                  className="rounded-full aspect-square h-full object-cover"
                />
              </div>
            </div>
          </>
        ) : (
          <VscSettings onClick={() => router.push("/leaderboard")} size={30} />
        )}
      </nav>
      {path === "/" && (
        <div className="flex flex-col w-full gap-6 mt-14 z-10 relative">
          <h1 className="font-semibold text-2xl">Popular</h1>
          <div className="flex gap-4">
            <Category type="Space" />
            <Category type="History" />

            <Category type="Sports" />
          </div>
        </div>
      )}
      <BackGround />
    </div>
  );
}
