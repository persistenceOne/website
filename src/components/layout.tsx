import React, { useEffect, useState } from "react";
import { Box, Spinner, useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/molecules/header"), {
  ssr: false,
  loading: () => <Spinner />
});
const Footer = dynamic(() => import("@/components/molecules/footer"), {
  ssr: false,
  loading: () => <Spinner />
});
const GeofenceNotice = dynamic(
  () => import("@/components/molecules/geofence-banner"),
  {
    ssr: false,
    loading: () => <Spinner />
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
