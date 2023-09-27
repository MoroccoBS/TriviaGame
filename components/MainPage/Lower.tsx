import Category from "./Category";

export default function Lower() {
  return (
    <div className="w-full h-full sm:px-10 px-6 py-4 flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-semibold text-xl">Explore</h1>
        <h2 className="text-lg font-medium">View All</h2>
      </div>
      <div className="w-full flex gap-4">
        <Category type="Space" outlined />
        <Category type="History" outlined />
        <Category type="Sports" outlined />
      </div>
    </div>
  );
}
