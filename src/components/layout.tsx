import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import GeofenceNotice from "@/components/molecules/geofence-banner";
import Footer from "@/components/molecules/footer";
import Header from "@/components/molecules/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box width="100%">
        <GeofenceNotice />
        <Header />
      </Box>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
