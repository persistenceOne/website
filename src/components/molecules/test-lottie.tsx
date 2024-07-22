import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../../public/images/lotties/error.json"; // Adjust this path

const LottieAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div
      className={`lottie-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Lottie
        options={defaultOptions}
        height={400} // Adjust height and width as per your animation
        width={400}
      />
    </div>
  );
};

export default LottieAnimation;
