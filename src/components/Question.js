import React from "react";
import t from "../css/text.module.css";
import userlogo from "../assets/profile.png";

function Question() {
  return (
    <div className={t.questionContainer}>
      <div className={t.navText}>
        THE <span className={t.insideNavHead}>PRODUCT</span> PLATFORM
      </div>

      <img className={t.userLogo} src={userlogo} alt="user-logo"></img>
    </div>
  );
}

export default Question;
