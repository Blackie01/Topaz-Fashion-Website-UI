import React from 'react';
import './homepage.css';
import homely from '../assets/homely.svg';

function Homepage(){
    return(
        <section className='main-container'>
            <section className='main-text-area'>
                <h1>When art meets <br/> beauty, exploration blooms.</h1>
                <p>
                When culture combines with elegant <br/>
                 style it turns into a stunning art <br/>
                  approach, lets see beauty.
                  </p>

                  <div className='button-section'>
                    <button className='shop-adire-button'>SHOP ADIRE</button>
                    <button className='white-button'>CUSTOMIZE ORDER</button>
                  </div>
            </section>

            <section className='jumbo-image-container'>
                <img className='jumbo-image' src={homely}/>
            </section>
        </section>
    )
}

export default Homepage;