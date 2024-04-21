import React from "react";
import { Button } from "@nextui-org/react";

interface CustomButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string; 
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, className = '', ...props }) => {

  return (
    <Button
      radius="full"
      className={`bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg rounded ${className}`}
      style={{ padding: "20px 27px" }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
