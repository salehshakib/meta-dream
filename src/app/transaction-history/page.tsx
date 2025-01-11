import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CiSearch } from "react-icons/ci";

const transactions = [
  {
    id: "01",
    txId: "#9834758HGT",
    amount: "$45,000",
    account: "Account A",
    date: "May 12, 2022",
    type: "Deposit",
    status: "Failed",
    referralCode: "B384HD",
    paymentMethod: "BinancePay",
  },
  {
    id: "02",
    txId: "#9824375KFG",
    amount: "$38,500",
    account: "Account B",
    date: "May 14, 2022",
    type: "Withdraw",
    status: "Completed",
    referralCode: "C493SG",
    paymentMethod: "bKash",
  },
  {
    id: "03",
    txId: "#9836721JTK",
    amount: "$22,300",
    account: "Account C",
    date: "May 18, 2022",
    type: "Transfer",
    status: "Completed",
    referralCode: "D472GA",
    paymentMethod: "PayPal",
  },
  {
    id: "04",
    txId: "#9752390QPL",
    amount: "$19,100",
    account: "Account D",
    date: "May 20, 2022",
    type: "Refund",
    status: "Completed",
    referralCode: "E493AG",
    paymentMethod: "BinancePay",
  },
  {
    id: "05",
    txId: "#9824375KFG",
    amount: "$38,500",
    account: "Account B",
    date: "May 14, 2022",
    type: "Withdraw",
    status: "Completed",
    referralCode: "C493SG",
    paymentMethod: "bKash",
  },
  {
    id: "06",
    txId: "#9836721JTK",
    amount: "$22,300",
    account: "Account C",
    date: "May 18, 2022",
    type: "Transfer",
    status: "Completed",
    referralCode: "D472GA",
    paymentMethod: "PayPal",
  },
  {
    id: "07",
    txId: "#9752390QPL",
    amount: "$19,100",
    account: "Account D",
    date: "May 20, 2022",
    type: "Refund",
    status: "Completed",
    referralCode: "E493AG",
    paymentMethod: "BinancePay",
  },
];

export default function TransactionHistory() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between py-4">
        <Input placeholder="Search" icon={<CiSearch />} />

        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="last7days">Last 7 days</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-56">
              <SelectValue placeholder="Transaction type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deposit">Deposit</SelectItem>
              <SelectItem value="withdraw">Withdraw</SelectItem>
              <SelectItem value="transfer">Transfer</SelectItem>
              <SelectItem value="refund">Refund</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="account1">Account 1</SelectItem>
              <SelectItem value="account2">Account 2</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="gap-2" size={"lg"}>
            Export
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableHead className="w-16">SL</TableHead>
              <TableHead>TRX ID</TableHead>
              <TableHead>AMOUNT</TableHead>
              <TableHead>ACCOUNT</TableHead>
              <TableHead>TRX DATE</TableHead>
              <TableHead>TRX TYPE</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>REFERRAL CODE</TableHead>
              <TableHead>PAYMENT METHOD</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell className="font-medium">
                  {transaction.txId}
                </TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.account}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.status === "Failed"
                        ? "destructive"
                        : "success"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{transaction.referralCode}</div>
                </TableCell>
                <TableCell>{transaction.paymentMethod}</TableCell>
                <TableCell>
                  <Button
                    variant={"outline"}
                    className="h-8 w-8 rounded-md hover:bg-slate-100"
                  >
                    ⋮
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
