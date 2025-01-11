import { Dispatch, SetStateAction } from "react";
import { Separator } from "../ui/separator";

interface AccountTypeCardProps {
  selected?: boolean;
  setSelectedCard?: Dispatch<SetStateAction<string>>;
  value: string;
  name: string;
  tagComponent?: React.ReactNode;
}

export default function AccountTypeCard({
  selected,
  setSelectedCard,
  value,
  name,
  tagComponent,
}: AccountTypeCardProps) {
  const handleSelect = () => {
    if (setSelectedCard) {
      setSelectedCard(value);
    }
  };

  return (
    <div
      className={`w-96 h-fit p-6 py-10 border shadow-md rounded-lg cursor-pointer 
      ${selected ? "border-[#2A8EFF] bg-[#2A8EFF0D]" : "border-gray-300"} 
      ${setSelectedCard ? "hover:bg-[#2A8EFF0D] hover:border-[#2A8EFF]" : ""}`}
      onClick={handleSelect}
    >
      <div className="pb-2 font-bold text-xl">{name}</div>

      {tagComponent && <div className="my-2">{tagComponent}</div>}

      <div className="text-sm my-4 text-gray-500">
        Most popular! Great account for all types of traders
      </div>
      <Separator className="my-4" />

      <div className="text-xs space-y-5">
        <div className="flex items-center justify-between">
          <span>Minimum Deposit</span>
          <span className="font-semibold">10 USD</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Spread</span>
          <span className="font-semibold">From 0.20</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Commission</span>
          <span className="font-semibold">No commission</span>
        </div>
      </div>
    </div>
  );
}
