import React, { useEffect, useRef, useState } from "react";
import Logo from "../imgs/logo.png";
import { Link, Outlet } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { LuFileEdit } from "react-icons/lu";

const Navbar = () => {
  const [serachVisiblility, setSearchVisiblility] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchVisiblility(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
    <nav className="navbar">
      <Link to={"/"}>
        <img className=" flex-none w-10" src={Logo} alt="" />
      </Link>
      <div
        ref={searchRef}
        className={`absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show ${
          serachVisiblility ? "show" : "hide"
        } `}
      >
        <input
          className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 placeholder:text-dark-grey rounded-full md:pl-14"
          type="text"
          placeholder="search anything.."
        />
        <ImSearch className="absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-2xl text-dark-grey" />
      </div>
      <div className="flex items-center gap-3 md:gap-6 ml-auto ">
        <button
          onClick={() => setSearchVisiblility((prev) => !prev)}
          className="md:hidden flex items-center justify-center bg-grey w-12 h-12 rounded-full"
        >
          <ImSearch className="text-xl" />
        </button>

        <Link to={"/editor"} className="hidden md:flex gap-2 link ">
          <LuFileEdit className="text-xl text-dark-grey mt-0.5" />
          <p>Write</p>
        </Link>

        <Link to={"/signin"} className=" btn-dark py-2">
          Sign In
        </Link>

        <Link to={"/signup"} className=" hidden md:block btn-light py-2">
          Sign Up
        </Link>

      </div>
    </nav>

    <Outlet />
    </>
  );
};

export default Navbar;
