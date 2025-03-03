import React, { memo, ReactNode } from "react";

interface TextProps {
  className?: string;
  children: ReactNode;
}

const Text = ({ children, className }: TextProps) => {
  return <p className={className}>{children}</p>;
};

export default memo(Text);
