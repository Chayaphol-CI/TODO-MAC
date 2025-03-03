import Image from "next/image";
import React from "react";

interface InputProps {
  className?: string;
  placeholder?: string;
  icon?: string;
}

const classes = {
  input: "focus:outline-none focus:ring-0",
  placeholder: "placeholder-gray-placeholder placeholder:font-medium",
};

const Input = ({ className, placeholder, icon }: InputProps) => {
  return (
    <div className={`${className} rounded-lg py-3 w-full flex flex-row`}>
      {icon && (
        <Image src={icon} width={20} height={20} alt="user" className="mx-4" />
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={` ${classes.input} ${classes.placeholder}`}
      />
    </div>
  );
};

export default Input;
