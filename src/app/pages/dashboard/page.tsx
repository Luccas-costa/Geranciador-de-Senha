"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import BackgroundAnimeted from "@/components/ui/BackgroundAnimated";
import NavBar from "@/components/NavBar";
import Display from "@/components/Display";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated !== "true") {
      router.push("/"); // Redireciona para a página inicial ou para o componente Prohibited
    }
  }, [router]);

  return (
    <div>
      <div style={{ zIndex: 1 }} className='h-screen w-screen overflow-hidden'>
        <BackgroundAnimeted />
      </div>

      <div
        style={{ zIndex: 3 }}
        className='absolute inset-0 z-20 backdrop-blur-3xl bg-white/30 size-full'
      >
        <div className='size-full flex p-1 justify-between'>
          <NavBar />
          <Display />
        </div>
      </div>
    </div>
  );
}
