import Link from "next/link";
import React from "react";

const Breadcrumb = ({ car }) => {
  return (
    <div>
      <Link className="text-blue-500" href="/home">
        Anasayfa
      </Link>{" "}
      / <span>Arabalar</span> /{" "}
      <span>
        {car?.make} {car?.model}
      </span>
    </div>
  );
};

export default Breadcrumb;
