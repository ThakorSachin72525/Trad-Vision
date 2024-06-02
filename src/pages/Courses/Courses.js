import Navbar from "../../Components/NavBar/Navbar"
import Disclaimer from "../../Components/Disclaimer/Disclaimer.js"
import courses from "../../Components/course_portfolio/coursedetails.jsx"
import CourseList from "./CourseNewPages.js"

function Courses() {
  return (
    <div className="Courses">
        <Navbar/>
        <CourseList courses = {courses}/>
        <Disclaimer/>
    </div>
  )
}


export default Courses