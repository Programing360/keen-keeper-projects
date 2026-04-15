import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center leading-9">
        <p className="text-5xl font-bold text-green-800">404</p>
        <h2 className="text-xl font-bold ">Page Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className="btn bg-green-950 text-white">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
