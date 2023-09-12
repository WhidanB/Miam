import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Plats from "../components/Plats";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Search />
      <Plats />
    </div>
  );
};

export default Home;
