import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <>
      <nav>
        <div className='icon'>Book <b style={{color: "lightgreen"}}>Lover</b> Point</div> 
        <ol>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Shop</a></li>
          <li><a href='#'>Collection</a></li>
          <li><a href='#'>Category</a></li>
        </ol>
        <div className='searchbox'>
            <input type="search" placeholder="Search Here" />
        </div> 
      </nav>
    </>
    
  )
}

export default Navbar