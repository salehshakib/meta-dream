"use client";

import AccountTypeCard from "@/components/card/account-type";
import CreateAccountActionBar from "@/components/create-account/action-bar";
import CreateAccountForm from "@/components/form/trading-accounts/create-account-form";
import { JSX, useState } from "react";
import { FaCheckCircle, FaChevronRight } from "react-icons/fa";
import { IoArrowDownSharp } from "react-icons/io5";

const StandardTagComponent = () => {
  return (
    <div className="flex items-center gap-2 w-fit rounded-md p-2 py-1 bg-[#2A8EFF] text-white text-xs">
      <FaCheckCircle />
      Recommended
    </div>
  );
};

const ProTagComponent = () => {
  return (
    <div className="flex items-center gap-2 w-fit rounded-md p-2 py-1 bg-gray-200 text-black text-xs">
      Professional
    </div>
  );
};

const RawSpeedTagComponent = () => {
  return (
    <div className="flex items-center gap-2 w-fit rounded-md p-2 py-1 bg-green-700 text-white text-xs">
      Instant
    </div>
  );
};

interface AccountType {
  key: string;
  name: string;
  tagComponent: JSX.Element;
}

interface AccountTypes {
  standard: AccountType;
  pro: AccountType;
  "raw-speed": AccountType;
}

const accountTypes: AccountTypes = {
  standard: {
    key: "standard",
    name: "Standard",
    tagComponent: <StandardTagComponent />,
  },
  pro: {
    key: "pro",
    name: "Pro",
    tagComponent: <ProTagComponent />,
  },
  "raw-speed": {
    key: "raw-speed",
    name: "Raw Speed",
    tagComponent: <RawSpeedTagComponent />,
  },
};

export default function CreateTradeAccount() {
  const [selectedCard, setSelectedCard] = useState<string>("standard");

  const [current, setCurrent] = useState<number>(0);

  const selectedAccountType = Object.values(accountTypes).find(
    (accountType) => accountType.key === selectedCard
  );

  return (
    <>
      <CreateAccountActionBar />
      <div className="m-4">
        {current === 0 ? (
          <div>
            <div className="flex items-center flex-wrap gap-4">
              {Object.values(accountTypes).map((accountType) => (
                <AccountTypeCard
                  key={accountType.key}
                  value={accountType.key}
                  selected={selectedCard === accountType.key}
                  setSelectedCard={setSelectedCard}
                  name={accountType.name}
                  tagComponent={accountType.tagComponent}
                />
              ))}
            </div>

            <div className="flex items-center justify-between mt-10">
              <div
                className="rounded-lg cursor-pointer flex items-center justify-center gap-2 border px-6 py-3 bg-[#2A8EFF] text-white
           hover:bg-[#1F73D8] hover:border-[#1F73D8] text-sm shadow-sm"
                onClick={() => setCurrent(1)}
              >
                Continue
                <FaChevronRight />
              </div>
              <div
                className="rounded-lg cursor-pointer flex items-center justify-center gap-2 border px-6 py-3
           hover:bg-[#EDF2F7] hover:border-[#EDF2F7] text-sm shadow-sm"
              >
                <IoArrowDownSharp /> More Options
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-8 w-full">
            <CreateAccountForm accountType={selectedCard} />
            <AccountTypeCard
              key={selectedAccountType.key}
              value={selectedAccountType.key}
              name={selectedAccountType.name}
              tagComponent={selectedAccountType.tagComponent}
            />
          </div>
        )}
      </div>
    </>
  );
}
