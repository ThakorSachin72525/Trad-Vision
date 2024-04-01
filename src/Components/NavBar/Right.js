import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import "./index.css";
import YouTubeIcon from '../Social-Media/icons8-youtube-250.png';

function Right() {
  return (
    <div className="right">
      <Flex align="center" ml={8}>
        <NavItem label="Contact" />
        <NavItem label="About Us" />
        <div id='iconsAndText'>
          <img
            onClick={() => window.open("https://www.youtube.com/@tradevisionlive")}
            src={YouTubeIcon}
            alt="YouTube Icon"
          />
        </div>
      </Flex>
    </div>
  );
}

function NavItem({ label }) {
  return (
    <Link href={`/${label.toLowerCase().replace(" ", "-")}`} fontSize="md" ml={4}>
      {label}
    </Link>
  );
}

export default Right;
