import { Button } from "../ui/button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Separator } from "../ui/separator";
import { AccountType } from "../trading-accounts/accounts";

export default function GridView({
  account,
  type,
}: {
  account: AccountType;
  type: string;
}) {
  return (
    <div className="w-full p-4 border rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-xs bg-[#E1EFFE] text-[#1E429F] w-fit px-3 py-1 rounded-md font-medium">
            {type}
          </div>
          <span className="text-sm font-medium">#{account.id}</span>
        </div>

        <Button variant={"outline"} className="rounded-xl">
          <BsThreeDotsVertical />
        </Button>
      </div>
      <Separator className="my-4" />
      <div className="text-xs ">
        <div className="flex items-center justify-between">
          <span>Number</span>
          <span className="font-semibold">{account.id}</span>
        </div>
        <Separator className="my-2" />

        <div className="flex items-center justify-between">
          <span>Platform</span>
          <span className="font-semibold">{account.platform}</span>
        </div>
        <Separator className="my-2" />

        <div className="flex items-center justify-between">
          <span>Type</span>
          <span className="font-semibold">{account.type}</span>
        </div>

        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <span>Server</span>
          <span className="font-semibold">Metadream--mt5real12</span>
        </div>

        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <span>Actual Leverage</span>
          <span className="font-semibold">{account.leverage}</span>
        </div>

        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <span>Max Leverage</span>
          <span className="font-semibold">{account.leverage}</span>
        </div>

        <Separator className="my-2" />
      </div>
    </div>
  );
}
