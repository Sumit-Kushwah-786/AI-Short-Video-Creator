import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";

const options = [
  {
    name: "Youtuber",
    style:
      "text-yellow-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg",
  },
  {
    name: "Superme",
    style:
      "text-white text-3xl font-bold italic drop-shadow-lg px-3 py-1 rounded-lg",
  },
  {
    name: "Neon",
    style:
      "text-green-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg",
  },
  {
    name: "Glitch",
    style:
      "text-pink-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg",
  },
  {
    name: "Fire",
    style:
      "text-red-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg",
  },
  {
    name: "Futuristic",
    style:
      "text-blue-500 text-3xl font-semibold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg",
  },
  {
    name: "Cyberpunk",
    style:
      "text-purple-500 text-3xl font-bold uppercase tracking-widest drop-shadow-[0_0_6px_rgba(255,0,255,0.8)] px-3 py-1 rounded-lg",
  },
  {
    name: "Shadow",
    style:
      "text-gray-800 text-3xl font-semibold uppercase tracking-wide shadow-xl px-3 py-1 rounded-lg",
  },
  {
    name: "Matrix",
    style:
      "text-green-700 text-3xl font-mono uppercase tracking-wider drop-shadow-md px-3 py-1 rounded-lg",
  },
  {
    name: "Ice",
    style:
      "text-cyan-400 text-3xl font-bold uppercase tracking-wider drop-shadow-md px-3 py-1 rounded-lg",
  },
  {
    name: "Royal",
    style:
      "text-indigo-600 text-3xl font-bold italic tracking-wide drop-shadow-md px-3 py-1 rounded-lg",
  },
  {
    name: "Minimal",
    style:
      "text-black text-3xl font-light tracking-normal px-3 py-1 rounded-lg",
  },
  {
    name: "Galaxy",
    style:
      "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-3xl font-bold uppercase tracking-wider px-4 py-1 rounded-xl shadow-lg",
  },
  {
    name: "Electric",
    style:
      "text-yellow-300 text-3xl font-extrabold uppercase animate-pulse drop-shadow-[0_0_8px_#facc15] px-3 py-1 rounded-lg",
  },
  {
    name: "Aqua Wave",
    style:
      "bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-3xl font-semibold uppercase px-4 py-1 rounded-full shadow-md",
  },
  {
    name: "Shadow Neon",
    style:
      "text-green-400 text-3xl font-black uppercase tracking-wide drop-shadow-[0_0_10px_#22c55e] px-3 py-1 rounded-lg",
  },
  {
    name: "Golden Glow",
    style:
      "text-yellow-400 text-3xl font-bold uppercase tracking-wider drop-shadow-[0_0_6px_#facc15] px-3 py-1 rounded-lg",
  },
  {
    name: "Inferno",
    style:
      "bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 text-white text-3xl font-extrabold uppercase px-4 py-1 rounded-lg shadow-md",
  },
  {
    name: "Plasma",
    style:
      "bg-gradient-to-r from-fuchsia-600 to-violet-500 text-white text-3xl font-bold uppercase px-4 py-1 rounded-lg shadow-md",
  },
  {
    name: "Steel",
    style:
      "bg-gradient-to-br from-gray-700 to-gray-900 text-white text-3xl font-medium uppercase tracking-wide px-4 py-1 rounded-xl shadow-inner",
  },
  {
    name: "Ocean Deep",
    style:
      "bg-gradient-to-br from-blue-800 to-indigo-900 text-white text-3xl font-semibold uppercase px-4 py-1 rounded-lg",
  },
  {
    name: "Candy Pop",
    style:
      "bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-500 text-white text-3xl font-bold uppercase px-4 py-1 rounded-full shadow-md",
  },
];

function Captions({ onHandleInputChange }) {
  const [selectedCaptionStyle, setSelectedCaptionStyle] = useState();
  return (
    <div className="mt-5">
      <h2>Captions Style</h2>
      <p className="text-sm text-gray-400 mb-1">Select Captions Style </p>
      <ScrollArea className="h-[200px] w-full">
        <div className="flex flex-wrap gap-4 mt-2">
          {options.map((option, index) => (
            <div
              className={`cursor-pointer p-3  rounded-lg hover:border border-gray-300 bg-slate-900 ${option.name == selectedCaptionStyle && `border`}`}
              onClick={() => {
                setSelectedCaptionStyle(option.name);
                onHandleInputChange("caption", option);
              }}
              key={index}
            >
              <h2 className={option.style}>{option.name}</h2>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Captions;
