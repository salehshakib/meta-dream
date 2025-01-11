"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import userImage from "@/assets/images/user.png";

function formatKeyToTitleCase(key: string): string {
  return key
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Header() {
  const pathname = usePathname();

  const title =
    pathname === "/"
      ? "Trading Accounts"
      : formatKeyToTitleCase(pathname.split("/")[1]);

  return (
    <div className="w-full px-4 py-4 border-b flex justify-between items-center">
      <span className="font-medium text-base">{title}</span>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-sm font-semibold">Saleh Shakib</span>
          <span className="text-xs">Admin</span>
        </div>
        <Image src={userImage} alt="user-image" width={40} height={40} />
      </div>
    </div>
  );
}
