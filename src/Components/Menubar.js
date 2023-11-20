import React from "react";
import "./Menubar.css";

import {
  FaBook,
  FaBookOpen,
  FaCalendar,
  FaCircle,
  FaHeart,
  FaHome,
  FaMusic,
  FaNotEqual,
  FaPagelines,
  FaUser,
} from "react-icons/fa";
import Logo from "../assets/images/svgs/logo.svg";

function Menubar() {
  const menu = [
    {
      id: 1,
      icon: <FaHome />,
      link: "home",
    },

    {
      id: 2,
      icon: <FaBook />,
      link: "trends",
    },

    {
      id: 3,
      icon: <FaCircle />,
      link: "feed",
    },

    {
      id: 4,
      icon: <FaNotEqual />,
      link: "news and notations",
    },

    {
      id: 5,
      icon: <FaCalendar />,
      link: "release calendar",
    },

    {
      id: 6,
      icon: <FaPagelines />,
      link: "events",
    },

    {
      id: 7,
      icon: <FaHeart />,
      link: "favorite songs",
    },

    {
      id: 8,
      icon: <FaMusic />,
      link: "artist",
    },

    {
      id: 9,
      icon: <FaBookOpen />,
      link: "album",
    },
  ];

  return (
    <div className="container-menu">
      <div className="logo-img">
        <img src={Logo} alt="logo" />
      </div>

      <div className="container-list">
        <ul className="hidden md:flex items-center">
          {menu.map(({ id, icon, link }) => (
            <li key={id} className="list-items">
              <p>{icon}</p>
              <a href="/" to={link} smooth duration={300}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
  
      <div className="profile">
        <p>Sarah Adebayo</p>
        <FaUser />
      </div>
    </div>
  );
}

export default Menubar;
