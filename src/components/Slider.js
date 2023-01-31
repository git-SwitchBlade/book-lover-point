import React from 'react'
import './Slider.css'
import Navbar from './Navbar'

function Slider() {
  return (
    <>
    <Navbar />
    <div className='container-slider'>
        <img src="./slider.png" />
        <div className='text'>Featured Books of the</div>
        <div className='txt'>January</div>
        <a className='link-btn' href='#'>See More</a>
        <div className='books'><img src='books.png'></img></div>
    </div>
    </>
  )
}

export default Slider