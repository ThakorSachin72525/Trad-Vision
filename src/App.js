import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import Animation from "./Components/Animation/Animation";
import Section2 from './Components/Section 2/Section2';
import Our_Philosopny from './Components/Our Philosophy/OurPhi';
import YouTube from './Components/youtube/YouTube'
import Mission from './Components/youtube/Mission';
import Founder from './Components/Founder/Founder';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Animation/>
      <Section2/>
      <Our_Philosopny/>
      <YouTube/>
      <Mission/>
      <Founder/>
    </div>
  );
}

export default App;
