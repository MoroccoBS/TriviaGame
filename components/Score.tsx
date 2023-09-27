interface ScoreProps {
  placement?: string;
  Answers?: number;
  width?: number;
}

export default function Score({ placement, Answers, width }: ScoreProps) {
  return (
    <div className="flex gap-2 items-center">
      {placement === "left" ? (
        <>
          <div className={`w-10 h-2 rounded-2xl bg-red-500`}></div>
          <h1 className="font-bold text-xl text-red-500">{Answers}</h1>
        </>
      ) : (
        <>
          <h1 className="font-bold text-xl text-green-700">{Answers}</h1>
          <div className={`w-10 h-2 rounded-2xl bg-green-700`}></div>
        </>
      )}
    </div>
  );
}
