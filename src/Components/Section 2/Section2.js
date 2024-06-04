import React from 'react'
import Sec2Img1 from './img1.jpg'
import Sec2Img2 from './img2.jpg'
import './Section2.css'
function Section2() {
  return (
    <div className='sec2imgs'>
        <img alt='Sec2Img1' src={Sec2Img1}/>
        <img alt='Sec2Img2' src={Sec2Img2}/>
    </div>
  )
}

export default Section2