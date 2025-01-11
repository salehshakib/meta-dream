import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CiSearch } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import { LuLayoutGrid, LuPlus } from "react-icons/lu";
import { Input } from "../ui/input";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import Link from "next/link";

export default function TradingAccountsActionBar() {
  return (
    <div className="w-full px-4 py-3 flex border-b items-center justify-between">
      <div className="flex items-center gap-3">
        <Tabs defaultValue="real">
          <TabsList>
            <TabsTrigger value="real" className="px-14 py-[6px]">
              Real
            </TabsTrigger>
            <TabsTrigger value="demo" className="px-14 py-[6px]">
              Demo
            </TabsTrigger>
          </TabsList>
          {/* <TabsContent value="real">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="demo">Change your password here.</TabsContent> */}
        </Tabs>
        <Link
          className="rounded-lg flex items-center justify-center gap-2 h-10 border px-6 hover:bg-[#EDF2F7] hover:border-[#EDF2F7] text-base shadow-sm duration-300"
          href="/create-trade-account"
        >
          <LuPlus /> Create new account
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Input placeholder="Search" icon={<CiSearch />} />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Newest First" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="atoz">A to Z</SelectItem>
            <SelectItem value="ztoa">Z to A</SelectItem>
            <SelectItem value="hightolow">Price High to Low</SelectItem>
            <SelectItem value="lowtohigh">Price Low to high</SelectItem>
          </SelectContent>
        </Select>

        <Tabs defaultValue="real">
          <TabsList>
            <TabsTrigger value="real" className="px-4 h-full">
              <FaList size={17} />
            </TabsTrigger>
            <TabsTrigger value="demo" className="px-4 h-full">
              <LuLayoutGrid size={17} />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
