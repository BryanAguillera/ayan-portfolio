import React from "react";
import Navbar from "./Navbar";
import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  const links = [
    {
      id: 1,
      link: "Home",
      to: "/",
    },
    {
      id: 2,
      link: "Projects",
      to: "/projects",
    },
  ];
  return (
    <div className="bg-white flex min-h-screen max-w-[1300px] mx-auto">
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
      <ul className="fixed right-0 top-0 h-screen flex flex-col items-center justify-around space-y-8 px-4">
        {links.map(({ id, link, to }) => (
          <NavLink
            to={to}
            key={id}
            className="-rotate-90 cursor-pointer text-red-600 dark:text-[#475569]  hover:scale-105 duration-200 px-2 aria-[current=page]:text-yellow-300 dark:aria-[current=page]:text-red-600"
          >
            {link}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Layout;
