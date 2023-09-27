"use client";
import Image from "next/image";
import Sports from "@/public/sports.svg";
import History from "@/public/history.svg";
import Space from "@/public/space.svg";
import { useCategoryStore } from "@/store/store";
import Link from "next/link";
interface CategoryProps {
  type: string;
  outlined?: boolean;
}

export default function Category({ type, outlined }: CategoryProps) {
  const { setCategory } = useCategoryStore();
  const src = type === "Space" ? Space : type === "History" ? History : Sports;
  return (
    <Link
      href={`/category/${type}`}
      onClick={() => setCategory(type)}
      className={`font-semibold ${
        outlined ? "outline outline-2 outline-Main" : "outline-none"
      } w-full aspect-square rounded-2xl flex flex-col text-Text p-4 bg-white gap-4`}
    >
      <h1 className="text-xl">{type}</h1>
      <Image className="m-auto" src={src} width={80} height={80} alt={type} />
    </Link>
  );
}
