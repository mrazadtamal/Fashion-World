import React from "react";

import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  Service,
  Carousel,
  WeBelieve,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Carousel />
    <AboutUs />
    <WeBelieve />
    <Service />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
