import React, { ReactNode } from "react";
import "../App.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const DeleteModal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0  left-0 w-full h-full bg-[#848484] bg-opacity-60 flex justify-center items-center">
      <div className=" rounded-md shadow-md relative" style={{
    background: 'linear-gradient(180deg, #141517 0%, #232528 100%)'
  }}>
        <div >{children}</div>
      </div>
    </div>
  );
};

export { DeleteModal };