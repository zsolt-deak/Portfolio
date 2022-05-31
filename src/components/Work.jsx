import React from "react";
import XO from "../assets/XO.png";
import quiz from "../assets/quiz.png";
import BreakingBad from "../assets/BreakingBad.png";
import calculator from "../assets/calculator.png";
import onlineStore from "../assets/onlineStore.png";
import portfolio from "../assets/portfolio.png";
import { FaGithub, FaPlay } from "react-icons/fa";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:pt-[20vh] pb-[20vh] text-[#afb9d6] bg-[#1a1a1d]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#afb9d6] border-[#61892f]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 z-10">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${calculator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover Effects */}

            <div className="w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition hover:bg-[#000000ce]">
              <span className=" text-2xl font-bold text-white tracking-wider text-center">
                Calculator app
              </span>
              <p className="text-l font-bold text-white tracking-wider text-center">
                A classic calculator made with HTML, CSS and JavaScript
              </p>
              <div className="pt-8 text-center">
  
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <a
                      className="flex justify-between items-center w-full text-[#171515]"
                      target="_blank"
                      href="https://github.com/zsolt-deak/Calculator">
                      View on GitHub
                      <FaGithub size={30} />
                    </a>
                  </button>
                
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <a
                      className="flex justify-between items-center w-full text-[#171515]"
                      target="_blank"
                      href="https://deakzsolt-calculator.netlify.app">
                        Try it!
                      <FaPlay size={20} />
                    </a>
                  </button>
                
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${quiz})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition hover:bg-[#000000ce]">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Quiz app
              </span>
              <p className="text-l font-bold text-white tracking-wider text-center">
                A quiz test to test your web development knowledge in Romanian <br/>The app was made in HTML, CSS and Javascript 
              </p>
              <div className="pt-8 text-center">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <a
                      className="flex justify-between items-center w-full text-[#171515]"
                      target="_blank"
                      href="https://github.com/zsolt-deak/Quiz">
                      View on GitHub
                      <FaGithub size={30} />
                    </a>
                  </button>
                
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <a
                      className="flex justify-between items-center w-full text-[#171515]"
                      target="_blank"
                      href="https://deakzsolt-quiz.netlify.app">
                        Try it!
                      <FaPlay size={20} />
                    </a>
                  </button>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${BreakingBad})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition hover:bg-[#000000ce]">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Breaking Bad fan site
              </span>
              <p className="text-l font-bold text-white tracking-wider text-center">
                The site is made with React and Ant Design
              </p>
              <div className="pt-8 text-center">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <a
                      className="flex justify-between items-center w-full text-[#171515]"
                      target="_blank"
                      href="https://github.com/zsolt-deak/Breaking-Bad-fan-page">
                      View on GitHub
                      <FaGithub size={30} />
                    </a>
                  </button>
                
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <a
                      className="flex justify-between items-center w-full text-[#171515]"
                      target="_blank"
                      href="https://deakzsolt-breakingbadfansite.netlify.app/">
                        Try it!
                      <FaPlay size={20} />
                    </a>
                  </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${XO})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition hover:bg-[#000000ce]">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Tic-Tac-Toe game app
              </span>
              <p className="text-l font-bold text-white tracking-wider text-center">
                The classic game made with HTML, CSS and JavaScript
              </p>
              <div className="pt-8 text-center">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <a
                      className="flex justify-between items-center w-full text-[#171515]"
                      target="_blank"
                      href="https://github.com/zsolt-deak/Tic-Tac-Toe">
                      View on GitHub
                      <FaGithub size={30} />
                    </a>
                  </button>
                
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <a
                      className="flex justify-between items-center w-full text-[#171515]"
                      target="_blank"
                      href="https://deakzsolt-xo.netlify.app">
                        Try it!
                      <FaPlay size={20} />
                    </a>
                  </button>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${onlineStore})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition hover:bg-[#000000ce]">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Online store
              </span>
              <p className="text-l font-bold text-white tracking-wider text-center">
                The site is made with React and Bootstrap, the products fetched from fake store API
              </p>
              <div className="pt-8 text-center">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <a
                      className="flex justify-between items-center w-full text-[#171515]"
                      target="_blank"
                      href="https://github.com/zsolt-deak/OnlineStore">
                      View on GitHub
                      <FaGithub size={30} />
                    </a>
                  </button>
                
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <a
                      className="flex justify-between items-center w-full text-[#171515]"
                      target="_blank"
                      href="https://deakzsolt-onlinestore.netlify.app/">
                        Try it!
                      <FaPlay size={20} />
                    </a>
                  </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition hover:bg-[#000000ce]">
            <span className="text-2xl font-bold text-white tracking-wider text-center">
                Portfolio website
              </span>
              <p className="text-l font-bold text-white tracking-wider text-center">
                This website was made with React and Tailwind css
              </p>
              <div className="pt-8 text-center">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <a
                      className="flex justify-between items-center w-full text-[#171515]"
                      target="_blank"
                      href="https://github.com/zsolt-deak/Portfolio">
                      View on GitHub
                      <FaGithub size={30} />
                    </a>
                  </button>                               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
