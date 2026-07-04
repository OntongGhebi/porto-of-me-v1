import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";
import ServiceSummary from "./sections/ServiceSummary";
import ReactLenis from "lenis/react";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";

const App = () => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
    </ReactLenis>
  );
};

export default App;
