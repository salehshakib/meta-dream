import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

import mt5Image from "@/assets/images/mt5.png";
import Image from "next/image";

export default function CreateAccountActionBar() {
  return (
    <div className="w-full px-4 py-3 flex border-b items-center justify-between">
      <div className="flex items-center gap-5">
        <Link
          className="rounded-lg flex items-center justify-center gap-2 h-10 border px-4 hover:bg-[#EDF2F7] hover:border-[#EDF2F7] text-base shadow-sm duration-300"
          href="/"
        >
          <IoChevronBack /> Back
        </Link>
        <h1 className="rounded-lg text-base">Create new account</h1>
      </div>

      <Select>
        <SelectTrigger className="w-32 rounded-lg">
          <Image src={mt5Image} alt="user-image" width={20} height={20} />
          <SelectValue placeholder="MT5" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mt5">MT5</SelectItem>
          <SelectItem value="mt4">MT4</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
