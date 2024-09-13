import React, { useState } from "react";
import Experiences from "./Experiences";
import Recommended from "./Recommended";
import AboutMe from "./AboutMe";

const links = [
  {
    title: "AboutMe",
  },
  {
    title: "Experiences",
  },
  {
    title: "Recommended",
  },
];
const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState("AboutMe");

  return (
    <div>
      <nav className="bg-gray-900 rounded-lg w-[85%] mx-auto my-4 flex flex-1 justify-center items-center gap-4">
        <ul className="w-full flex flex-1 justify-between items-center gap-4 p-1">
          {links.map((link) => (
            <li
              key={link.title}
              className={`text-white px-5 py-2 flex justify-center items-center w-[30%] text-sm cursor-pointer ${
                activeComponent === `${link.title}`
                  ? " bg-gray-700 rounded-lg shadow-2xl"
                  : ""
              }`}
              onClick={() => setActiveComponent(`${link.title}`)}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex">
        {activeComponent === "AboutMe" && <AboutMe />}
        {activeComponent === "Experiences" && <Experiences />}
        {activeComponent === "Recommended" && <Recommended />}
      </div>
    </div>
  );
};

export default Navbar;
