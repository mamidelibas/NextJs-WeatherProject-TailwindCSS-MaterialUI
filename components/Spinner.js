import React from "react";
import spinner from "../public/spinner.gif";
import Image from "next/image";

function Spinner() {
  return (
    <div>
      <Image
        alt="loading.."
        src={spinner}
        className="w-[200px] m-auto block  "
      />
    </div>
  );
}

export default Spinner;
