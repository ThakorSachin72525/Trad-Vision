import './Course.css'
const CourseCard = (props) => {
  return (
    <div className="card">
        <div className="course-card">
          <img src={props.img} alt="Options for Beginners" />
          <div className="course-details">
            <p><b>{props.title}</b>{props.description}</p>
            <div className="pricebtn">
              <p>Just at</p>
              <p>{props.price}</p>
              <p>{props.discount}</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default CourseCard