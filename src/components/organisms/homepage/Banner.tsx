import React from "react";
import { useTranslation } from "next-export-i18n";

const Banner = () => {
  const { t } = useTranslation("common");
  return (
    <div className="text-center aos-init aos-animate bg-homeBannerBg bg-[#fff] bg-cover bg-no-repeat">
      <div className="pt-[250px] pb-[200px] relative">
        <p>banner</p>
      </div>
    </div>
  );
};

export default Banner;
