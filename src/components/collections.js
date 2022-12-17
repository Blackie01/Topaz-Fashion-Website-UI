import React, { useState, useEffect } from "react";
import './collections.css';
import asake from "../assets/asake.svg"
import cruise from "../assets/cruise.svg"
import arike from "../assets/arike.svg"
import moradun from "../assets/moradun.svg"

function Collections() {

      // // Consume API

      // const [collectionImage, setCollectionImage] = useState([]);

      // const imageAPI = () => {
      //   fetch(
      //     "https://api.unsplash.com/photos/?client_id=K16IDKeUiREUoe5ui0xZ18V_KNzBOVxIFRZ0LxW0E6s"
      //   )
      //     .then((response) => response.json())
      //     .then((json) => setCollectionImage(json));
      // };
    
      // useEffect(() => {
      //   imageAPI();
      // }, []);
    
      // console.log(collectionImage);

  return (
    <section className="collections-area">
      <h2>New Collections</h2>
      <p className="collections-subtext">Created with you in mind. Be part of magic.</p>

        <section className="container-each-collection">

          {/* API works */}

          {/* {collectionImage.map((collectionImg, i) => (
            <div className="each-collection">
                <img key={i} src={collectionImg.urls.regular}/>
            </div>
            
          ))} */}

          <section className="each-collection">
            <img src={asake}/>
            <section className="each-collection-text">
              <h3>Asake</h3>
              <p>Created with Culture and Art <br/> in mind to spark it up.</p>
            </section>
          </section>

          <section className="each-collection">
            <img src={cruise}/>
            <section className="each-collection-text">
              <h3>Cruise 50</h3>
              <p>Created with Culture and Art <br/> in mind to spark it up.</p>
            </section>
          </section>

          <section className="each-collection">
            <img src={arike}/>
            <section className="each-collection-text">
              <h3>Arike</h3>
              <p>Created with Culture and Art <br/> in mind to spark it up.</p>
            </section>
          </section>

          <section className="each-collection">
            <img src={moradun}/>
            <section className="each-collection-text">
              <h3>Moradun</h3>
              <p>Created with Culture and Art <br/> in mind to spark it up.</p>
            </section>
          </section>

        </section>

      <section className="explore-button-section">
      <button className="explore">EXPLORE COLLECTIONS</button>
      </section>
      
    </section>
  );
}

export default Collections;
