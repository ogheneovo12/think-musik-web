"use client";
import InfoIcon from "@/assets/icons/InfoIcon.svg";
import { Modal } from "flowbite-react";
import cx from "classnames";

export default function PromptAlert({
  isOpen,
  onClose,
  children,
  className,
}: {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Modal
        size={"3xl"}
        popup
        show={isOpen}
        onClose={onClose}
        dismissible={true}
      >
        <Modal.Body
          className={cx(
            "min-h-[347px] relative flex flex-col items-center justify-center",
            className
          )}
        >
          <button
            onClick={onClose}
            className="absolute hover:bg-red-500 dark:hover:bg-red-500 dark:hover:bg-opacity-100 hover:text-white text-center right-5 top-5 rounded-full h-[41px] w-[41px] bg-black bg-opacity-5 dark:bg-opacity-100 dark:bg-white"
          >
            X
          </button>

          <InfoIcon />

          {children}
        </Modal.Body>
      </Modal>
    </>
  );
}
