import React, { useState, useEffect } from "react";
import "./categories.css";


function Categories() {

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
    <section className="categories-container">
      <section className="categories-menu-section">
        <ul className="categories-menu">
          <li>Women</li>
          <li>Men</li>
          <li>Journals</li>
        </ul>
      </section>

      {/* <section className='categories'>
                
            </section> */}

      <section className="container-each-collection">
        {collectionImage.map((collectionImg, i) => (
          <div className="each-collection">
            <img key={i} src={collectionImg.urls.regular} />
          </div>
        ))}
      </section>

      <section className="shop-button-section">
        <button className="shop-button">SHOP WOMEN'S ADIRE</button>
      </section>
    </section>
  );
}

export default Categories;
