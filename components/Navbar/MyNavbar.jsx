"use client";
import Link from "next/link";
import React from "react";
// import "./style.css";

const toggleInput = (inputElement) => {
  if (inputElement.checked) {
    // If checked, uncheck it
    inputElement.checked = false;
  } else {
    // If unchecked, check it
    inputElement.checked = true;
  }
};
const Navbar = () => {
  return (
    <div className=" font-pontiac font-bold md:hidden relative z-[1000] ">
      <div className="navigation ">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background ">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list text-white leading-loose md:text-[3rem] text-[2.5rem] capatilise flex-col flex">
            <Link
              href={"/"}
              onClick={() =>
                toggleInput(document.getElementById("navi-toggle"))
              }
            >
              Home
            </Link>
            <Link
              href={"/about"}
              onClick={() =>
                toggleInput(document.getElementById("navi-toggle"))
              }
            >
              About
            </Link>
            <Link
              href={"/contact"}
              onClick={() =>
                toggleInput(document.getElementById("navi-toggle"))
              }
            >
              Contact
            </Link>
            <Link
              href={"/services"}
              onClick={() =>
                toggleInput(document.getElementById("navi-toggle"))
              }
            >
              Services
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
