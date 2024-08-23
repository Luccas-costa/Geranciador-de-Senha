"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import BackgroundAnimeted from "@/components/ui/BackgroundAnimated";
import NavBar from "@/components/NavBar";
import Display from "@/components/Display";
import NavBarCell from "@/components/NavBarCell";

export default function Dashboard() {
  const [Refresh, setRefresh] = useState<boolean>(false);
  const [NavbarResponsive, setNavbarResponsive] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated !== "true") {
      router.push("/"); // Redireciona para a página inicial ou para o componente Prohibited
    }
  }, [router]);

  useEffect(() => {
    const handleResize = () => {
      setNavbarResponsive(window.innerWidth < 600 ? true : false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlerrefresh = (
    estado: boolean | ((prevState: boolean) => boolean)
  ) => {
    if (Refresh === false) {
      setRefresh(true);
    }
    setRefresh(estado);
  };

  return (
    <div>
      <div style={{ zIndex: 1 }} className='h-screen w-screen overflow-hidden'>
        <BackgroundAnimeted />
      </div>

      <div
        style={{ zIndex: 3 }}
        className='absolute inset-0 z-20 backdrop-blur-3xl bg-white/30 size-full'
      >
        <div className='w-full flex screen14:flex-row flex-col-reverse p-1 justify-between'>
          {NavbarResponsive ? (
            <div className='sticky bottom-0' style={{ zIndex: 10 }}>
              <NavBarCell />
            </div>
          ) : (
            <NavBar handlerRefresh={handlerrefresh} />
          )}
          <Display refreshprops={Refresh} />
        </div>
      </div>
    </div>
  );
}
