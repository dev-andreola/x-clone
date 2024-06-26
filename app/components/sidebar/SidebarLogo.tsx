"use client";

import { useRouter } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer transition"
    >
      <BsTwitterX color="white" size={28} />
    </div>
  );
};

export default SidebarLogo;
