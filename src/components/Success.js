import React, { useEffect } from "react";
import success from "../css/success.module.css";
import t from "../css/text.module.css";
import Confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  const triggerConfetti = () => {
    const duration = 2000; // 2 seconds (in milliseconds)
    const animationEnd = Date.now() + duration;

    const interval = setInterval(function () {
      if (Date.now() > animationEnd) {
        return clearInterval(interval);
      }

      Confetti({
        particleCount: 5, // Number of confetti particles
        spread: 100, // Spread of confetti
        colors: ["#FF0000", "#00FF00", "#0000FF"], // Colors of confetti
      });
    }, 25);
  };

  useEffect(() => {
    triggerConfetti();

    // Redirect to the /question route after four seconds
    const redirectTimeout = setTimeout(() => {
      navigate("/question");
    }, 4000);

    return () => {
      clearTimeout(redirectTimeout); // Cleanup the timeout on unmount
    };
  }, [navigate]);

  const handleGetStarted = () => {
    // Redirect to the /question route when the button is clicked
    navigate("/question");
  };

  return (
    <div className={success.container}>
      <div className={success.confetti}>
        <div className={success.confettiContainer}></div>
      </div>

      <div className={t.navText}>
        THE <span className={t.insideNavHead}>PRODUCT</span> PLATFORM
      </div>

      <div className={success.card}>
        <div className={success.cardHeading}>We are Live Now!</div>
        <div className={success.cardSubText}>
          Our new feature is now{" "}
          <span className={success.Highlight}>Live and ready </span>for you
          <br></br> to explore. Go ahead and give it a try.
        </div>
        <div>
          <button onClick={handleGetStarted} className={success.button}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
