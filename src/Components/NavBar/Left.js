import './index.css';
import { useMediaQuery, useColorMode } from '@chakra-ui/react';
import Tlogo from "./Tlogo.png"

function Left() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");
  
  return (
    <div className='left'>
        <img src={Tlogo}/>
    </div>
  )
}

export default Left