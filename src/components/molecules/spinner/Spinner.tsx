import React from "react";
import { SpinnerTypes } from "./types";
export const Spinner = ({ size = "medium", className }: SpinnerTypes) => (
  <span
    className={` ${size} ${className} spinner w-6 h-6 light icon-toast inline-block align-text-bottom rounded-full`}
  />
);
