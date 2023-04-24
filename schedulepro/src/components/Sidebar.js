import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../components/logo.jpeg";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../components/Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  // console.log(window.innerWidth)

  
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <a href="/">

          <img src={Logo} alt="logo"/>
          </a>
          {/* <span>
            Ta<span>s</span>ks
          </span> */}
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <a
                href={`#${item.id}`}
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)} // onClick={() => }
              >
                <item.icon />
                <span>{item.heading}</span>
              </a>
            );
          })}
          {/* signoutIcon */}
          
        </div>
      </motion.div>

      {/* signoutIcon */}
      
    </>
  );
};

export default Sidebar;
