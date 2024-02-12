import React, { useRef } from "react";
import { useOnClickOutside } from "../../../customHooks/useOnClickOutside";
import { emptyFunc } from "../../../utils/helpers";
import Icon from "../../molecules/Icon";

export interface ModalProps {
  header?: React.ReactNode | string;
  onClose?: () => void;
  children: React.ReactNode;
  closeButton?: boolean;
  show: boolean;
  className?: string;
  staticBackDrop?: boolean;
  footer?: React.ReactNode | string;
  animate?: boolean;
}

export const Modal = ({
  children,
  show,
  header,
  onClose = emptyFunc,
  className,
  staticBackDrop = true,
  closeButton = true,
  footer,
  animate = false,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, onClose);

  return show ? (
    <div>
      <div
        className={`opacity-50 bg-black-full fixed top-0 right-0 z-10 left-0 w-full h-full`}
      />
      <div
        className={
          `${show ? "open" : "close"} ${
            animate ? "modalAnimate" : ""
          } modal fade2 fixed top-0 right-0 left-0 w-full h-full z-20 overflow-auto ` +
          ` ${className}`
        }
      >
        <div
          className={`max-w-[500px] flex items-center min-h-full w-auto m-auto relative modalDialog`}
        >
          <div
            className={`bg-dropDown shadow-[#00000026] relative flex flex-col w-full rounded-lg text-light-mid modalContent`}
            ref={staticBackDrop ? null : modalRef}
          >
            {closeButton ? (
              <button
                type="button"
                onClick={onClose}
                className={`absolute top-[30px] right-[30px] h-4 w-4`}
              >
                <Icon
                  iconName="close"
                  viewClass={"fill-[#A6A6A6] hover:fill-[#ECECEC]"}
                />
              </button>
            ) : null}
            {header ? (
              <div
                className="modalHeader text-2xl text-light-high font-semibold
                  flex justify-between md:text-lg items-start px-8 pt-8 md:px-6 md:pt-6 rounded-t dark:border-gray-600"
              >
                <p>{header}</p>
              </div>
            ) : (
              ""
            )}
            <div className="modalBody p-8 space-y-6 md:p-6">{children}</div>
            {footer ? (
              <div
                className="text-2xl text-light-high font-semibold
                  flex justify-between md:text-lg items-start px-8 pb-8 md:px-6 md:pt-6 rounded-t dark:border-gray-600 modalFooter"
              >
                <p>{footer}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
