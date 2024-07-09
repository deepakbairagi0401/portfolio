import React from 'react'
import {GoArrowRight} from 'react-icons/go'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <div className='w-100 home'>
        <div className="cantainer" >
          <div className="inner-box intro w-50">
              <span className="text-box">DEEPAK   BAIRAGI</span><br />
              <h1>HEY! I'M DEEPAK</h1>
              <h1 style={{color:"#0788ff",fontWeight:"500"}}>I'M A DEVELOPER</h1>
              <p>I would like to enhance my technical and soft skills by taking up challenging assignments and expanding my knowledge. </p>
              <button className='btn btn-primary  rounded-5'>Get In Touch<GoArrowRight/></button>
          </div>
          <div className="inner-box photo">
              <img src="./myphoto-.png.png"  alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home