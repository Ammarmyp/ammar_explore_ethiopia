"use client";
import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const buttonText = pathname === "/" ? "LEARN MORE" : "BACK TO HOME";

  const handleButtonClick = () => {
    if (pathname === "/") {
      router.push("/about");
    } else {
      router.push("/");
    }
  };
  return (
    <header className="w-full bg-transparent backdrop-blur-sm z-50 fixed">
      <nav className="flex justify-between items-center px-10 py-4">
        <div className="flex gap-2 items-center text-white">
          <Mountain size={20} />
          <span className="font-semibold">ETHIO EXPLORE</span>
        </div>
        <Button
          className="rounded-md text-xs text-white bg-primary"
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;
