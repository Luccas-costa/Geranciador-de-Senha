"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import BackgroundAnimeted from "@/components/ui/BackgroundAnimated";
import NavBar from "@/components/NavBar";
import Display from "@/components/Display";
import { getSenhasList } from "@/lib/data";

export default function Dashboard() {
  const [Refresh, setRefresh] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated !== "true") {
      router.push("/"); // Redireciona para a página inicial ou para o componente Prohibited
    }
  }, [router]);

  const handlerrefresh = (
    estado: boolean | ((prevState: boolean) => boolean)
  ) => {
    if (Refresh === false) {
      setRefresh(true);
    }
    setRefresh(estado);
  };

  return (
    <div className='relative w-full min-h-screen'>
      <div className='absolute inset-0 z-1 w-full h-full'>
        <BackgroundAnimeted />
      </div>

      <div
        style={{ zIndex: 3, height: "max-content" }}
        className='absolute inset-0 z-20 backdrop-blur-3xl bg-white/30 w-full '
      >
        <div className='w-full h-screen flex p-1 justify-between'>
          <NavBar handlerRefresh={handlerrefresh} />
          <Display refreshprops={Refresh} />
        </div>
      </div>
    </div>
  );
}
