import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade'; 

const Home = () => {
  return (
    <div name="home" className="w-full pt-[30vh] pb-[20vh] bg-[#1a1a1d] ">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-32 flex flex-col justify-center h-full">
        <p className="text-[#909c82] text-2xl">Hi, my name is</p>
        <h1 id='glitchEffect' className="text-4xl sm:text-7xl font-bold text-[#61892f]">
          Deák Zsolt
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#7a857a]">
          I'm a front-end developer
        </h2>
        <div class="w-[50%] h-[6px]  bg-gradient-to-r from-[#1a1a1d] via-[#60892f77] to-[#1a1a1d]"></div>
        <Fade top cascade duration={2200}>
        <p className="text-[#afb9d6] py-4 max-w-[700px] lg:grid-cols-2">
          A passionate software developer opened for a new professional
          challenge and ready to take on responsibilities. Reliable team member
          always ready to help. Quick learner with problem-solving and
          decision-making mindset, and excellent interpersonal skills. I am
          seeking to be employed in a company where I can add value using my
          skills and my previous professional experience.
        </p></Fade>

        <div>
          <Link to="work" smooth={true} duration={1000}>
            <button className="mt-16 text-white group outline outline-offset-2 outline-[#61892f] px-6 py-3 my-2 flex items-center  hover:bg-[#61892f] hover:transition-all ease-in-out delay-300">
              View work
              <span className="group-hover:rotate-90 duration-500">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
