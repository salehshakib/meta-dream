import { transactionTypes } from "@/assets/data/transaction-types";
import TransactionCard from "@/components/card/transaction-card";

export default function Deposit() {
  return (
    <div className="w-full max-w-6xl mx-auto min-h-[80vh] m-4 px-4 ">
      <div className="text-center font-semibold text-3xl">Deposit</div>
      <div className="text-center text-gray-500 my-5 mt-3 text-sm ">
        Manage your information, subscriptions, and security
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {transactionTypes.map((item) => {
          return (
            <TransactionCard
              key={item.key}
              name={item.name}
              websiteLink={item.websiteLink}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
