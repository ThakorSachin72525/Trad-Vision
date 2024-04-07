import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { NavLink } from "react-router-dom";
import './index.css';

function Left() {
  return (
    <div className='left'>
      <Flex id='btn' align="center" ml={8}>
        <NavItem label="Home" to="/" />
        <NavItem label="Courses" to="/courses" />
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

export default Left;
