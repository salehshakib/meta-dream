import { transactionTypes } from "@/assets/data/transaction-types";
import TransactionCard from "@/components/card/transaction-card";
import { FiUser } from "react-icons/fi";

import warningImage from "@/assets/images/warning.png";
import Image from "next/image";

export default function Withdraw() {
  return (
    <div className="w-full max-w-6xl mx-auto min-h-[80vh] m-4 px-4 ">
      <div className="text-center font-semibold text-3xl">Withdraw</div>
      <div className="text-center text-gray-500 my-5 mt-3 text-sm ">
        Manage your information, subscriptions, and security
      </div>

      <div className="w-full max-w-4xl my-4 bg-[#FFF6E9] rounded-xl p-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className='flex gap-2 items-center'>
            <div className="bg-[#E08300] size-[60px] rounded-full flex items-center justify-center">
              <Image src={warningImage} alt="warning-image" />
            </div>
            <div className='flex flex-col gap-1'>
              <span className="text-[#E08300] font-medium">Verify KYC to withdraw</span>
              <span className='text-gray-500 text-sm'>Two-step verification is enabled</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg border border-[#E08300] cursor-pointer px-4 py-2 text-[#E08300] duration-300 font-medium hover:text-white hover:bg-[#E08300] hover:border-[#E08300]">
            <FiUser />
            Go to accounts
          </div>
        </div>
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
      <div className="text-center font-semibold text-3xl mt-10 border-t  pt-5">
        Transfer
      </div>
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
