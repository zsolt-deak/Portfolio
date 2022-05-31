import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
  } from "react-icons/fa";
  import { ImProfile } from "react-icons/im";
  import { HiOutlineMail } from "react-icons/hi";
  import CV  from "../assets/DeakZsolt_CV.pdf";

const Socialbar = () => {
  return (
    <div className="bg-gradient-to-t from-[#61892f] via-transparent to-transparent fixed bottom-0 w-full z-50 text-[#ccd6f6] border-t-[1px] border-t-[#61892f]  md:hidden ">
      {/* ul hidden if the screen is bigger than md(medium)*/}
      <ul className="h-[60px] w-full flex flex-row items-center justify-around backdrop-blur">

         <li className="items-center hover:text-[#ffffff]">
            <a
            target="_blank"
            href="https://github.com/zsolt-deak">
            <FaGithub size={35}/>
            </a>
        </li> 

        <li className="items-center hover:text-[#0077b5]">
        <a
            target="_blank"
            href="https://www.linkedin.com/in/deak-zsolt">
            <FaLinkedin size={35}/>
            </a>
        </li>

        <li className="items-center hover:text-[#918e10]">
            <a
            target="_blank"
            href={CV}
            download="My_CV.pdf">
            <ImProfile size={35}/>
            </a>
        </li>

        <li className="items-center hover:text-[#128c7e]">
            <a href="tel:+40773943139">
            <FaWhatsapp size={35}/>
            </a>
        </li>

        <li className="items-center hover:text-[#bd2619]">
            <a
            href="mailto:zsolt.deak.dev@gmail.com">
            <HiOutlineMail size={35}/>
            </a>
        </li>

      </ul>
    </div>
  );
};

export default Socialbar;
