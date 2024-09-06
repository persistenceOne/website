import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Footer from "@/components/molecules/footer";
import dynamic from "next/dynamic";

const GeofenceNotice = dynamic(
  () => import("@/components/molecules/geofence-banner"),
  { ssr: true }
);
const Header = dynamic(() => import("@/components/molecules/header"), {
  ssr: true
});

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
