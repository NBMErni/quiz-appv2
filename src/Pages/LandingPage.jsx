import React from "react";
import landingPagePic from "../../public/images/landing-page-pic.svg";
import Header from "../Components/Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col md:h-screen md:flex-row items-center justify-center   ">
        <div className="left mt-20 lg:w-1/2 flex flex-col ">
          <h1 className="text-4xl lg:text-5xl text-gray-800 font-bold mx-5 mb-5 px">
            Learn <br />
            new concepts <br />
            for each question
          </h1>
          <h3 className="mx-5 my-5 border-l-2 border-black  pl-5">
            We help you prepare for exams and quizzes
          </h3>

          <div className="flex lg:w-1/2  justify-center gap-10 ">
            <button className="px-3 py-2 bg-amber-400 text-white rounded-md">
              Start solving
            </button>
            <button>Know more</button>
          </div>
        </div>
        <div className="right">
          <img src={landingPagePic} alt="Landing Page" className="w-[500px]" />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
