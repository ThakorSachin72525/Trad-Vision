import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./index.css";
import YouTubeIcon from "../Social-Media/icons8-youtube-250.png";

function Right() {
  return (
    <div className="right">
      <Flex align="center" id="btn">
        <NavItem label="Contact" to="/contact" />
        <NavItem label="About Us" to="/about" />
        <div id="iconsAndTexts">
          <img
            onClick={() =>
              window.open("https://www.youtube.com/@tradevisionlive")
            }
            src={YouTubeIcon}
            alt="YouTube Icon"
          />
        </div>
      </Flex>
    </div>
  );
}

function NavItem({ label, to }) {
  return (
    <Link as={NavLink} to={to} fontSize="md" fontWeight="bold" mr={2} activeClassName="active">
      {label}
    </Link>
  );
}

export default Right;
