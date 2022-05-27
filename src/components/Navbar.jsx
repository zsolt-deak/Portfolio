import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaRegFileCode,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import CV from "../assets/DeakZsolt_CV.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 backdrop-blur text-[#afb9d6] z-15 border-b-4 border-b-[#61892f]">
      {/* / menu */}
      <ul className="hidden md:flex text-3xl">
        {/* ul hidden if the screen is smaller than mg(medium) */}
        <li
          id="glitchEffect"
          className="before:content-['<'] after:content-['>']"
        >
          <Link to="home" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li
          id="glitchEffect"
          className="before:content-['<'] after:content-['>']"
        >
          <Link to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li
          id="glitchEffect"
          className="before:content-['<'] after:content-['>']"
        >
          <Link to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li
          id="glitchEffect"
          className="before:content-['<'] after:content-['>']"
        >
          <Link to="work" smooth={true} duration={1000}>
            Work
          </Link>
        </li>
      </ul>

      {/*  hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {" "}
        {/* hamburger visible if the screen is smaller than md */}
        {!nav ? <FaBars size={40} /> : <FaTimes size={40} />}{" "}
        {/* FaBars = hamburger menu icon; FaTimes= 'X' icon */}
        {/* if the opposite of 'nav' is true  show FaBars, else show FaTimes */}
      </div>

      {/*  mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1a1a1d] flex flex-col justify-center items-center text-[#ccd6f6]"
        }
      >
        <li
          id="glitchEffect"
          className="py-6 text-4xl hover:before:content-['<'] hover:after:content-['>']"
        >
          <Link onClick={handleClick} to="home" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li
          id="glitchEffect"
          className="py-6 text-4xl hover:before:content-['<'] hover:after:content-['>']"
        >
          <Link onClick={handleClick} to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li
          id="glitchEffect"
          className="py-6 text-4xl hover:before:content-['<'] hover:after:content-['>']"
        >
          <Link onClick={handleClick} to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li
          id="glitchEffect"
          className="py-6 text-4xl hover:before:content-['<'] hover:after:content-['>']"
        >
          <Link onClick={handleClick} to="work" smooth={true} duration={1000}>
            Work
          </Link>
        </li>
      </ul>

      {/*  social icons */}
      <div className="hidden lg:flex fixed flex-col top-[20vh] left-0">
        <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[0px] duration-300 bg-[#0077b5]">
          <a
            className="flex justify-between items-center w-full text-[#ccd6f6]"
            target="_blank"
            href="https://www.linkedin.com/in/deak-zsolt"
          >
            LinkedIn
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[0px] duration-300 bg-[#171515]">
          <a
            className="flex justify-between items-center w-full text-[#ccd6f6]"
            target="_blank"
            href="https://github.com/zsolt-deak"
          >
            GitHub
            <FaGithub size={30} />
          </a>
        </li>

        <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[0px] duration-300 bg-[#bd2619]">
          <a
            className="flex justify-between items-center w-full text-[#ccd6f6]"
            href="mailto:zsolt.deak.dev@gmail.com"
          >
            Email
            <HiOutlineMail size={30} />
          </a>
        </li>

        <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[0px] duration-300 bg-[#3a7700]">
        <a
            className="flex justify-between items-center w-full text-gray-300"
            target="_blank"
            href={CV}
            download="My_CV.pdf" >
            Resume
            <FaRegFileCode size={30} />
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;