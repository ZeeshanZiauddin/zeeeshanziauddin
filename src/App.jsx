import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import RotatingCircles from "./components/RotatingCircles";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary p-[16px]">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <div className=" bg-primary bg-cover bg-no-repeat bg-center  rounded-lg overflow-hidden h-[96vh]">
          <Navbar />
          {/* <Hero /> */}

          <RotatingCircles />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
