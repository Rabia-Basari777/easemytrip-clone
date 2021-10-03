import React from "react";
import { AboutEase } from "./AboutEase";
import { Block } from "./Block";
import { Bookingmenu } from "./Booking";
import { FligthRouteDetail } from "./FligthRouteDetail";
import { Footer } from "./Footer";
import { Footerup } from "./Footerup";
import { Navbar } from "./Navbar";
import { TravelBlog } from "./TravelBlog";

const Home = () => {
  return (
    <>
      <Navbar />
      <Bookingmenu />
      <Block />
      <FligthRouteDetail />
      <TravelBlog />
      <AboutEase />
      <Footerup />
      <Footer />
    </>
  );
};

export { Home };