"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import BackgroundAnimeted from "@/components/ui/BackgroundAnimated";
import NavBar2 from "@/components/NavBar2";
import NavBar3 from "@/components/NavBar3";

export default function Dashboard() {
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
          <div className='flex-1'>teste</div>
          <div>
            {NavbarResponsive ? (
              <NavBar2 />
            ) : (
              <div className='fixed top-0 left-0 h-full'>
                <NavBar3 />{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
