import { Box } from "@chakra-ui/react";
import './youtube.css'
function YouTube() {
  return (
    <div className="videoandtext">
      <Box maxW="xl" mx="auto" bg="black">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/9t4Gdq0BGzk?autoplay=1&loop=1&playlist=9t4Gdq0BGzk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Box>
    </div>
  );
}

export default YouTube;
