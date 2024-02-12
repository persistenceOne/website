import React, { forwardRef, ReactElement, useState } from "react";
import TabTitle from "./TabTitle";

export type TabsProps = {
  children: ReactElement[];
};

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children }, ref) => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
      <div className="tabs">
        <div
          className="tabsHeader flex text-center flex-wrap
         border-b border-gray-200 dark:border-gray-700"
        >
          {children.map((item, index) => (
            <TabTitle
              key={index}
              title={item.props.title}
              disable={item.props.disable}
              index={index}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </div>
        {children[selectedTab]}
      </div>
    );
  }
);

Tabs.displayName = "Tabs";

export default Tabs;
