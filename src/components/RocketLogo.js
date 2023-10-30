import React, { useState, useEffect } from "react";
import rocketlogo from "../assets/LogoRocket.png";
import rocket2 from "../assets/rocket2.png";
import t from "../css/text.module.css";

function RocketLogo() {
  const [showRocket1, setShowRocket1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowRocket1((prev) => !prev);
    }, 1000); // Change images every second (1000ms)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={t.rocketContainer}>
      {showRocket1 ? (
        <img className={t.rocket1} src={rocketlogo} alt="rocket-logo"></img>
      ) : (
        <img className={t.rocket2} src={rocket2} alt="rocket2"></img>
      )}
    </div>
  );
}

export default RocketLogo;
