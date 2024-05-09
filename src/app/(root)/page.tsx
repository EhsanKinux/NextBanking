import HeaderBox from "@/components/HeaderBox";
import RightSibar from "@/components/RightSibar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "EKinux", lastName: "KH", email: "ekinux@gamil.com" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1234.87} />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSibar user={loggedIn} transactions={[]} banks={[{currentBalance: 234.87}, {currentBalance: 221.65}]} />
    </section>
  );
};

export default Home;
