"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoTimeOutline } from "react-icons/io5";

const Header = () => {

    const pathName = usePathname();

    const activeClass = (path) => {
      return  pathName === path 
      
      ? " btn bg-[#244D3F] text-white" : "btn text-black";
    }


  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
        
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <a className="text-xl text-black">KeenKeeper</a>
        </div>
        <div className="navbar-center hidden lg:flex">
        </div>
        <div className="navbar-end flex gap-4">
          <Link href="/" className={activeClass("/")}>
           <FaHome /> Home
          </Link>
          <Link href="/timeline" className={activeClass("/timeline")}>
           <IoTimeOutline /> Timeline
          </Link>
          <Link href="/stats" className={activeClass("/stats")}>
           <ImStatsDots /> Stats
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
