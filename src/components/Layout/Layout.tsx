import React from "react";
import { Typography } from "@material-tailwind/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto p-10">
      <Typography variant="h1" className="text-center mb-10">
        LiveLink
      </Typography>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
