import React, { useState } from "react";

import {
  ArrowsClockwise,
  Gear,
  ListBullets,
  MagnifyingGlass,
  PlusCircle,
  Trash,
} from "@phosphor-icons/react";
import Link from "next/link";
import Spotylight2 from "./assets/SpotylightCell";
import SpotlightAdd2 from "./assets/SpotlightAddCell";
import { insertSenhaBD } from "@/utils/insertBD";
import SpotylightTrash2 from "./assets/SpotylightTrashCell";
import SpotylightUpdate from "./assets/SpotylightUpdatePc";
import SpotylightUpdate2 from "./assets/SpotylightUpdateCell";
import SpotylightTrashCell from "./assets/SpotylightTrashCell";
import SpotylightUpdateCell from "./assets/SpotylightUpdateCell";
import SpotlightAddCell from "./assets/SpotlightAddCell";
import SpotylightCell from "./assets/SpotylightCell";

interface NavBarCellProps {
  handlerRefresh: (estado: boolean) => void;
}

export default function NavBarCell({ handlerRefresh }: NavBarCellProps) {
  const [Add, setAdd] = useState(false);
  const [Spotlight, setSpotlight] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [Spotlightadd, setSpotlightadd] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>();
  const [SpotylightTrash, setSpotylightTrash] = useState(false);
  const [SpotylightUpdate, setSpotylightUpdate] = useState(false);

  const handlerSoptlight = () => {
    setSpotlight(!Spotlight);
  };

  const handlerSoptlightAdd = () => {
    setSpotlightadd(!Spotlightadd);
  };

  const handlerSpotylightTrash = () => {
    setSpotylightTrash(!SpotylightTrash);
  };

  const handlerSoptlightUpdate = () => {
    setSpotylightUpdate(false);
  };

  const idAleatorio = () => {
    const id = Math.floor(10000 + Math.random() * 90000);
    return id;
  };

  const handlerInsertBD = async (data: {
    origem: string;
    email: string;
    senha: string;
  }) => {
    setIsLoading(true);
    handlerRefresh(true);
    const id = idAleatorio();
    await insertSenhaBD({
      id: id,
      origem: data.origem,
      email: data.email,
      senha: data.senha,
    });
    console.log("dados inseridos com sucesso");
    setIsLoading(false);
    handlerSoptlightAdd();
    handlerRefresh(false);
  };

  return (
    <div className='w-full h-[70px] flex items-center justify-evenly rounded-t-2xl bg-zinc-200 border-t border-neutral-700/60 shadow-2xl'>
      <div
        className='cursor-pointer absolute top-4 right-4 p-2 hover:bg-zinc-200/40 rounded-xl'
        onMouseEnter={() => setHoveredIcon("search")}
        onMouseLeave={() => setHoveredIcon(null)}
        onClick={handlerSoptlight}
      >
        <MagnifyingGlass
          size={40}
          weight={hoveredIcon === "search" ? "fill" : "regular"}
          color={"#404040"}
        />
      </div>

      <div
        className='cursor-pointer'
        onMouseEnter={() => setHoveredIcon("gear")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Gear
          size={40}
          weight={hoveredIcon === "gear" ? "fill" : "regular"}
          color={"#404040"}
        />
      </div>
      <div
        className='cursor-pointer'
        onClick={() => setSpotylightUpdate(!SpotylightUpdate)}
      >
        <ArrowsClockwise
          size={40}
          weight={hoveredIcon === "house" ? "fill" : "regular"}
          color={"#404040"}
        />
      </div>

      <div
        className='size-[100px] bg-zinc-200 border-l border-t border-r border-neutral-700/60 shadow-2xl rounded-full translate-y-[-40%] flex items-center justify-center cursor-pointer'
        onMouseEnter={() => setHoveredIcon("plus")}
        onMouseLeave={() => setHoveredIcon(null)}
        onClick={handlerSoptlightAdd}
      >
        <PlusCircle
          size={60}
          weight={hoveredIcon === "plus" ? "fill" : "light"}
          color={"#404040"}
        />
      </div>

      <div
        className='cursor-pointer'
        onMouseEnter={() => setHoveredIcon("house")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Link href='/pages/dashboard/fullview'>
          <ListBullets
            size={40}
            weight={hoveredIcon === "house" ? "fill" : "regular"}
            color={"#404040"}
          />
        </Link>
      </div>
      <div
        className='cursor-pointer'
        onMouseEnter={() => setHoveredIcon("trash")}
        onMouseLeave={() => setHoveredIcon(null)}
        onClick={() => setSpotylightTrash(!SpotylightTrash)}
      >
        <Trash
          size={40}
          weight={hoveredIcon === "trash" ? "fill" : "regular"}
          color={"#404040"}
        />
      </div>
      {Spotlight && <SpotylightCell onClose={handlerSoptlight} />}
      {Spotlightadd && (
        <SpotlightAddCell
          onClose={handlerSoptlightAdd}
          handlerInsertBD={handlerInsertBD}
          isLoading={isLoading}
        />
      )}
      {SpotylightTrash && (
        <SpotylightTrashCell
          onClose={handlerSpotylightTrash}
          handlerRefresh={handlerRefresh}
        />
      )}
      {SpotylightUpdate && (
        <SpotylightUpdateCell
          onClose={handlerSoptlightUpdate}
          handlerRefresh={handlerRefresh}
        />
      )}
    </div>
  );
}
