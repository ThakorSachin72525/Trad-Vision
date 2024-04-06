import Navbar from "../../Components/NavBar/Navbar"
import Courselist from "../../Components/course_portfolio/Courselist.js"
import Disclaimer from "../../Components/Disclaimer/Disclaimer.js"

function Courses() {
  return (
    <div className="Courses">
        <Navbar/>
        <Courselist/>
        <Disclaimer/>
    </div>
  )
}


export default Courses