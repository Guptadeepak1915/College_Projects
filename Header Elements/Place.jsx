import React from 'react'
import './Place.css'
import Pic1 from '/src/img/Taj-Mahal.jpg'

const Place = () => {
  return (
    <div class="Place-main-div">
      <div class="photos-div">
      <img class="photos" src={Pic1} alt="not found" />
      <p>Tajmahl is in aagra</p>
      </div>
    
    </div>
  )
}

export default Place
