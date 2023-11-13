import React from "react";
import { Spinner } from "@material-tailwind/react";

const Loading = () => (
  <div className="flex justify-center">
    <Spinner className="w-12 h-12" />
  </div>
);

export default Loading;
