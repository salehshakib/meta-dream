"use client";
import { useEffect, useState } from "react";
import TradingAccountsActionBar from "./action-bar";
import ListView from "../card/account-list-view";
import GridView from "../card/account-grid-view";

export interface AccountType {
  id: string;
  accountType: string;
  currency: string;
  leverage: string;
  nickname: string;
  password: string;
  platform: string;
  type: string;
}

export default function TradingAccounts() {
  const [view, setView] = useState<string>("list");
  const [type, setType] = useState<string>("real");

  const [accounts, setAccounts] = useState<AccountType[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAccounts = JSON.parse(
        localStorage.getItem("accountData") || "[]"
      );
      setAccounts(storedAccounts);
    }
  }, []);

  const filteredAccounts = accounts.filter(
    (account) => account.accountType === type
  );

  return (
    <>
      <TradingAccountsActionBar
        view={view}
        setView={setView}
        type={type}
        setType={setType}
      />
      <div className="w-full max-w-6xl mx-auto min-h-[80vh] m-4 px-4">
        {view === "list" ? (
          <div className="flex flex-col gap-4">
            {filteredAccounts.length > 0 ? (
              filteredAccounts.map((account: AccountType) => (
                <ListView type={type} key={account.id} account={account} />
              ))
            ) : (
              <div className="flex items-center justify-center h-[80vh] text-gray-500 text-sm font-semibold">
                No accounts found
              </div>
            )}
          </div>
        ) : (
          <div>
            {filteredAccounts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {filteredAccounts.map((account: AccountType) => (
                  <GridView type={type} key={account.id} account={account} />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-[80vh] text-gray-500 text-sm font-semibold">
                No accounts found
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
