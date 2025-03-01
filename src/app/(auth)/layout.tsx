import React, { ReactNode } from "react";

const AuthRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>Auth Root AuthRootLayout</div>
      {children}
    </div>
  );
};

export default AuthRootLayout;
