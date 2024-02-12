import React from "react";

type Props = {
  title: string;
  index: number;
  selectedTab: number;
  setSelectedTab: (index: number) => void;
  disable?: boolean;
};

const TabTitle: React.FC<Props> = ({
  title,
  setSelectedTab,
  selectedTab,
  index,
  disable = false
}) => {
  return (
    <button
      className={`${
        selectedTab === index ? "active text-red" : ""
      } flex items-center justify-center p-4 text-sm font-medium
      first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400
       disabled:dark:text-gray-500 base active text-gray-500
       hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400
        dark:hover:bg-gray-800  dark:hover:text-gray-300 tabTitle`}
      onClick={() => setSelectedTab(index)}
      disabled={disable}
    >
      {title}
    </button>
  );
};

export default TabTitle;
