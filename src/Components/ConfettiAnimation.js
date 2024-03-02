// ConfettiAnimation.js

import React, { useEffect } from "react";

const ConfettiAnimation = () => {
  useEffect(() => {
    const confettiContainer = document.body;

    function createConfetti() {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confettiContainer.appendChild(confetti);

      // Remove confetti after animation completes
      confetti.addEventListener("animationiteration", function () {
        confetti.remove();
      });
    }

    // Create confetti at intervals
    const confettiInterval = setInterval(createConfetti, 200);

    // Cleanup interval on component unmount
    return () => clearInterval(confettiInterval);
  }, []);

  return null;
};

export default ConfettiAnimation;
