import React from 'react'
import './nav.css'
import Nigeria from '../assets/nigeria.png';


function Navbar () {
 return(
    <section className='overall-nav'>
        <div className='logo'>
            TOPAZ
        </div>

        <div className='center-menu'>
            <ul>
                <li>Why Topaz?</li>
                <li>Men</li>
                <li>Women</li>
                <li>Journal</li>
                <li>Blog</li>
            </ul>
        </div>

        <div className='nav-buttons'>
            <button>SHOP NOW</button>
            <div className='country-logo'>
                <img src={Nigeria}/>
            </div>
        </div>
    </section>
 )
}

export default Navbar;