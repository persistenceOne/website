import React, { useEffect, useState } from "react";
import { Box, Spinner, useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/molecules/header"), {
  ssr: false
});
const Footer = dynamic(() => import("@/components/molecules/footer"), {
  ssr: false
});
const GeofenceNotice = dynamic(
  () => import("@/components/molecules/geofence-banner"),
  {
    ssr: false
  }
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box pos={"fixed"} width="100%" zIndex="sticky">
        <GeofenceNotice />
        <Header />
      </Box>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
