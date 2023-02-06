"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed left-0 top-0 w-full bg-white ">
      <div className="max-w-[1680px] m-auto flex justify-between items-center p-4">
        <Link href="/">
          <h1 className="font-bold text-3xl ">AWESOME FOOD STORE</h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/" className="font-bold">
              HOME
            </Link>
          </li>
          <li className="p-4">
            <Link href="/about" className="font-bold">
              ABOUT
            </Link>
          </li>
          <li className="p-4">
            <Link href="/store" className="font-bold">
              STORE
            </Link>
          </li>
        </ul>

        {/* Mobile button*/}
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        {/* Mobile Menu*/}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-black"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-black"
          }
        >
          {/* bg-black  */}
          <ul>
            <li className="p-4 text-3xl  text-white hover:text-emerald-700">
              <Link href="/" className="font-bold" onClick={handleNav}>
                HOME
              </Link>
            </li>
            <li className="p-4 text-3xl  text-white hover:text-emerald-700">
              <Link href="/about" className="font-bold" onClick={handleNav}>
                ABOUT
              </Link>
            </li>
            <li className="p-4 text-3xl  text-white hover:text-emerald-700">
              <Link href="/store" className="font-bold" onClick={handleNav}>
                STORE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
