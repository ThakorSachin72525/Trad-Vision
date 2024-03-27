import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Img1 from './img1.jpg'
import './Form.css'

function Form() {
  return (
    <div className='form'>
        <header>
            Connect with our Experts
        </header>

        <div className="form-details">

        <div className="sidetext">
          <div id="texticons">
            <img src="https://cdn-kljhn.nitrocdn.com/nKlGOhXnVsIfMKVRxfPqTWWbOxfRVUKB/assets/images/optimized/rev-a733d73/finwingsacademy.com/wp-content/uploads/2022/06/laptop.png"/>
            <b>Live Market Hours Learning</b>
          </div>

          <div id="texticons">
            <img src="https://cdn-kljhn.nitrocdn.com/nKlGOhXnVsIfMKVRxfPqTWWbOxfRVUKB/assets/images/optimized/rev-a733d73/finwingsacademy.com/wp-content/uploads/2022/06/id-card.png"/>
            <b>Lifetime membership</b>
          </div>

          <div id="texticons">
            <img src="https://cdn-kljhn.nitrocdn.com/nKlGOhXnVsIfMKVRxfPqTWWbOxfRVUKB/assets/images/optimized/rev-a733d73/finwingsacademy.com/wp-content/uploads/2022/06/calendar.png"/>
            <b>12 Years of Experience</b>
          </div>

          <div id="texticons">
            <img src="https://cdn-kljhn.nitrocdn.com/nKlGOhXnVsIfMKVRxfPqTWWbOxfRVUKB/assets/images/optimized/rev-a733d73/finwingsacademy.com/wp-content/uploads/2022/06/chess-1.png"/>
            <b>70+ In-house Trading Strategies</b>
          </div>

          <div id="texticons">
            <img src="https://cdn-kljhn.nitrocdn.com/nKlGOhXnVsIfMKVRxfPqTWWbOxfRVUKB/assets/images/optimized/rev-a733d73/finwingsacademy.com/wp-content/uploads/2022/06/candlestick.png"/>
            <b>30+ Options Trading Strategies</b>
          </div>
        </div>

        <Box className="details" p={5}>
      <FormControl id="FirstName">
        <FormLabel>First Name</FormLabel>
        <Input type="text" />
      </FormControl>
        
      <FormControl id="LastName">
        <FormLabel>Last Name</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl id="PhoneNum">
        <FormLabel>Phone Number</FormLabel>
        <Input type="number" />
      </FormControl>

      <FormControl id="Location">
        <FormLabel>Your Location</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
        </Box>

        
        </div>
    </div>
  )
}

export default Form
