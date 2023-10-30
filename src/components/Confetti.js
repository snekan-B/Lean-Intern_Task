import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

function Confetti() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  }, []);

  return (
    <div>
      {showConfetti && <ReactConfetti width={"1000px"} height={"1000px"} />}
    </div>
  );
}

export default Confetti;
