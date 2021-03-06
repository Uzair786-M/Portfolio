import React from "react";
import Navbar from "./Ul/Navbar/Navbar";
import Home from "./Ul/Home/Home";
import Services from "./Ul/Services/Services";

import Benefit from "./Values/Benefits";
import Success from "./Values/Waytosuccess";
import Counter from "./Values/Counter";
import Technologies from "./Ul/Technologies/Technologies";
import Team from "./Ul/Team/Team";
import Contact from "./Ul/Contact/Contact";
import Footer from "./Ul/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Benefit />
      <Success />
      <Counter />
      <Technologies />
      <br />
      <br />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
