import React, { useState, useEffect } from "react";
import './collections.css';

function Collections() {

      // Consume API

      const [collectionImage, setCollectionImage] = useState([]);

      const imageAPI = () => {
        fetch(
          "https://api.unsplash.com/photos/?client_id=K16IDKeUiREUoe5ui0xZ18V_KNzBOVxIFRZ0LxW0E6s"
        )
          .then((response) => response.json())
          .then((json) => setCollectionImage(json));
      };
    
      useEffect(() => {
        imageAPI();
      }, []);
    
      console.log(collectionImage);

  return (
    <section className="collections-area">
      <h2>New Collections</h2>
      <p>Created with you in mind. Be part of magic.</p>

        <section className="container-each-collection">
          {collectionImage.map((collectionImg, i) => (
            <div className="each-collection">
                <img key={i} src={collectionImg.urls.regular}/>
            </div>
            
          ))}
        </section>

      <section className="explore-button-section">
      <button className="explore">EXPLORE COLLECTIONS</button>
      </section>
      
    </section>
  );
}

export default Collections;
