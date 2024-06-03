import React from "react";
import { Link } from "react-router-dom";

const BrowsePage = () => {
  return (
    <>
      <div className="">BrowsePage</div>
      <li>
        <Link
          to="/"
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
          aria-current="page"
        >
          Home
        </Link>
      </li>
    </>
  );
};

export default BrowsePage;
