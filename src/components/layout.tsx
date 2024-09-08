import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import GeofenceNotice from "@/components/molecules/geofence-banner";
import Footer from "@/components/molecules/footer";
import Header from "@/components/molecules/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  return (
    <>
      <Box pos={"fixed"} width="100%" zIndex="sticky">
        {!isMobile ? <GeofenceNotice /> : null}
        <Header />
      </Box>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
