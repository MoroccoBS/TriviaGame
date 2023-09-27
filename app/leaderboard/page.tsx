import Image from "next/image";
import LeaderboardImage from "@/public/leaderboard.svg";
import Ellipse21 from "@/public/Ellipse 22.png";
import Leaderboard from "@/components/Leaderboard";

export default function page() {
  return (
    <div className="w-full h-full rounded-3xl absolute bottom-0 left-0 overflow-hidden">
      <div className="w-full h-1/2 relative z-0 translate-y-5">
        <div className="-bottom-1/3 left-1/3 -translate-x-[65%] absolute drop-shadow-2xl">
          <Image
            src={LeaderboardImage}
            width={200}
            height={200}
            alt="Leaderboard"
            className="skew-x-12 -rotate-[10deg] scale-x-[-1]"
          />
          <div className="w-full h-full absolute top-0 flex flex-col">
            <Image
              src={Ellipse21}
              width={75}
              height={75}
              alt="Image"
              className="absolute -top-1/2 left-1/2 -translate-x-full translate-y-1/2"
            />
            <h1 className="mt-7 mx-16 text-6xl text-white font-bold">3</h1>
            <p className="mx-16 text-white text-xl">442pt</p>
          </div>
        </div>
        <div className=" -bottom-0 translate-y-5 left-1/2 -translate-x-1/2 absolute drop-shadow-2xl">
          <Image
            src={LeaderboardImage}
            width={200}
            height={200}
            alt="Leaderboard"
            className="-rotate-12 scale-x-[-1]"
          />
          <div className="w-full h-full absolute top-0 flex flex-col">
            <Image
              src={Ellipse21}
              width={75}
              height={75}
              alt="Image"
              className="absolute -top-1/2 left-1/2 -translate-x-2/3 translate-y-1/2"
            />
            <h1 className="mt-7 mx-20 text-6xl text-white font-bold">1</h1>
            <p className="mx-20 -translate-x-1/4 text-white text-xl">442pt</p>
          </div>
        </div>
        <div className="-bottom-1/3 right-0 md:-translate-x-[17%] translate-x-[5%] -translate-y-1/4 absolute drop-shadow-2xl">
          <Image
            src={LeaderboardImage}
            width={200}
            height={200}
            alt="Leaderboard"
            className="skew-x-12 rotate-[25deg] fill-Main"
          />
          <div className="w-full h-full absolute top-0 flex flex-col">
            <Image
              src={Ellipse21}
              width={75}
              height={75}
              alt="Image"
              className="absolute -top-1/2 left-2/3 -translate-x-2/3 translate-y-1/4"
            />
            <h1 className="mt-7 mx-20 text-6xl text-white font-bold">2</h1>
            <p className="mx-20 -translate-x-1/4 text-white text-xl">442pt</p>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 rounded-3xl overflow-y-scroll z-10 relative bg-white">
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
      </div>
    </div>
  );
}
