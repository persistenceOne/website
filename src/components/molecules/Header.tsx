import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <React.Fragment>
      <div className="top-bar w-full fixed z-[100]">
        <nav
          className={`[.topBar_&]:bg-black-900 py-6 px-0 flex relative 
            items-center navbar navbar-expand-lg navbar-custom flex-column 
            md:flex-wrap justify-start "bg-white-emphasis"`}
          id="nav-bar"
        >
          <div className="container  mx-auto px-4 flex flex-wrap items-center justify-between ">
            <Link
              className="bg-logoDark
                      [.is-sticky_&]:bg-logoLight w-[108px] h-[26px] bg-no-repeat bg-center"
              href="/"
            />
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
