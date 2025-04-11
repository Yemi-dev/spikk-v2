import React from "react";
import Portal from "./Portal";

interface CenterModalProps {
  toggleModal: () => void;
  children: React.ReactNode;
  borderRadius?: string;
  bgcolor?: string;
  width?: string;
  height?: string;
  justify?: string;
  padding?: string;
  mainHeight?: string;
  isOpen: boolean;
}

const CenterModal = ({
  toggleModal,
  children,
  padding = "1rem 2rem",
  borderRadius = "16px",
  bgcolor = "white",
  width = "450px",
  height = "auto",
  justify = "center",
  mainHeight = "auto",
  isOpen,
}: CenterModalProps) => {
  return (
    <Portal>
      <div
        onClick={toggleModal}
        className={`fixed inset-0 z-[100] flex items-center justify-${justify} overflow-auto bg-[rgba(20,23,20,0.5)] backdrop-blur-[6px] p-2 ${
          isOpen ? "visible" : "hidden"
        }`}
        style={{ height: mainHeight }}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative overflow-auto cursor-auto ${isOpen ? "animate-[scaleUp_0.1s_ease-in-out]" : ""}`}
          style={{
            backgroundColor: bgcolor,
            borderRadius: borderRadius,
            width: width,
            height: height,
            padding: padding,
            margin: "0 1rem",
          }}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default CenterModal;
