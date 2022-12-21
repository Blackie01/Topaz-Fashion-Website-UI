import React from 'react'
import "./footer.css"
import Insta from "../assets/Instagram.png"
import Twitter from "../assets/Twitter.png"
import Facebook from "../assets/Facebook.png"
import LinkedIn from "../assets/LinkedIn.png"


function Footer () {
    return (
        <section className='footer-container'>
            <section className='footer-col-1'>
                <section className='footer-col-1-text'>
                    <div className='logo'>
                        TOPAZ
                    </div>
                    <p>
                    Connecting you to Art and Culture <br className='logo-br' />with a modern outlook and style.
                    </p>
                </section>

                <section className='footer-images'>
                    <img src={Insta}/>
                    <img src={Twitter}/>
                    <img src={Facebook}/>
                    <img src={LinkedIn}/>
                </section>
                <section className='credits'>
                    <p>2022 Topaz Artistry Inc . All Rights Reserved.</p>
                </section>
            </section>

            <section className='aside-footer'>
            <section className='footer-col-2'>
                <ul className='footer-ul'>
                    <li className='ul-header'>Company</li>
                    <li>About Us</li>
                    <li>Meet the CEO</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </section>

            <section className='footer-col-3'>
                <ul className='footer-ul'>
                    <li className='ul-header'>Shop</li>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Collections</li>
                    <li>Journals</li>
                    <li>Tote Bags</li>
                    <li>Customized Order</li>
                </ul>
            </section>

            <section className='footer-col-4'>
                <ul className='footer-ul'>
                    <li className='ul-header'>FAQ</li>
                    <li>Payment</li>
                    <li>Shipping</li>
                    <li>Delivery</li>
                    <li>Returns</li>
                    <li>Gift Cards</li>
                </ul>
            </section>
            </section>
           
        </section>
    )
}

export default Footer