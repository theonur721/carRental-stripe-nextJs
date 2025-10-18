import { redirect } from "next/navigation";
import React from "react";

const Home = () => {
  redirect("/home");
  return <div>Home</div>;
};

export default Home;
