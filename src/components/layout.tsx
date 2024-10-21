import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import GeofenceNotice from "@/components/molecules/geofence-banner";
import Footer from "@/components/molecules/footer";
import Header from "@/components/molecules/header";
import Subscribe from "@/components/molecules/subscribe";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box pos={"fixed"} width="100%" zIndex="sticky">
        <GeofenceNotice />
        <Header />
      </Box>
      {children}
      <Subscribe />
      <Footer />
    </>
  );
};

export default Layout;
