import Header from "@/app/components/header";
import React from "react";

import Brands from "@/app/components/brands";
import Hero from "@/app/components/hero";
import List from "@/app/components/list";

const Home = () => {
  return (
    <div>
      <Header />

      <Hero />

      <Brands />

      <List />
    </div>
  );
};

export default Home;
