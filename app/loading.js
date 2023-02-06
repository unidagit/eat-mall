import React from "react";
import { FadeLoader } from "react-spinners";

function loading() {
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <FadeLoader color="black" height={10} width={10} />
    </div>
  );
}

export default loading;
