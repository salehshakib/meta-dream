import ListView from "@/components/card/account-list-view";
import TradingAccountsActionBar from "@/components/trading-accounts/action-bar";

export default function Home() {
  return (
    <>
      <TradingAccountsActionBar />
      <div className="container mx-auto min-h-[80vh] m-4 px-4 ">
        <ListView />
      </div>
    </>
  );
}
