import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

// if we want to fix some components in the UI, and change the particular component, we can do this by using "Outlet".
// in the below example Header and Footer will be fixed and we can change or give any component in place of "Outlet".

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
