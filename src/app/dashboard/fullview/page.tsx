"use client";
import React, { useState } from "react";
import BackgroundAnimeted from "@/components/ui/BackgroundAnimated";
import FullViewNavBar from "@/components/FullViewNavBar";
import FullViewDisplay from "@/components/FullViewDisplay";

export default function Fullview() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className='relative w-full min-h-screen'>
      <div className='absolute inset-0 z-1 w-full h-full'>
        <BackgroundAnimeted />
      </div>
      <div
        style={{ zIndex: 3, height: "max-content" }}
        className='absolute inset-0 z-20 backdrop-blur-3xl bg-white/40 w-full '
      >
        <div className='w-full h-screen flex flex-col justify-between'>
          <FullViewNavBar setSearchQuery={setSearchQuery} />
          <FullViewDisplay searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}
