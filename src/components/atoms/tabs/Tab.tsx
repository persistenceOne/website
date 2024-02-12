import React, { forwardRef } from "react";

export type TabProps = {
  title: string;
  disable?: boolean;
  children?: React.ReactNode | string;
};

const Tab = forwardRef<HTMLDivElement, TabProps>(({ children }) => {
  return <div className="tabBody">{children}</div>;
});

Tab.displayName = "Tab";

export default Tab;
