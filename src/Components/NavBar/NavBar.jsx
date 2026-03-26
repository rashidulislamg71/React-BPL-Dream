import React from "react";
import Links from "../../Utils/Links";

import logo from "../../assets/logo.png";
import coinImg from "../../assets/dollar_1.png";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Fixture", path: "/fixture" },
  { id: 3, name: "Teams", path: "/teams" },
  { id: 4, name: "Schedules", path: "/schedules" },
];

function NavBar({coins}) {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        {/* logo  */}
        <div className="flex-1 cursor-pointer">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        {/* links  */}
        <div>
          <ul className="flex gap-10 justify-center items-center">
            {navItems.map((item) => (
              <Links key={item.id} path={item.path} name={item.name} />
            ))}
          </ul>
        </div>
        <div className=" ml-10">
          <button className="btn px-5  font-bold flex">
            {coins} Coins
            <img src={coinImg} alt="coins" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
