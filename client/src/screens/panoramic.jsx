import React, { useEffect, useState } from 'react'
import '../css/panoramic.css'
import { Pannellum, PannellumVideo } from 'pannellum-react'
import { useLocation } from 'react-router'
import VRIMAGE from '../vr1.jpg'

function Panoramic() {

  const data = useLocation()
  const { pano } = data.state

  const [panoImage,setPanoImage] = useState('')

  useEffect(()=>{
    setPanoImage(pano)
  },[])

  return (
    <div>
      <div className='stereoscopic-view'>
        <div className='pano-screen'>
          {/* USE DYNAMIC PANO IMAGE HERE */}
          <Pannellum
            image={panoImage}
            pitch={10}
            yaw={90}
            hfov={110}
            autoLoad
            orientationOnByDefault
          />
        </div>
        <div className='pano-screen'>
          <Pannellum
            image={panoImage}
            pitch={10}
            yaw={90}
            hfov={110}
            autoLoad
            orientationOnByDefault
          />
        </div>
        </div>
    </div>
  )
}

export default Panoramic