import React from "react";
import NavBar from "./components/Public/navbar-contens/NavBar";
import BlueBar from "./components/Public/navbar-contens/BlueBar";
import Hero from "./components/Public/Hero";
import NewsSection from "./components/Public/NewsSection";
import Section_01 from "./components/Public/Section_01";
import Section_02 from "./components/Public/Section_02";
import BottomBlueBar from "./components/Public/BottomBlueBar";
import Footer from "./components/Public/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <BlueBar />
      {/* <Hero />  */}
      <Outlet />

      <NewsSection />
      <Section_01 />
      <Section_02 />
      <BottomBlueBar />

      <Footer />
    </>
  );
}
