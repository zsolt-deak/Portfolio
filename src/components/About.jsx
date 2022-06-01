import React from "react";
import Fade from 'react-reveal/Fade'; 

const About = () => {
  return (
    <div name="about" className="w-full pt-[20vh] pb-[20vh] bg-[#1a1a1d] text-[#afb9d6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-[85vw] grid  grid-cols-2 gap-8">
        <Fade left duration={1500}><div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#61892f]">
              About
            </p>
          </div></Fade>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-[85vw] grid sm:grid-cols-2 gap-8">
        <Fade left><div className="sm:text-right text-4xl font-bold">
            <p>Hello. Nice to meet you. Please take a look around</p>
          </div></Fade>
          <Fade right duration={1500}>
          <div>
            <p>
              In the past six years I've been working as a mechanical engineer,site supervisor 
              responsible for the assembly, and commissioning of assembly and packaging lines 
              in the automotive industry. For more details about my past work experience please 
              visit my <b className="z-50 text-[#0077b5]" ><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/deak-zsolt">LinkedIn profile</a></b> page.
            </p>
          </div></Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
