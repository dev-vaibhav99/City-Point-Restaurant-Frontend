import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";

const MainContent: React.FC = () => {
  return (
    <>
      <Menu>
        <Header />
        {/* <Routes>
          <Route path="/" Component={Dashboard} />
        </Routes> */}
        <Dashboard />
        <Footer />
      </Menu>
    </>
  );
};

export default MainContent;
