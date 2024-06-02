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
    <Link as={NavLink} to={to} color={'white'} fontWeight="bold" ml={2}>
      {label}
    </Link>
  );
}

export default Left;
