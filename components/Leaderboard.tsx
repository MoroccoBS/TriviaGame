import Image from "next/image";
import Ellipse from "@/public/Ellipse 24.png";

export default function Leaderboard() {
  return (
    <div className="w-full px-10 py-4 flex gap-10 items-center text-xl font-medium">
      <h1>04</h1>
      <Image src={Ellipse} width={65} height={65} alt="Image"></Image>
      <h1>Ana</h1>
      <div className="px-4 rounded-full bg-Main ml-auto">
        <h1 className="text-lg">244pt</h1>
      </div>
    </div>
  );
}
