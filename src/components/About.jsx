import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full pt-[20vh] pb-[20vh] bg-[#1a1a1d] text-[#afb9d6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid  grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#61892f]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Zsolti. Nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
