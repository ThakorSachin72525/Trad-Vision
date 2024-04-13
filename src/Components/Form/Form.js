import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import './Form.css';
import Laptop from './laptop.png'
import IdCard from './id-card.png'
import Candlestick from './candlestick.png'
import Calender from './calendar.png'
import Financial from './financial.png'


function Form() {
  const form = useRef(); // Creating a ref for the form

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zx7x1fv', 'template_lvszf06', form.current, 'V_8u2MBDeOXCX65Uz')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div className='form'>
      <div className="headers">
        Connect with our <span>Experts</span>

      </div>
      
      <div className="form-details">
        <div className="sidetext">
          <div id="texticons">
            <img src={Laptop} alt="Laptop Icon" />
            <b>Live Market Hours Learning</b>
          </div>

          <div id="texticons">
            <img src={IdCard} alt="ID Card Icon" />
            <b>Lifetime membership</b>
          </div>

          <div className="formIcons" id="texticons">
            <img src={Calender} alt="Calendar Icon" />
            <b>12 Years of Experience</b>
          </div>

          <div className="formIcons" id="texticons">
            <img src={Financial} alt="Chess Icon" />
            <b>70+ In-house Trading Strategies</b>
          </div>

          <div id="texticons">
            <img src={Candlestick} alt="Candlestick Icon" />
            <b>30+ Options Trading Strategies</b>
          </div>
        </div>

        <Box className="details" p={5}>
          
          <form ref={form} onSubmit={sendEmail}>
            <FormControl id="UserName">
              <FormLabel>Name</FormLabel>
              <Input type="text" name="user_name" />
            </FormControl>

            <FormControl id="PhoneNum">
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" name="user_phone" />
            </FormControl>

            <FormControl id="Location">
              <FormLabel>Your Location</FormLabel>
              <Input type="text" name="user_location" />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="user_email" />
            </FormControl>

            <FormControl id="msg">
              <FormLabel>Message</FormLabel>
              <Input type="text" name="message" />
            </FormControl>

            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </div>
    </div>
  )
}

export default Form;
