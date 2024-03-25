import React from "react";
import {
  Flex,
  IconButton,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
} from "react-icons/fa"; // Corrected import
import "./index.css";

function Right() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  

  return (
    <div className="right">
      <Flex align="center" ml={8}>
        <NavItem label="Home" />
        <NavItem label="Contact Us" />
        <NavItem label="About Us" />
      <IconButton
        ml={8}
        icon={isDark ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
        isRound="true"/>
        </Flex>
    </div>
  );
}

function NavItem({ label }) {
  return (
    <Link href={`/${label.toLowerCase()}`} fontSize="md" ml={4}>
      {label}
    </Link>
  );
}

export default Right;
