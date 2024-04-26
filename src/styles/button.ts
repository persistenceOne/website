import { defineStyle } from "@chakra-ui/styled-system";

const variants = {
  primary: {
    color: "primary.black",
    background: "transparent",
    borderRadius: "full",
    border: "1px solid",
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
      background: "primary.ctaHover",
      _disabled: {
        background: "primary.ctaDisabled"
      }
    },
    _active: {
      background: "primary.ctaPressed"
    }
  },
  secondary: {
    color: "primary.white",
    borderRadius: "full",
    background: "primary.red",
    _focus: {
      boxShadow: "none"
    },
    _disabled: {
      background: "primary.ctaDisabled",
      opacity: 1,
      color: "rgba(255,255,255,0.4)"
    },
    _hover: {
      background: "primary.redHover",
      borderColor: "stroke.dexBlue",
      _disabled: {
        background: "primary.ctaDisabled"
      }
    },
    _active: {
      background: "primary.dexBlue"
    },
    _before: {
      content: "''",
      position: "absolute",
      zIndex: -1,
      inset: 0,
      padding: "2px",
      borderRadius: "full",
      background:
        "linear-gradient(284.42deg, #00AFFA -49.92%, #32A2BA 54.24%, #24FFCA 169.83%)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude"
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
