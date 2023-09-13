import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Plats from "../components/Plats";

const Home = (data) => {
  return (
    <div className="Home">
      <Header />
      <Search />
      <Plats meals={data} />
    </div>
  );
};

export default Home;
