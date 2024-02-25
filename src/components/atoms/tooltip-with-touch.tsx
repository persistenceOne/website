import { Box, Tooltip } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

export const TooltipWithTouch = ({
  children,
  ...restToolTipProps
}: {
  children: ReactNode;
  [key: string]: any;
}) => {
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <Tooltip isOpen={isLabelOpen} {...restToolTipProps}>
      <Box
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(true)}
      >
        {children}
      </Box>
    </Tooltip>
  );
};
