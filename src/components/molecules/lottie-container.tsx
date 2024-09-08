import React, { useState } from "react";
import Lottie from "react-lottie";
import { Box } from "@chakra-ui/react";

interface Props {
  lottie: any;
}
const LottieAnimation = ({ lottie }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Box
      overflow={{ base: "visible", md: "hidden" }}
      position="relative"
      className={`lottie-container ${
        isHovered ? "hovered" : ""
      } overflow-auto md:overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Lottie
        options={defaultOptions}
        height={281} // Adjust height and width as per your animation
        width={281}
      />
    </Box>
  );
};

export default LottieAnimation;
