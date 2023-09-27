interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  text: string;
}

export default function Button({ onClick, children, text }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className="flex w-full gap-3 flex-col cursor-pointer text-center"
    >
      <div className="w-2/5 aspect-square rounded-full bg-Main flex m-auto hover:scale-105 transition-all">
        {children}
      </div>
      <h1 className="font-medium sm:text-lg text-base">{text}</h1>
    </div>
  );
}
