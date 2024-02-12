module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      light: {
        full: "#ffffff",
        high: "#FCFCFC",
        emphasis: "#ECECEC",
        mid: "#A6A6A6",
        low: "#787878",
        disabled: "#A9A9A9",
      },
      atomPrimary: "#595d7b",
      bnbPrimary: "#f0b90b",
      dydxPrimary: "#6966FF",
      transparent: "transparent",
      dark: {
        full: "#000",
        high: "#1B1B1B",
        emphasis: "#030303",
        mid: "#070B09",
        low: "#787878",
        disabled: "#A9A9A9",
        "black-full": "#000",
        "black-high": "#1d1d22",
        "black-emphasis": "#26262b",
        "black-mid": "#070B09",
        "black-900": "#171717",
        "black-800": "#181818",
        "black-700": "#1b1b1b",
        "black-600": "#1b1b1b99",
        "black-500": "#17171799",
        "black-400": "#282828",
        "white-full": "#ffffff",
        "white-high": "#FCFCFC",
        "white-emphasis": "#ECECEC",
        "white-mid": "#A6A6A6",
        "white-low": "#787878",
      },
      red: "#e50913",
      green: "#24b574",
      "red-light": "#cb575bfa",
    },
    backgroundImage: {
      osmoPrimaryButton: "linear-gradient(90deg, #8C84FD 0%, #CA2EBD 91.74%)",
      homeBannerBg: "url('/images/bg_images/home_bg.svg')",
      immunefiWhite: "url('/images/audits/immunefi_header.svg')",
      immunifyBlack: "url('/images/audits/immunefi_black.svg')",
      "body-bg":
        "radial-gradient(112.6% 112.6% at 50% -12.6%,#372627 0,#030303 44.79%)",
      topBanner: `url('/images/bg_images/atom_topbar.svg'), 
      linear-gradient(80.17deg, #232334 -4.31%, #6866ff 111.08%, #6866ff 127.68%)`,
      logoDark: "url('/images/darklogo.svg')",
      logoLight: "url('/images/logo.svg')",
      homePageBanner: `url('/images/bg_images/bg.svg'),
      radial-gradient(100% 311.1% at 97.81% 0,#fff8f8 0,#f0fdff 100%,#f0fdff 0)`,
      homePageBg2: `url('/images/bg_images/bg_lane.png')`,
      homePageBg3: `url('/images/bg_images/home_bg2.svg')`,
      cosmosCard: "linear-gradient(287.41deg,#2f3148 4.63%,#5c4243 98.79%)",
      osmoCard:
        "linear-gradient(80.17deg, #7268FD -4.31%, #CA2EBD 111.08%, #CA2EBD 127.68%)",
      bnbCard: "linear-gradient(287.41deg,#efb90b 4.63%,#5c4243 98.79%)",
      ethCard: "linear-gradient(287.41deg,#20335b 4.63%,#5c4243 98.79%)",
      xprtCard: "linear-gradient(287.41deg,#e50913 4.63%,#5c4243 98.79%)",
      ethBanner:
        "url('/images/bg_images/eth_banner_bg.svg'), radial-gradient(100% 311.1% at 97.81% 0%, #FFFFFF 0%, #F5F5F5 50.14%, #D3D3D3 100%)",
      atomBanner:
        "url('/images/bg_images/atomBanner2.svg'), url('/images/bg_images/atomBanner1.svg') ",
      osmoBanner:
        "url('/images/bg_images/osmoBanner2.svg'), radial-gradient(87.58% 251.27% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(215, 199, 245, 0.3) 100%) ",
      bnbBanner:
        "url('/images/bg_images/binance_bg.svg'), radial-gradient(100% 311.1% at 97.81% 0,#fff 0,#fffef8 45.83%,#fffffd 100%)",
      dydxBanner:
        "url('/images/bg_images/dydxBanner2.svg'), radial-gradient(87.58% 251.27% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(215, 199, 245, 0.3) 100%) ",
      lsmTag:
        "linear-gradient(91deg, rgba(196, 3, 11, 0.60) -15.72%, rgba(30, 0, 3, 0.60) 125.37%)",
      lsmHighlight:
        "linear-gradient(rgba(140, 2, 8, 1), rgba(211, 73, 79, 1), rgba(140, 2, 8, 1))",
      title_bg: "url('/images/bg_images/title_bg_grid.svg')",
    },
    backgroundColor: {
      none: "none",
      transparent: "transparent",
      "side-bar": "#171717",
      "sideBar-navLinkActive": "#1b1b1b",
      dropDown: "#282828",
      tabHeader: "#181818",
      tabContent: "rgba(24, 24, 24, 0.6)",
      input: "rgba(27, 27, 27, 0.6)",
      red: "#e50913",
      green: "#24b574",
      "red-light": "#cb575bfa",
      "black-full": "#000",
      "black-high": "#1d1d22",
      "black-emphasis": "#26262b",
      "black-mid": "#070B09",
      "black-900": "#171717",
      "black-800": "#181818",
      "black-700": "#1b1b1b",
      "black-600": "#1b1b1b99",
      "black-500": "#17171799",
      "black-400": "#282828",
      "white-full": "#ffffff",
      "white-high": "#FCFCFC",
      "white-emphasis": "#ECECEC",
      "white-mid": "#A6A6A6",
      "white-low": "#787878",
      disabled: "#A9A9A9",
      atomPrimary: "#595d7b",
      bnbPrimary: "#f0b90b",
      ethPrimary: "#C73238",
      dydxPrimary: "#6966FF",
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xsm: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", //16px
      lg: "1.125rem", //18px
      xl: "1.25rem", // 20px
      "2xl": "1.375rem", // 22px
      "3xl": "1.5rem", //24px
      "4xl": "2.25rem", // 36px
      h1: ["6rem", { lineHeight: "7rem" }],
      h2: ["3.75rem", { lineHeight: "4.5rem" }],
      h3: ["3rem", { lineHeight: "3.5rem" }],
      h4: ["2.25rem", { lineHeight: "2.25rem" }],
      h5: ["1.5rem", { lineHeight: "2rem" }],
      h6: ["1.25rem", { lineHeight: "1.5rem" }],
      subtitle1: ["1rem", { lineHeight: "1.5rem" }],
      subtitle2: ["0.875rem", { lineHeight: "1.5rem" }],
      body1: ["1rem", { lineHeight: "1.5rem" }],
      body2: ["0.875rem", { lineHeight: "1.25rem" }],
      button: ["0.875rem", { lineHeight: "1rem" }],
      caption: ["0.75rem", { lineHeight: "0.875rem" }],
      overline: ["0.625rem", { lineHeight: "1rem" }],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1536px) { ... }
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "511px" },
    },
    extend: {
      keyframes: {
        "menu-open": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "menu-open": "menu-open 200ms ease-in-out",
      },
      screens: {
        "-2xl": { min: "1536px" },
        // => @media (max-width: 1535px) { ... }
        "-xl": { min: "1280px" },
        "-lg": { min: "1024px" },
        "-md": { min: "768px" },
        "-sm": { min: "640px" },
      },
      backgroundSize: {
        atomBanner: "30%, cover",
        bnbBanner: "30%, cover",
        ethBanner: "30%, cover",
        osmoBanner: "25%, cover",
        dydxBanner: "20%, cover",
        title_bg: "auto",
      },
      backgroundPosition: {
        atomBanner: "100% 0,100% 100%",
        bnbBanner: "100% 0,100% 100%",
        ethBanner: "100% 0,100% 100%",
        osmoBanner: "100% 0,100% 100%",
        dydxBanner: "100% 5%,100% 100%",
        title_bg: "0% -150px",
      },
    },
  },
  plugins: [],
};
//
// background-size: auto;
// background-position: 50% -75%;
// background-repeat: no-repeat;
