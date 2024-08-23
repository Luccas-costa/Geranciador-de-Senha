import {
  ArrowsClockwise,
  Gear,
  PlusCircle,
  Trash,
} from "@phosphor-icons/react";
import React, { useState } from "react";

export default function NavBarCell() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>();
  return (
    <div className='h-[70px] bg-white w-full'>
      <div className='flex items-center justify-evenly relative'>
        <div
          className='hover:cursor-pointer'
          onMouseEnter={() => setHoveredIcon("plus")}
          onMouseLeave={() => setHoveredIcon(null)}
          //   onClick={() => setSpotlightAdd(!SpotlightAdd)}
        >
          <PlusCircle
            size={60}
            weight={hoveredIcon === "plus" ? "fill" : "regular"}
            color='black'
          />
        </div>

        <div
          className='hover:cursor-pointer'
          //   onClick={() => setSpotylightUpdate2(!SpotylightUpdate2)}
        >
          <ArrowsClockwise size={60} weight='regular' color='black' />
        </div>
        <div className='size-[100px] bg-green-500 rounded-full translate-y-[-50%]'></div>

        <div
          className='hover:cursor-pointer'
          onMouseEnter={() => setHoveredIcon("trash")}
          onMouseLeave={() => setHoveredIcon(null)}
          //   onClick={() => setSpotylightTrash2(!SpotylightTrash2)}
        >
          <Trash
            size={60}
            weight={hoveredIcon === "trash" ? "fill" : "regular"}
            color='black'
          />
        </div>

        <div
          onMouseEnter={() => setHoveredIcon("gear")}
          onMouseLeave={() => setHoveredIcon(null)}
          className='hover:cursor-pointer'
        >
          <Gear
            size={60}
            weight={hoveredIcon === "gear" ? "fill" : "regular"}
            color='black'
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
