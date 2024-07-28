import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UOS from "../assets/uni/UOS.jpg"; // Ensure AOS CSS is imported
import BZU from "../assets/uni/BZU.jpeg"; // Ensure AOS CSS is imported

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section
      id="education"
      className="pb-20 dark:bg-[#03001C] bg-light duration-700"
    >
      <h2 className="mx-auto z-100 text-6xl pt-48  md:pt-24 text-center text-black dark:text-white font-bold">
        Education
        <hr className="w-12 h-1 mx-auto my-6 bg-name rounded border-0"></hr>
      </h2>

      <div
        data-aos="flip-down"
        className="flex flex-col space-y-10 items-center justify-center mx-6 md:flex-row md:space-x-10 md:space-y-0 md:p-4"
      >
        <div className="rounded-2xl w-full md:w-1/2 text-glass shadow-[#aea5a2] dark:shadow-[#020010] dark:bg-[#111928bf] bg-[#f2f3f4] p-4 m-3 shadow-2xl">
          <h2 className="text-center text-style text-name text-3xl font-bold py-6">
            MCS (Masters In Computer Science)
          </h2>
          <div className="dark:text-white text-black font-semibold py-6">
            <h3 className="flex items-center justify-center space-x-3">
              <img
                src={UOS}
                width="50"
                height="50"
                className="rounded-full"
                alt="UOS"
              />
              <span>University Of Sahiwal,Sahiwal</span>
            </h3>
            <br />
            <h3 className="">
              Masters with a focus on software development, algorithms, and data
              structures.
              <li>CGPA 3.22</li>
              <li>2020-2022</li>
            </h3>
            <br />
            <h3 className="pb-1"></h3>
          </div>
        </div>

        <div className="rounded-2xl w-full md:w-1/2 text-glass shadow-[#aea5a2] dark:shadow-[#020010] dark:bg-[#111928bf] bg-[#f2f3f4] p-4 m-3 shadow-2xl">
          <h2 className="text-center text-style text-name text-3xl font-bold py-6">
            Bachelors in Computer Science
          </h2>

          <div className="dark:text-white text-black font-semibold py-6">
            <h3 className="flex items-center justify-center space-x-3">
              <img
                src={BZU}
                width="50"
                height="50"
                className="rounded-full"
                alt="UOS"
              />
              <span>Bahauddin Zakariya University</span>
            </h3>
            <br />
            <h3 className="">
              Graduated with a focus on software development, algorithms, and
              data structures.
              <br />
              <br />
              <br />
            </h3>
            <br />
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-out"
        className="flex flex-col space-y-10 items-center justify-center mx-6 md:flex-row md:space-x-10 md:space-y-0 md:p-4"
      >
        <div className="rounded-2xl w-full md:w-1/3 text-glass shadow-[#aea5a2] dark:shadow-[#020010] dark:bg-[#111928bf] bg-[#f2f3f4] p-4 m-3 shadow-2xl h-[300px]">
          <h2 className="text-center text-style text-name text-2xl font-bold py-6">
            Certifications
          </h2>
          <div className="dark:text-white text-black font-semibold py-6">
            <h3 className="">Udemy</h3>
            <br />
            <h3 className="">HTML,CSS,JavaScript,React-js</h3>
          </div>
        </div>
        <div className="rounded-2xl w-full md:w-1/3 text-glass shadow-[#aea5a2] dark:shadow-[#020010] dark:bg-[#111928bf] bg-[#f2f3f4] p-4 m-3 shadow-2xl h-[300px]">
          <h2 className="text-center text-style text-name text-2xl font-bold py-6">
            Certifications
          </h2>
          <div className="dark:text-white text-black font-semibold py-6">
            <h3 className="">Udemy</h3>
            <br />
            <h3 className="">
              CSS,Bootstrap,javaScript And PHP stack Complelte Course
            </h3>
          </div>
        </div>
        <div className="rounded-2xl w-full md:w-1/3 text-glass shadow-[#aea5a2] dark:shadow-[#020010] dark:bg-[#111928bf] bg-[#f2f3f4] p-4 m-3 shadow-2xl h-[300px]">
          <h2 className="text-center text-style text-name text-2xl font-bold py-6">
            Workshops
          </h2>
          <div className="dark:text-white text-black font-semibold py-6">
            <h3 className="">Udemy</h3>
            <br />
            <h3 className="">Wordpress CMS course</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
