import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { BsGraphUp } from "react-icons/bs";
import { AccountType } from "../trading-accounts/accounts";

export default function ListView({
  account,
  type,
}: {
  account: AccountType;
  type: string;
}) {
  return (
    <div className="w-full p-4 border rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-xs bg-[#E1EFFE] text-[#1E429F] w-fit px-3 py-1 rounded-md font-medium">
            {type}
          </div>
          <div className="text-xs bg-gray-100 text-black w-fit px-3 py-1 rounded-md font-medium">
            MT5
          </div>
          <div className="text-xs bg-gray-100 text-black w-fit px-3 py-1 rounded-md font-medium">
            Standard
          </div>
          <span className="text-sm font-medium">#{account.id}</span>
        </div>
        <Button variant={"ghost"} className="rounded-xl">
          <IoIosArrowDown />
        </Button>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between items-center">
        <div>
          <span className="text-lg font-medium">123.</span>
          <span className="text-sm">00 USD</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button size={"lg"} className="bg-[#2A8EFF] text-white rounded-xl">
            <BsGraphUp />
            Trade
          </Button>
          <Button size={"lg"} variant={"outline"} className="rounded-xl">
            <GoArrowDownLeft />
            Deposit
          </Button>
          <Button size={"lg"} variant={"outline"} className="rounded-xl">
            <GoArrowUpRight />
            Withdraw
          </Button>
          <Button size={"lg"} variant={"outline"} className="rounded-xl">
            <BsThreeDotsVertical />
          </Button>
        </div>
      </div>
    </div>
  );
}
