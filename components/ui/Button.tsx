'use client'
import React from "react";
import { Button } from "@nextui-org/react";

interface CustomButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, ...props }) => {
  const handleClick = () => {
    console.log("Button clicked!");
    if (onClick) onClick();
  };

  return (
    <Button
      radius="full"
      className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      onClick={handleClick}
      style={{ padding: "20px 27px" }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
