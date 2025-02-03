import { useState } from "react";

const navbarItems = ["About Me", "Experience", "Project"];

export default function Navbar() {
  const [isSelected, setIsSelected] = useState("About Me");

  return (
    <div className="py-5 container max-w-page sticky top-0 z-50 bg-black rounded-full">
      <div className="font-bricolage font-bold border-2 rounded-full py-4 px-8 md:px-14 flex justify-center md:justify-between items-center ">
        <p className="text-3xl cursor-pointer text-white hidden md:block">Made Satya</p>
        <ul className="flex gap-5 cursor-pointer">
          {navbarItems.map((item) => (
            <li key={item} onClick={() => setIsSelected(item)} className={item === isSelected ? "text-white" : "text-slate-500"}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
