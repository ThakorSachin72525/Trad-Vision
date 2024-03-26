import img1 from './1.webp'
import img2 from './2.webp'
import img3 from './3.webp'
import img4 from './4.webp'
import img5 from './5.webp'
import img6 from './6.webp'
import './ourPhi.css'
function Our_Philosopny() {
  return (
    <div className='Our_Philosopny'>
      <div id='Hline'>
      <b>
      Our <span>Philosopny</span>
      </b>
      </div>
        <div className='top_img'>
            <img src={img1}/>
            <img src={img2}/>
        </div>
        <div className='bottom_img'>
           <div>
            <img src={img3}/>
            <b>Price Action<br/>Trading System</b>
           </div>
           <div>
            <img src={img4}/>
            <b>Highly Objective &<br/>Mechanical System</b>
           </div>
           <div>
            <img src={img5}/>
            <b>Trend-Following</b>
           </div>
           <div>
            <img src={img6}/>
            <b>Basic Maths</b>
           </div>
        </div>
    </div>
  )
}

export default Our_Philosopny