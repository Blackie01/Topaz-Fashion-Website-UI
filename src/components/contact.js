import React from 'react'
import "./contact.css"
import arrow from '../assets/Vector.png';


function Contact () {
    return (
        <section className='contact-container'>
            <h2>Stay in the loop</h2>
            <p>
            Be the first to know when new collections of Adire drop and get behind- <br />
            the-scenes content straight from Topaz Artistry Lead Creative. 
            </p>

            <div className='contact-section'>
                <input className='contact-email' type="email" placeholder="Enter your email address"/>
                <button className='arrow-button'><img className='contact-arrow' src={arrow}/></button>
            </div>

        </section>
    )
}

export default Contact