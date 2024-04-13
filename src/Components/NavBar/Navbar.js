import { Flex, VStack, Spacer } from "@chakra-ui/react";
import Left from "./Left";
import Right from "./Right";
import Logo from "./logo";
import "./index.css";

function Navbar() {
  return (
    <div className="nav">
      <VStack>
        <Flex w="100%">
          <Left />
          <Logo />
          <Spacer />
          <Right />
        </Flex>
      </VStack>
    </div>
  );
}

export default Navbar;
