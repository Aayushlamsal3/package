import React, { useRef, useEffect } from "react";
import Lottie from "lottie-web";
import animationData from "./7A6p8cZCxx.json"; // Ensure to import your animation JSON

const MyLottieAnimation = ({ onAnimationComplete, width, height, color }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    // After 2 seconds, trigger the callback to signal animation completion
    const animationTimeout = setTimeout(() => {
      onAnimationComplete();
    }, 1500);

    return () => {
      anim.destroy(); // Clean up animation on unmount
      clearTimeout(animationTimeout); // Clear timeout on unmount
    };
  }, [onAnimationComplete]);

  return (
    <div
      className="animation-container"
      ref={animationContainer}
      style={{ width, height }}
    >
      <style>{`
        .animation-container > svg path {
          fill: ${color}; // Customize SVG fill color
        }
      `}</style>
    </div>
  );
};

export default MyLottieAnimation;
