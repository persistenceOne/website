import React, { useState } from "react";
import Lottie from "react-lottie";
import Slide1 from "../../../public/images/lotties/swap.json";
import Slide2 from "../../../public/images/lotties/bridge.json";
import Slide3 from "../../../public/images/lotties/fast.json";
import Slide4 from "../../../public/images/lotties/secured.json";
import Slide5 from "../../../public/images/lotties/scalable.json";
import Slide6 from "../../../public/images/lotties/trade.json";

interface Props {
  lottie: any;
}
const LottieAnimation = ({ lottie }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const List = [
    {
      lottie: Slide1
    },
    {
      lottie: Slide2
    },
    {
      lottie: Slide3
    },
    {
      lottie: Slide4
    },
    {
      lottie: Slide5
    },
    {
      lottie: Slide6
    }
  ];
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
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
        height={281} // Adjust height and width as per your animation
        width={281}
      />
    </div>
  );
};

export default LottieAnimation;
