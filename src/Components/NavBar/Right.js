import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./index.css";
import YouTubeIcon from "../Social-Media/icons8-youtube-250.png";

function Right() {
  return (
    <div className="right">
      <Flex align="center" id="btn" ml={8}>
        <NavItem label="Contact" to="/contact" />
        <NavItem label="About Us" to="/about" />
        <div id="iconsAndText">
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
  // Accept "to" prop for NavLink
  return (
    <Link as={NavLink} to={to} fontSize="md" ml={4} activeClassName="active">
      {" "}
      {/* Use NavLink instead of Link */}
      {label}
    </Link>
  );
}

export default Right;
