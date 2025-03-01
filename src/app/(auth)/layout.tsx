import React, { ReactNode } from "react";

const AuthRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#FF6767] w-full min-h-screen bg-[url(/images/bg-auth.png)] ">
      {children}
    </div>
  );
};

export default AuthRootLayout;
