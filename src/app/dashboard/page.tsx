"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import BackgroundAnimeted from "@/components/ui/BackgroundAnimated";

import Display2 from "@/components/DisplayCell";
import NavBarPc from "@/components/NavBarPc";
import NavBarCell from "@/components/NavBarCell";
import DisplayCell from "@/components/DisplayCell";
import DisplayPc from "@/components/DisplayPc";

export default function Dashboard() {
  const [Refresh, setRefresh] = useState<boolean>(false);
  const [VisiblePc, setVisiblePc] = useState<boolean>(false);
  const [NavBarResponsive, setNavBarResponsive] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated !== "true") {
      router.push("/"); // Redireciona para a página inicial ou para o componente Prohibited
    }
  }, [router]);

  useEffect(() => {
    const handleResize = () => {
      setNavBarResponsive(window.innerWidth < 600 ? true : false);
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

  const handlerVisiblePc = () => {
    setVisiblePc(!VisiblePc);
  };

  return (
    <div>
      <div
        style={{ zIndex: 1 }}
        className='min-h-screen w-screen overflow-hidden'
      >
        <BackgroundAnimeted />
      </div>
      <div
        style={{ zIndex: 3 }}
        className='absolute inset-0 z-20 backdrop-blur-3xl bg-white/30 size-full'
      >
        <div className='h-full w-full flex screen14:flex-row-reverse flex-col'>
          <div className='flex-1'>
            {NavBarResponsive ? (
              <DisplayCell refreshprops={Refresh} />
            ) : (
              <div className='absolute left-[300px] top-0'>
                {VisiblePc && <DisplayPc refreshprops={Refresh} />}
              </div>
            )}
          </div>
          <div style={{ zIndex: 4 }}>
            {NavBarResponsive ? (
              <NavBarCell handlerRefresh={handlerrefresh} />
            ) : (
              <div className='fixed top-0 left-0 h-full'>
                <NavBarPc
                  handlerRefresh={handlerrefresh}
                  handlerVisiblePc={handlerVisiblePc}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
