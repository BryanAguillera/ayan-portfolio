import React from "react";
import Picture from "./Picture";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import laro from "../assets/images/laro.png";
import golds from "../assets/images/goldsgym.png";
import casa from "../assets/images/casagranja.png";
import katunying from "../assets/images/katunying.png";
import aguillera from "../assets/images/rsaguillera.png";
import { Link } from "react-router-dom";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import react from "../assets/skills/reaact.png";
import tailwind from "../assets/skills/tailwind.png";
import python from "../assets/skills/python.png";
import mongodb from "../assets/skills/mongodb.png";
import recipe from "../assets/images/recipeapp.png";
import simplesolutions from "../assets/images/SimpleSolutions.png";
import express from "../assets/skills/express.png";
import nodejs from "../assets/skills/nodejs.png";
import firebase from "../assets/skills/firebase.png";
import supabase from "../assets/skills/supabase.png";
import expo from "../assets/skills/expo.png";

import { IoMdArrowRoundForward } from "react-icons/io";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "RFV ALLIANZ SYSTEM",
      desc: "A comprehensive enterprise management system that revolutionizes multi-company operations by seamlessly integrating sales and accounting departments. This innovative platform connects five existing companies under one unified ecosystem, automatically generating real-time sales reports while ensuring direct communication between sales and accounting teams. Business owners gain unprecedented visibility through a dedicated mobile application featuring advanced analytics, comprehensive sales tracking, detailed reporting, and centralized management tools for all their companies.",
      link: "",
      tech: [react, tailwind, supabase, expo],
      photo: golds,
      color: "gray",
      year: "JUNE 2025",
    },
    {
      id: 2,
      title: "WINGS OF ANGELS TRANSPO APP",
      desc: "An advanced logistics management solution designed for funeral service operations, featuring dual interfaces: a comprehensive web-based management system for administrators and a dedicated mobile application for field technicians. The platform enables efficient task assignment and management, allowing technicians to accept assigned responsibilities and provide real-time status updates throughout the service delivery process. The system includes detailed documentation and tracking capabilities for deceased individuals' transportation, ensuring dignified and professional handling of sensitive operations with complete transparency and accountability.",
      link: "",
      tech: [react, tailwind, firebase, expo, nodejs, express],
      photo: golds,
      color: "gray",
      year: "MAY 2025",
    },
    {
      id: 3,
      title: "PARISH CONNECT",
      desc: "A dynamic church community platform featuring a powerful web-based content management system for administrators and an interactive mobile application for parishioners. The comprehensive admin panel allows full control over church content including announcements, events, daily readings, parish news, and spiritual resources. The mobile app creates an engaging, interactive experience for church members, fostering stronger community connections through seamless access to church activities, schedules, and important communications.",
      link: "",
      tech: [react, tailwind, supabase, expo],
      photo: golds,
      color: "gray",
      year: "MARCH 2025",
    },
    {
      id: 4,
      title: "TRACK AND TRACE",
      desc: "A sophisticated web-based shipment tracking system that provides real-time, accurate monitoring of cargo movements from origin to destination. Users receive detailed status updates at every stage of the shipping process, with precise tracking information inputted at each movement checkpoint. The system ensures exceptional accuracy and timeliness through user-driven status updates, delivering comprehensive shipment visibility and reliable delivery tracking for enhanced logistics management.",
      link: "",
      tech: [react, tailwind, supabase, express, nodejs],
      photo: golds,
      color: "gray",
      year: "FEB 2025",
    },

    {
      id: 5,
      title: "Simple Solutions",
      desc: "A professional showcase website for a premier cleaning services company, featuring an elegant display of comprehensive cleaning solutions and streamlined booking capabilities. The platform highlights the company's full range of services while providing intuitive contact and booking functionality, creating a seamless customer experience from initial inquiry to service scheduling. The website serves as a digital storefront that effectively communicates the company's expertise and facilitates easy client engagement.",
      link: "https://www.simplesolutions.com.ph/",
      tech: [react, tailwind],
      photo: simplesolutions,
      color: "gray",
      year: "OCT 2024",
    },
    {
      id: 6,
      title: "Laro App",
      desc: "Laro App is an advanced platform designed to enhance your gaming experience by facilitating the discovery and participation in a wide range of active games, leagues, and events. Our service enables users to efficiently find and join gaming opportunities that align with their preferences and interests. Whether you are seeking competitive leagues, exciting tournaments, or casual gaming events, Laro App offers a streamlined and user-friendly interface to connect you with the gaming experiences you desire. Experience the future of gaming engagement with Laro App and elevate your gaming journey.",
      link: "https://laro.com.ph/",
      tech: [react, tailwind, nodejs, express, mongodb],
      photo: laro,
      color: "gray",
      year: "2023",
    },

    {
      id: 7,
      title: "Recipe App with Authentication",
      desc: "This project is a full-stack Recipe App that includes authentication and authorization features. Built with ReactJS and Tailwind CSS for the front-end and NodeJS for the back-end, it also utilizes MongoDB for database management. The project demonstrates setting up an Express.js server, using MongoDB Compass for database operations, and creating secure APIs for handling recipes.",
      link: "",
      tech: [react, tailwind, nodejs, express, mongodb],
      photo: recipe,
      color: "gray",
      year: "2023",
    },
    {
      id: 8,
      title: "Gold's Gym",
      desc: "Gold’s Gym Philippines stands as the preferred fitness destination for amateur and professional athletes, fitness and beauty contestants, entertainment industry professionals, and individuals dedicated to enhancing their health and overall quality of life.",
      link: "https://goldsgym.com.ph/",
      tech: [html, css, javascript],
      photo: golds,
      color: "gray",
      year: "2023",
    },
    {
      id: 9,
      title: "Casa Granja",
      desc: "For a distinguished and memorable event in Gapan City, consider booking with Casa Granja. They offers an exceptional setting for a wide range of events, including corporate gatherings, social celebrations, and private functions. ",
      link: "https://casagranja.ph/?fbclid=IwY2xjawEbLMpleHRuA2FlbQIxMAABHYBdwxQOLITn8M_rHGl2KR48frrjtf0Agr9c-Mga3JJZURJgpizVUFsifA_aem_pOKXt4-GJw8WRfBZxMQIZw",
      tech: [html, css, javascript],
      photo: casa,
      color: "gray",
      year: "2023",
    },
    {
      id: 10,
      title: "Ka Tunying",
      desc: `Ka Tunying’s is a casual tambayan and restoran in one, that gives that "at home feel" and serves filipino cuisine, both traditional and pambihirang home-cooked dishes at all-day merienda, for families and barkadas, professionals, balikbayans and turistas in Metro Manila at probinsya. Tara, kain tayo!`,
      link: "https://katunyings.com/",
      tech: [html, css],
      photo: katunying,
      color: "gray",
      year: "2023",
    },
    {
      id: 11,
      title: "RS Aguillera Welding Shop",
      desc: "RS Aguillera Welding Shop proudly stands as the first sidecar manufacturer in the municipality of San Jose, Batangas. Their establishment is distinguished by its pioneering role in the local industry, offering expertly crafted sidecars designed to meet the highest standards of quality and durability. With a commitment to excellence and innovation, RS Aguillera Welding Shop has become a trusted name for reliable sidecar solutions, serving both commercial and personal transportation needs in the region. We are dedicated to providing superior craftsmanship and exceptional service to our valued customers.",
      link: "",
      tech: [react, tailwind],
      photo: aguillera,
      color: "gray",
      year: "2023",
    },
  ];

  return (
    <div className="max-w-[1300px] mx-auto pb-20 px-10 sm:px-20">
      <h1 className="text-4xl sm:text-8xl font-bold py-5 sm:py-10">PROJECTS</h1>

      <div className="">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col sm:flex-row border-t-2 py-2 gap-2"
          >
            <div className=" w-full sm:w-[50%] space-y-2">
              <div className="flex justify-between items-center pr-10">
                <h1 className="text-lg sm:text-4xl font-bold">
                  {project.title.toUpperCase()}
                </h1>
                {project.link && (
                  <IoMdArrowRoundForward
                    className="hover:cursor-pointer"
                    onClick={() => window.open(project.link, "_blank")}
                  />
                )}
              </div>

              <h2 className="text-xl">{project.year}</h2>
              <p className="pr-10 text-justify text-sm">{project.desc}</p>

              <div className="flex space-x-2 pt-2 items-center">
                {project.tech.map((techIcon, techIndex) => (
                  <img
                    key={techIndex}
                    src={techIcon}
                    alt="tech"
                    className={`object-contain ${
                      techIcon === supabase || techIcon === firebase || techIcon === expo 
                        ? "w-10 h-10" 
                        : "w-6 h-6"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="w-full sm:w-[50%] bg-white flex items-center">
              <img
                className="w-full object-cover"
                src={project.photo}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
