"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoTimeOutline } from "react-icons/io5";
import logoIcon from "../../public/assets/logo.png";
import Image from "next/image";
const Header = () => {
  const pathName = usePathname();

  const activeClass = (path) => {
    return pathName === path
      ? " btn bg-[#244D3F] text-white"
      : "btn text-black";
  };

  return (
    <div className="bg-base-100 border-b-2 border-gray-200 fixed top-0 left-0 right-0 z-50  shadow-sm shadow-purple-400 ">
      <div className="navbar container mx-auto">
        <div className="navbar-start ">
          <Image src={logoIcon} alt="Logo" width={130} height={50} />
        </div>
        <div className="navbar-center hidden lg:flex "></div>
        <div className="dropdown navbar-end md:hidden">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content gap-3 rounded-box z-1  w-52 p-2 shadow"
            >
              <li>
                <Link href="/" className={activeClass("/")}>
                  <FaHome /> Home
                </Link>
              </li>
              <Link href="/timeline" className={activeClass("/timeline")}>
                <IoTimeOutline /> Timeline
              </Link>
              <Link href="/stats" className={activeClass("/stats")}>
                <ImStatsDots /> Stats
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden gap-4 md:flex">
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
