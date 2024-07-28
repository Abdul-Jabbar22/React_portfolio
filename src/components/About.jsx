import React, { useEffect } from "react";
import html from "../assets/about/html.png";
import css from "../assets/about/css3.png";
import figma from "../assets/about/figma.png";
import javascript from "../assets/about/javascript.png";
import github from "../assets/about/github.png";
import react from "../assets/about/react.png";
import bootstrap from "../assets/about/bootstrap.png";
import tailwind from "../assets/about/tailwind.png";
import nodejs from "../assets/about/node.png";
import vscode from "../assets/about/vscode.png";
import xd from "../assets/about/xd.png";
import about from "../assets/about/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported

function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section
      id="about"
      className="pb-20 dark:bg-[#03001C] bg-light duration-700"
    >
      <h2 className="mx-auto z-100 text-6xl pt-48 md:pt-24 text-center text-black dark:text-white font-bold">
        About
        <hr className="w-12 h-1 mx-auto my-6 bg-name rounded border-0"></hr>
      </h2>

      <div
        data-aos="flip-down"
        className="flex flex-col-reverse space-y-10 items-center justify-center mx-6 md:flex-row md:space-x-24 md:space-y-0 md:p-4"
      >
        <div className="rounded-2xl md:w-2/3 text-glass shadow-[#aea5a2] dark:shadow-[#020010] dark:bg-[#111928bf] bg-[#f2f3f4] p-4 md:m-3 m-1 shadow-2xl">
          <h2 className="text-center text-style text-name text-3xl font-bold py-6">
            Abdul Jabbar
          </h2>
          <div className="dark:text-white text-black font-semibold py-6">
            <h3 className="">Web Developer</h3>
            <br />
            <h3 className="">
              I'm a Front-End Web Developer I have a passion for creating
              intuitive and visually appealing user interfaces that enhance the
              overall user experience. I have a strong foundation in HTML, CSS,
              and JavaScript, as well as experience with popular front-end
              frameworks such as ReactJS. Currently, I am expanding my skills by
              learning the MERN stack, which includes MongoDB, Express.js,
              ReactJS, and Node.js.
            </h3>
            <br />
            <h3 className="pb-1">
              {/* I have worked on a variety of projects, ranging from simple
              brochure websites to complex e-commerce platforms, and have a
              proven track record of delivering high-quality results on time and
              within budget. */}
            </h3>
          </div>
          <div className="text-center py-6 ">
            <a
              href="./Abdul_Jabbar.pdf"
              download
              className="contact-btn md:px-12 md:mt-0 mt-60 rounded-lg bg-dark dark:bg-white cursor-pointer dark:text-dark text-white px-9 py-3 font-bold text-md"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div data-aos="fade-up-right" className="contact-btn ">
          <img
            src={about}
            alt="My image"
            width="350"
            height="50"
            className="rounded-full"
          />
        </div>
      </div>
      {/* Tech Icons */}
      <div
        data-aos="zoom-out"
        className="flex md:mx-6 mx-3 pt-8 flex-row justify-center flex-wrap"
      >
        <img src={html} width="120" height="80" alt="Html" />
        <img src={css} width="120" height="80" alt="Css" />
        <img src={javascript} width="120" height="80" alt="Javascript" />
        <img src={react} width="120" height="80" alt="React" />
        <img src={nodejs} width="120" height="40" alt="Node JS" />
        <img src={bootstrap} width="120" height="80" alt="Bootstrap" />
        {/* <img src={tailwind} width="120" height="80" alt="Tailwind" /> */}
        <img src={vscode} width="120" height="80" alt="VScode" />
        {/* <img src={xd} width="120" height="80" alt="Adobe xd" />
        <img src={figma} width="120" height="80" alt="Figma" /> */}
        <img src={github} width="120" height="80" alt="Github" />
      </div>
    </section>
  );
}

export default About;
