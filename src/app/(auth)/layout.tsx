import React, { ReactNode } from "react";

const AuthRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-red-snap min-h-screen bg-auth flex-center ">
      <div className="bg-white rounded-2xl w-full max-w-5xl p-8 py-28">
        {children}
      </div>
    </div>
  );
};

export default AuthRootLayout;
