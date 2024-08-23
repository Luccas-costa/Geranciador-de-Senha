import React, {useState} from "react";
import {
  ArrowsClockwise,
  Gear,
  ListBullets,
  MagnifyingGlass,
  PlusCircle,
  Trash,
} from "@phosphor-icons/react";


export default function NavBar2() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>();
  return (
    <div className='w-full h-[70px] flex items-center justify-evenly rounded-t-xl bg-zinc-200 border-t border-neutral-700/60 shadow-2xl'>
      <div>
      <ListBullets
                size={40}
                weight={hoveredIcon === "house" ? "fill" : "regular"}
                color={"#404040"}
              />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
