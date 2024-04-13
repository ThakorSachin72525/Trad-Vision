import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { NavLink } from "react-router-dom";
import './index.css';

function Left() {
  return (
    <div className='left'>
      <Flex id='btn' align="center">
        <NavItem label="Home" to="/" />
        <NavItem label="Courses" to="/courses" />
      </Flex>
    </div>
  );
}

function NavItem({ label, to }) {
  // Accept "to" prop for NavLink
  return (
    <Link as={NavLink} to={to} fontWeight="bold" fontSize="md" ml={2} activeClassName="active">
      {label}
    </Link>
  );
}

export default Left;
