"use client";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { LuSquareUser } from "react-icons/lu";
import { MdOutlineHistory } from "react-icons/md";

interface MenuItem {
  name: string;
  key: string;
  icon: JSX.Element;
  href: string;
}

const menus: MenuItem[] = [
  {
    name: "Trading Accounts",
    key: "trading-accounts",
    icon: <LuSquareUser size={18} />,
    href: "/",
  },
  {
    name: "Deposit",
    key: "deposit",
    icon: <GoArrowDownLeft size={18} />,
    href: "/deposit",
  },
  {
    name: "Withdraw",
    key: "withdraw",
    icon: <GoArrowUpRight size={18} />,
    href: "/withdraw",
  },
  {
    name: "Transaction History",
    key: "transaction-history",
    icon: <MdOutlineHistory size={18} />,
    href: "/transaction-history",
  },
  {
    name: "Settings",
    key: "settings",
    icon: <IoIosSettings size={18} />,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="border-r p-4 w-[22rem]  space-y-2 bg-[#ffffff54]">
      <div className="flex items-center justify-center flex-col px-10  py-4 pb-[21px] gap-3 ">
        <div className="size-8 rounded-full bg-gradient-to-b from-[#000000] to-[#666666]" />

        <h1 className="font-semibold text-2xl w-full">Meta Dream</h1>
      </div>

      <div className="py-2 space-y-2 border-b border-t">
        {menus.map((menu) => (
          <div key={menu.key}>
            <a
              href={menu.href}
              className={
                pathname === menu.href ||
                (menu.href === "/" && pathname === "/create-trade-account")
                  ? "flex items-center gap-2 py-2 px-4 text-sm font-semibold text-blue-500 bg-blue-50 hover:text-blue-600 hover:bg-blue-100 rounded-md"
                  : "flex items-center gap-2 py-2 px-4 text-sm font-semibold hover:text-blue-600 hover:bg-blue-100 rounded-md"
              }
            >
              {menu.icon}
              <span>{menu.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
