import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainData from "../MainData/MainData";
import Header from "../Header/Header";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="nav">
          <Header />
      </div>
      <div className="body">
          <Sidebar />
          <MainData />
      </div>
    </div>
  );
};

export default Home;
