import { motion } from "framer-motion";

interface CounterProps {
  activeQuestion: number;
}

export default function Counter({ activeQuestion }: CounterProps) {
  console.log(activeQuestion);
  const calculateStrokeDasharray = () => {
    const progress = ((activeQuestion + 1) / 20) * 125;
    return progress;
  };
  return (
    <div className="w-20 h-20 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <svg
        viewBox="25 25 50 50"
        className="origin-center w-full h-full -rotate-90"
      >
        <circle
          r="20"
          cy="50"
          cx="50"
          className="fill-none stroke-Main stroke-[3.5] transition-all"
          style={{
            strokeDasharray: `${calculateStrokeDasharray()}, 125`,
            strokeDashoffset: 0,
            strokeLinecap: "round",
          }}
        ></circle>
      </svg>
      <h1 className="text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-bold text-Main">
        {activeQuestion + 1}
      </h1>
    </div>
  );
}
