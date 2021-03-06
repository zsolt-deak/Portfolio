import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import CV from "../assets/DeakZsolt_CV.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    
    <div className="md:h-[80px] bg-gradient-to-b from-[#60892fa8] via-transparent to-transparent fixed w-full h-[65px] flex justify-end items-center px-4 backdrop-blur text-[#afb9d6] border-b-2 border-b-[#61892f] z-40 ">
      {/* / menu */}
      
      <ul className="hidden sm:flex text-3xl">
        {/* ul hidden if the screen is smaller than sm(small) */}

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
      <div onClick={handleClick} className="sm:hidden z-10">
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
      <div className="hidden md:flex fixed flex-col sm:right-0 left-0 top-[30vh]">
        <li className="md:w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[0px] duration-300 bg-[#0077b5] backdrop-blur">
          <a
            className="flex justify-between items-center w-full text-[#ccd6f6]"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/deak-zsolt">
            LinkedIn<FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[0px] duration-300 bg-[#171515]">
          <a
            className="flex justify-between items-center w-full text-[#ccd6f6]"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zsolt-deak">
            GitHub<FaGithub size={30} />
          </a>
        </li>

        <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[0px] duration-300 bg-[#bd2619]">
          <a
            className="flex justify-between items-center w-full text-[#ccd6f6]"
            href="mailto:zsolt.deak.dev@gmail.com">
            Email<HiOutlineMail size={30} />
          </a>
        </li>

        <li className="w-[140px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-0px] duration-300 bg-[#918e10]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href={CV}
            download="DeakZsolt_CV.pdf">
            Resume<ImProfile size={30} />
          </a>
        </li>

        <li className="w-[190px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[0px] duration-300 bg-[#128c7e]">
          <a className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="tel:+40773943139">
            +40 773 943 139<FaWhatsapp size={30} />
          </a>
        </li>

      </div>

      
    </div>
  );
};

export default Navbar;
