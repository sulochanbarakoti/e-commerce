import React from "react";
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import Popular from "../Components/Popular/Popular";
import NewCollection from "../Components/NewCollection/NewCollection";
import CenterBanner from "../Components/CenterBanner/CenterBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Popular />
      <CenterBanner />
      <NewCollection />
    </div>
  );
};

export default Home;
