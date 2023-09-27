import React from "react";

export default function BackGround() {
  return (
    <div className="absolute top-0 left-0 w-full h-full max-h-[500px] bg-Secondary rounded-3xl overflow-hidden">
      <div className="w-20 aspect-square rounded-full bg-Main -top-6 right-1/3 absolute"></div>
      <div className="w-40 aspect-square rounded-full bg-Main -top-10 left-10 absolute"></div>
      <div className="w-32 aspect-square rounded-full bg-Main top-1/2 -left-10 absolute"></div>
      <div className="w-32 aspect-square rounded-full bg-Main top-1/3 -right-10 absolute"></div>
      <div className="w-20 aspect-square rounded-full bg-Main top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 absolute"></div>
    </div>
  );
}
