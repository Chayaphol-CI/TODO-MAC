"use client";
import React from "react";

interface ActionButtonProps {
  type?: "normal";
  text: string;
  className: string;
}

const ActionButton = ({ text, type, className }: ActionButtonProps) => {
  return (
    <button
      className={`${className} cursor-pointer`}
      onClick={() => console.log("test")}
    >
      <div className="font-semibold text-xl">{text}</div>
    </button>
  );
};

export default ActionButton;
