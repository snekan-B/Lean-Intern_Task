import React, { useState, useEffect } from "react";
import t from "../css/text.module.css";
import { useNavigate } from "react-router-dom";
import RocketLogo from "./RocketLogo";

function Main() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Notify Me");
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(3);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    // Check if the domain is valid (replace with your valid domains)
    const validDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "aol.com",
      "msn.com",
      "live.com",
      "facebook.com",
      "ymail.com",
    ];
    const [, domain] = email.split("@");
    const isDomainValid = validDomains.includes(domain);

    return isValid && isDomainValid;
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const handleNotifyClick = () => {
    if (isEmailValid) {
      setIsLoading(true); // Set loading state to true
      setTimeout(() => {
        setIsLoading(false); // After 1.5 seconds, set loading state to false
        // Your logic for Notify Me action can go here
        setButtonText("✓"); // Set button text to tick mark for valid email
      }, 1500);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false); // After 1.5 seconds, set loading state to false
        // Your logic for Notify Me action can go here
        setButtonText("Invalid Email"); // Set button text to tick mark for valid email
      }, 1500);
      // Set button text to "Invalid Email" for invalid email
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        navigate("/success");
      } else {
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds, navigate]);
  return (
    <div>
      <div className={t.navText}>
        THE <span className={t.insideNavHead}>PRODUCT</span> PLATFORM
      </div>

      <div>
        <div className={t.mainContent}>
          <div className={t.header}>
            <div className={t.Heading}>
              <RocketLogo />
              <div className={t.mainHead}>Launching New Module Soon!</div>
            </div>
            <div className={t.mainText}>
              Exciting things are in the works! We're currently
              <span className={t.mainTextHigh}>Crafting a new feature</span> for
              you.<br></br> Keep an eye out for updates - We're working to make
              it available soon!
            </div>
          </div>
          <div className={t.revealText}>GET READY FOR THE REVEAL!</div>
          <div className={t.minutetimer}>
            <div className={t.timerminute}>
              <div className={t.minutes}>
                {String(minutes).padStart(2, "0")}
              </div>
              <div className={t.min}>Minutes</div>
            </div>
            <div className={t.timerSymbol}>:</div>
            <div className={t.timerseconds}>
              <div className={t.seconds}>
                {String(seconds).padStart(2, "0")}
              </div>
              <div className={t.sec}>Seconds</div>
            </div>
          </div>
          <div className={t.bottomSection}>
            <div className={t.mainSubText}>
              Be the first to know! Share your email and We'll notify you when
              it's live
            </div>
            <div>
              <div className={t.emailInputContainer}>
                <input
                  className={t.emailInput}
                  type="email"
                  required
                  placeholder="Please enter your email id"
                  value={email}
                  onChange={handleEmailChange}
                ></input>
                <button
                  className={t.button}
                  onClick={handleNotifyClick}
                  disabled={!email || isLoading} // Disable when email is invalid or loading
                >
                  {isLoading ? <div className={t.loader}></div> : buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
