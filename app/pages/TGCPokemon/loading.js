'use client'
import React from "react";
import { Spinner } from "@nextui-org/react";

export default function LoadingSpinner() {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center text-orange-400 text-4xl">
      <Spinner label="Loading..." color="warning" />
    </div>
  );
}
