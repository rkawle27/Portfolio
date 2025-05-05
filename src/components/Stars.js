import React, { useEffect } from 'react';

function Stars() {
  useEffect(() => {
    const numStars = 150;
    const starsContainer = document.querySelector(".stars");

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      star.style.animationDuration = (Math.random() * 2 + 1) + "s";
      starsContainer.appendChild(star);
    }
  }, []);

  return <div className="stars"></div>;
}

export default Stars;
