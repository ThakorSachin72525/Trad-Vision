import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import './index.css';

function Left() {
  return (
    <div className='left'>
      <Flex align="center" ml={8}>
        <NavItem label="Home" />
        <NavItem label="Courses" />
      </Flex>
    </div>
  );
}

function NavItem({ label }) {
  return (
    <Link href={label.toLowerCase() === "home" ? "/" : `/${label.toLowerCase()}`} fontSize="md" ml={4}>
      {label}
    </Link>
  );
}

export default Left;
