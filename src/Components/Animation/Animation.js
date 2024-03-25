import { Flex } from "@chakra-ui/react";
import Ani from "./MarketVideo.mp4";

function Animation() {
  return (
    <Flex justify="center" align="center">
      <video width="100%" height="auto" controls loop>
        <source src={Ani} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Flex>
  );
}

export default Animation;
