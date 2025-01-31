import { useState } from "react";

const navbarItems = ["About Me", "Experience", "Project", "Contact"];

export default function Navbar() {
  const [isSelected, setIsSelected] = useState("About Me");

  return (
    <div className="py-8 container max-w-page">
      <div className="font-bricolage font-bold border-2 rounded-full py-4 px-14  flex justify-between items-center ">
        <p className="text-3xl cursor-pointer text-white">Made Satya</p>
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
