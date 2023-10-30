import React from "react";
import background from "../css/background.module.css";
function Background() {
  return (
    <div>
      <div className={background.circleTopLeft}></div>
      <div className={background.circleBottomRight}></div>
    </div>
  );
}

export default Background;
