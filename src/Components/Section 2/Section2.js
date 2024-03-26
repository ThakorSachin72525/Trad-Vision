import React from 'react'
import Sec2Img1 from './img1.jpg'
import Sec2Img2 from './img2.jpg'
import './Section2.css'
function Section2() {
  return (
    <div className='sec2imgs'>
        <img src={Sec2Img1}/>
        <img src={Sec2Img2}/>
    </div>
  )
}

export default Section2