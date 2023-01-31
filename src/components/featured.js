import React from 'react'
import Slider from './Slider'
import './featured.css'

function featured() {
  return (
    <>
        <section className='slider'>
          <Slider />
        </section>
        <section className='featured'>
            <h3>Featured Categories</h3><br></br><br></br>
            <div className='category'>
                <div className='box-one'>Arts and Photo</div>
                <div className='box-two'>Food and Drink</div>
                <div className='box-three'>Romance</div>
                <div className='box-four'>Health</div>
                <div className='box-five'>Biography</div>
            </div><br></br><br></br><br></br><br></br>
            <h3>BestSelling Books</h3>
        </section>
    </>
  )
}

export default featured