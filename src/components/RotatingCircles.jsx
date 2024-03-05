import { useState, useEffect } from "react";
import { styles } from "../styles";
import MagneticButton from "./magneticButton";

function RotatingCircles() {
  const [circle1X, setCircle1X] = useState(0);
  const [circle1Y, setCircle1Y] = useState(0);
  const [circle2X, setCircle2X] = useState(0);
  const [circle2Y, setCircle2Y] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = Date.now() / 1000;
      const circle1Radius = 400;
      const circle2Radius = 750;
      const circle1Angle = time * -0.9;
      const circle2Angle = time * 1;
      setCircle1X(Math.cos(circle1Angle) * circle1Radius);
      setCircle1Y(Math.sin(circle1Angle) * circle1Radius);
      setCircle2X(Math.cos(circle2Angle) * circle2Radius);
      setCircle2Y(Math.sin(circle2Angle) * circle2Radius);
    }, 10);
    return () => clearInterval(intervalId);
  }, []);

  const circle1Style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) translate(${circle1X}px, ${circle1Y}px)`,
    width: "680px",
    height: "700px",
    borderRadius: "50%",
    backgroundColor: "#6162A2",
    dropShadow: "30px 30px 100px #6162A2",
  };

  const circle2Style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) translate(${circle2X}px, ${circle2Y}px)`,
    width: "720px",
    height: "700px",
    borderRadius: "50%",
    backgroundColor: "#C32E3B",
    dropShadow: "30px 30px 100px #C32E3B",
  };

  return (
    <div className="relative">
      <div
        style={{
          position: "relative",
          height: "130vh",
          width: "100%",
          filter: "blur(90px)",
          boxShadow: "0px 0px 10px #000",
          overflow: "hidden",
        }}
      >
        <div style={circle1Style}></div>
        <div style={circle2Style}></div>
      </div>
      <div className=" absolute top-[20%] left-[10%]">
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915EFF]">Zeeshan</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I design and develope<br className="sm:block hidden" /> Stunning, yet powerfull user  <br className="sm:block hidden" />
          interfaces and web applications

        </p>
        {/* <MagneticButton link='abcd'/> */}
      </div>
      <div><img src="" alt="" /></div>
    </div>
  );
}

export default RotatingCircles;
