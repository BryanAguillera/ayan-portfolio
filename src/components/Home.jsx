import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFileAlt, FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    {
      id: 1,
      label: "Facebook",
      link: "https://www.facebook.com/ayan.aguillera",
    },
    {
      id: 2,
      label: "Github",
      link: "https://github.com/BryanAguillera",
    },
    {
      id: 3,
      label: "Linkedin",
      link: "https://www.linkedin.com/in/engrbryanaguillera",
    },
  ];

  // ButtonMailto component
  const ButtonMailto = ({ mailto, label, className, children }) => {
    return (
      <Link
        to="#"
        className={className}
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {children || label}
      </Link>
    );
  };

  return (
    <div className="w-full max-w-[1300px] h-[calc(100vh-8rem-4rem)] sm:h-[calc(100vh-12rem)] flex flex-col justify-between mx-auto">
      <div className="w-[90%] mx-auto text-center sm:text-left py-4 sm:py-7">
        <p className="text-lg sm:text-xl font-medium">
          You’ve just entered Stark Industries 2.0 — except it’s run by me,
        </p>
        <h1 className="text-4xl sm:text-8xl font-bold">Bryan</h1>
      </div>

      <div className="w-[90%] mx-auto flex flex-col sm:flex-row">
        <div className="text-lg font-normal w-full sm:w-3/5 text-center sm:text-left">
          <p>Hi! I'm a full stack web and mobile developer.</p>
          <span className="italic">
            Not a billionaire, not a playboy… just a{" "}
            <span className="text-red-500">genius developer</span> and a
            <span className="text-yellow-500"> philanthropist</span>.
          </span>
          <span>
            So, what brings you here — looking for innovation, collaboration, or
            just a spark of Stark-level creativity?
          </span>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center sm:items-end flex-col p-4 space-y-2">
          <a
            href="/Bryan Aguillera_RESUME_2025.pdf"
            download="Bryan Aguillera_RESUME_2025.pdf"
            className="flex items-center space-x-3 cursor-pointer"
          >
            <FaFileAlt className="text-black text-sm" />
            <p className="text-center font-semibold hover:text-red-500 hover:underline">
              If you want my resume
            </p>
            <span className="text-blue-500">*</span>
          </a>

          <ButtonMailto
            mailto="mailto:engrbryanaguillera@gmail.com?subject=Hello%20Bryan!&body=Hi%20Bryan,%20I%20would%20like%20to%20have%20a%20chat%20with%20you."
            className="flex items-center space-x-3 cursor-pointer"
          >
            <FaBeer className="text-black text-sm" />
            <p className="font-semibold hover:text-yellow-500 hover:underline">
              Or have a chat
            </p>
            <span className="text-blue-500">*</span>
          </ButtonMailto>
        </div>
      </div>

      <div className="w-[90%] mx-auto py-4 pb-20 sm:pb-4 flex flex-row justify-center items-end space-x-4">
        {links.map((link, index) => {
          const hoverClasses = [
            "hover:bg-red-500 hover:border-red-500",
            "hover:bg-yellow-500 hover:border-yellow-500",
            "hover:bg-blue-500 hover:border-blue-500",
          ];
          return (
            <div
              onClick={() => window.open(link.link)}
              key={link.id}
              className={`border border-black p-2 rounded-full cursor-pointer transition-colors ${hoverClasses[index]}`}
            >
              <p>{link.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
