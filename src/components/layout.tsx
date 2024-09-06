import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import GeofenceNotice from "@/components/molecules/geofence-banner";
// import Header from "@/components/molecules/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box pos={"fixed"} width="100%" zIndex="sticky">
        <GeofenceNotice />
        {/*<Header />*/}
      </Box>
      {children}
      {/*<Footer />*/}
    </>
  );
};

export default Layout;
