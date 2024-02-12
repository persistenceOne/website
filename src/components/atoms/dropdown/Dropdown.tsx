import React, { forwardRef, useRef } from "react";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { useOnClickOutside } from "../../../customHooks/useOnClickOutside";
import Icon from "../../molecules/Icon";
import Button from "../button/Button";

export type DropdownButtonVariants = "primary" | "custom";
export type DropdownType = "hover" | "click";

export type DropdownProps = {
  dropdownLabel: React.ReactNode | string;
  dropdownType?: DropdownType;
  children: React.ReactNode | string;
  className?: string;
  rounded?: boolean;
  staticBackDrop?: boolean;
  dropDownVariant: DropdownButtonVariants;
  dropDownVariantBg?: string;
  dropDownContentClass?: string;
  dropDownButtonClass?: string;
  dropDownIcon?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      children,
      dropdownLabel,
      className = "",
      rounded = false,
      staticBackDrop = true,
      dropDownVariant = "primary",
      dropDownVariantBg = "",
      dropdownType = "click",
      dropDownIcon = false,
      dropDownButtonClass = "",
      dropDownContentClass = "",
    },
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false);
    const topRounding = rounded ? "rounded-t-md" : "";

    const dropDownRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(dropDownRef, () => {
      setOpen(false);
    });

    return (
      <div
        className={`${topRounding} ${className} text-white relative inline-block dropDown ${
          dropdownType === "click" ? "dropDownClick" : "dropDownHover group"
        }`}
        ref={staticBackDrop ? null : dropDownRef}
      >
        <Button
          name={"buttonConnect"}
          className={`${dropDownButtonClass} dropDownButton w-full md:py-2 md:text-sm`}
          variant={dropDownVariant === "primary" ? "solid" : "custom"}
          scale="lg"
          isDisabled={false}
          onClick={dropdownType === "click" ? () => setOpen(!open) : () => {}}
          customButtonClass={
            dropDownVariant !== "primary"
              ? dropDownVariantBg
                ? `${dropDownVariantBg}`
                : "bg-black-800 text-light-high"
              : ""
          }
        >
          {dropdownLabel}
          {dropDownIcon ? (
            !open ? (
              <Icon
                viewClass="dropDownIcon !w-[10px] ease-in duration-200 rotate-360
                group-hover:rotate-90 fill-[#322d3e]"
                icon="chevron"
              />
            ) : (
              <Icon
                viewClass="dropDownIcon !w-[10px]"
                icon="chevroncolorchange"
              />
            )
          ) : (
            ""
          )}
        </Button>
        <div
          className={`${dropDownContentClass} dropDownContent min-w-full w-fit absolute opacity-0 transition-opacity transform ease duration-200 bg-dropDown left-0 right-0 ${
            open ? "visible translate-y-0 opacity-100" : "invisible"
          } text-light-high rounded-md z-10`}
        >
          {children}
        </div>
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
