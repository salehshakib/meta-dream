import Image, { StaticImageData } from "next/image";
import { Separator } from "../ui/separator";


interface TransactionCardProps {
  name: string;
  websiteLink: string;
  image: string | StaticImageData; 
}

export default function TransactionCard({
  name,
  websiteLink,
  image,

}: TransactionCardProps) {
  return (
    <div className="w-full p-6 rounded-xl border">
      <div className="flex gap-4">
        <Image src={image} alt="transaction-card" />
        <div className="flex  flex-col">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-gray-500">{websiteLink}</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="text-xs space-y-5">
        <div className="flex items-center justify-between">
          <span>Processing Time</span>
          <span className="font-semibold">Instant - 30 minutes</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Fee</span>
          <span className="font-semibold">0%</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Limits</span>
          <span className="font-semibold">10-20,000 USD</span>
        </div>
        </div>
    </div>
  );
}
