import { defineStyle } from "@chakra-ui/styled-system";

const variants = {
  primary: {
    background: "#E59636",
    color: "#FFF8EE",
    borderRadius: "88px",
    transition: "none",
    _focus: {
      boxShadow: "none"
    },
    _disabled: {
      background: "primary.ctaDisabled",
      opacity: 1,
      color: "rgba(255,255,255,0.4)"
    },
    _hover: {
      background: "#E59636",
      _disabled: {
        background: "primary.ctaDisabled"
      }
    },
    _active: {
      background: "#E59636"
    }
  },
  secondary: {
    color: "#2D2925",
    borderRadius: "88px",
    background: "#E596364D",
    border: "1px solid",
    borderColor: "#E59636",
    _focus: {
      boxShadow: "none"
    },
    _disabled: {
      background: "primary.ctaDisabled",
      opacity: 1,
      color: "rgba(255,255,255,0.4)"
    },
    _hover: {
      background: "#E596364D",
      borderColor: "#E59636",
      _disabled: {
        background: "primary.ctaDisabled"
      }
    },
    _active: {
      background: "primary.dexBlue"
    }
  },
  ternary: {
    color: "#2D2925",
    borderRadius: "88px",
    background: "#E596364D",
    border: "1px solid",
    borderColor: "#E59636",
    _focus: {
      boxShadow: "none"
    }
  }
};

const sizes = {
  sm: defineStyle({
    h: "36px",
    px: "6"
  }),
  md: defineStyle({
    h: "48px",
    px: "6"
  }),
  lg: defineStyle({
    h: "40px",
    fontSize: "md",
    px: "6"
  }),
  xl: defineStyle({
    h: "14",
    fontSize: "xl",
    px: "8"
  })
};

export default {
  variants,
  sizes,
  defaultProps: {
    variant: "primary"
  }
};
