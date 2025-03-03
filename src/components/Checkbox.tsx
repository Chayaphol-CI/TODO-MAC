"use client";

import React, { useState } from "react";

const classes = {
  checkbox: "bg-red-button",
};

const Chekbox = () => {
  const [isChek, setIsCheck] = useState<boolean>(false);

  const onClick = () => {
    setIsCheck(!isChek);
  };

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${isChek && classes.checkbox}`}
    >
      <div className="w-[18px] h-[18px] border-2 border-black-input" />
    </button>
  );
};

export default Chekbox;
