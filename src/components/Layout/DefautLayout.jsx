import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "./LayoutComponent/Header";
import Footer from "./LayoutComponent/Footer";
import axiosClient from "../../axios-client";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
